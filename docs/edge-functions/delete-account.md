# Account deletion (`delete_user_account`) — compliance notes

Internal reference for engineering, ops, and policy alignment. Not legal advice.

## Infra: backup retention & restores (Supabase-hosted Postgres)

**Who to confirm with:** The person or team that owns the Supabase project (production): check **Dashboard → Project Settings → Subscription** (plan tier) and **Database → Backups** (scheduled backups vs Point-in-Time Recovery). Replace any generic “up to X days” wording in customer-facing policies with the values shown there for each environment.

### How long deleted-user data can exist in backups

- Scheduled **daily** database backups are retained per Supabase plan: **Pro — up to 7 days**, **Team — up to 14 days**, **Enterprise — up to 30 days** of backups you can restore from ([Database Backups](https://supabase.com/docs/guides/platform/backups)).
- If **Point-in-Time Recovery (PITR)** is enabled, WAL-based history is retained for a configured window (**7, 14, or 28 days**), after which older recovery points roll off ([same doc — PITR pricing table](https://supabase.com/docs/guides/platform/backups#pricing)).
- Backups are a **snapshot (or replay) of the database at a point in time**. Until that backup ages out of retention, it can still contain rows that were later deleted or anonymized by `delete_user_account` (for example `public.users` / `auth.users` that no longer exist in the live database).

### Could a restore bring back deleted rows?

- **Yes.** Restoring to a recovery time **before** account deletion replays the database to that moment, so deleted or stripped PII can reappear until the application or ops runs deletion/anonymization again.
- **Mitigations (operational):** Prefer restore to a timestamp **after** the deletion when using PITR; after any full restore, run a **reconciliation** pass (re-apply deletion RPC or equivalent data fixes); document **who approves** restores and downtime; avoid copying old backups into production without a post-restore checklist. **Storage objects** are not restored with DB-only restores (see Supabase note on Storage vs database backups in the same guide).

### What to confirm in production

Have whoever runs prod DB / DR open the Supabase Dashboard for each environment and note:

1. Plan (Free / Pro / Team / Enterprise) — drives scheduled backup retention you can restore from.
2. Whether PITR is on and which retention tier (7 / 14 / 28 days) is selected.

That is the source of truth for “up to X days”; Supabase’s public docs only give plan defaults and PITR options.

### Documented windows (Supabase managed Postgres — from public docs)

| Mode | Retention |
|------|-----------|
| Daily scheduled backups | Up to 7 days (Pro), up to 14 days (Team), up to 30 days (Enterprise) |
| PITR (add-on) | Up to 7, 14, or 28 days depending on the tier you enable |

### Placeholder text for policies (swap X from Dashboard)

- **Pro, no PITR:** “Scheduled encrypted database backups may retain superseded data, including pre-deletion user rows, for up to 7 days — confirm in Supabase Dashboard for this project.”
- **With PITR (example 14-day tier):** “Point-in-time recovery may retain recoverable database state for up to 14 days — confirm under Database → Point in Time.”

---

## Backend facts (this codebase — not legal advice)

These tables/fields exist for commercial and audit records (no automated TTL or purge jobs were found in migrations):

| Area | What is stored |
|------|----------------|
| Orders & commercial snapshot | `orders` (amounts, fees, coupon references, status, pickup/delivery fields, `billed_at`, etc.), `order_items` (measured quantities, prices), `order_status_history`, `order_etd_history`. |
| Invoicing / billing | `bills`, `bill_items` (line totals, voiding, `generated_at` / `generated_by`). |
| Store settlement / “paid through ops” | `store_settlements` (per-order amount, note, `marked_by`, `marked_at`) — admin settlement workflow, not a full PSP ledger. |
| Governance / disputes support | `admin_order_actions` (`action`, `previous_value` / `new_value` JSON, `reason`, timestamps). |
| Promotions audit | `coupon_redemptions`, orders coupon columns; `user_id` on redemptions can become null after account deletion while amounts/order links remain. |
| Account deletion | `delete_user_account` strips PII on orders (`address_snapshot`, `customer_notes`) and clears `orders.user_id` (and similar for reviews/coupons), but keeps orders, bills, settlements, status/ETD history as business records. |

**Not present in schema (as of this scan):** dedicated payment-processor IDs, card tokens, webhook payloads, or a `payment_status` column. If you add Razorpay/Stripe/etc., retention for PSP logs vs your DB should be documented separately.

**Fraud / abuse:** Minimal dedicated store — integrity is mostly RLS + workflow rules, plus admin audit rows — not a separate “fraud case” datastore.

**Push / marketing:** `push_tokens` (device tokens, `last_used_at`), `users.marketing_push_opt_in` — separate from tax books; retention should reflect consent + operational necessity, not invoice law.

### If `auth` deletion fails (non-fatal path)

There is a risk that `auth.users` still exists briefly or until ops fix. Track internally; optionally tighten the API. Customer-facing copy may note that successful completion removes the sign-in identity when deletion finishes.

---

## Retention placeholders (legal / finance — counsel to finalize)

### 1) Tax / accounting / invoices

- **`[RETENTION PERIOD]`** — e.g. “Commercial and tax records: **[X years]** from **[end of financial year / tax assessment / transaction date]** — exact period per jurisdiction (e.g. India GST books/returns vs other regimes).” Align to what you actually archive: DB rows above + PDF/CSV exports, accounting exports, and GST filings your CA keeps outside this app.

- **`[LEGAL BASIS]`** — For counsel to choose (examples only, not recommendations): statutory obligation under company/tax law; contract (need to perform and evidence the sale); in some systems legitimate interests (limited, documented, where statutory retention does not already cover it). Do not claim “legitimate interest” for pure tax books where law mandates retention.

Cross-check: Your approved written retention schedule (from CA + lawyer) should name: orders / order_items / bills / bill_items / store_settlements / coupon redemption trail / admin settlement notes — and any off-DB invoice artifacts.

### 2) Chargebacks / disputes

- **`[RETENTION PERIOD]`** — e.g. “Order and payment-correlation records retained for at least **[longer of: statutory accounting period / card network or PSP dispute window + buffer]**.” Card schemes often imply many months of evidence; your PSP contract usually defines how long they keep data vs what you must retain. If you only have order + bill + settlement + admin actions in-app, say that explicitly until PSP data lands in your DB.

- **`[LEGAL BASIS]`** — Typically legal claims / defense of legal rights (where recognized), contract with PSP/merchant rules, and overlapping statutory retention for underlying invoices — wording is jurisdiction- and fact-specific.

**Backend fact:** Dispute-relevant artifacts in-app are mainly order lifecycle, billed amounts, void/regenerate history, settlement notes, admin reasons — not full payment instrument data in current migrations.

### 3) Fraud / abuse

- **`[RETENTION PERIOD]`** — e.g. “Security and abuse signals: **[minimal data]** for **[Y months]** unless a longer period is required for an active investigation or legal process — exact scope approved by counsel.”

- **`[LEGAL BASIS]`** — Often legitimate interests (security/fraud prevention) or legal obligation where reporting laws apply — proportionality check in GDPR-like regimes; India DPDP has its own lawful-ground vocabulary — get local wording.

**Backend fact:** No dedicated fraud-case table was identified; retention is effectively the same operational DB (orders, audits, admin actions) with PII reduced after account deletion per the account-deletion migration in the backend repo. If you later add device fingerprinting or risk scores, add a separate row to the inventory and retention table.

---

## Privacy policy / RoPA alignment

- Engineering maintains a one-page data inventory (tables + purposes) updated when migrations ship.
- Finance ties invoice/GST retention to CA-approved schedules.
- Legal fills `[RETENTION PERIOD]` and `[LEGAL BASIS]` per country/role (B2C vs B2B if any), and avoids copying generic “GDPR Article 6” text without mapping to your actual grounds.
- Legitimate interest paragraphs should include necessity + user rights (object/opt-out where applicable) only if counsel says LI is appropriate — not as a blanket substitute for tax law.
