# Get Notified When Someone Submits the Partner Form

When a row is inserted into `partner_requests`, you can get notified via email. Here are options:

## Option 1: Supabase Edge Function + Resend (Recommended, no 3rd-party automation)

**No Zapier, Make.com, or Pipedream needed.** Uses Supabase Edge Functions + Resend (free tier: 3,000 emails/month).

See **[EDGE_FUNCTION_SETUP.md](./EDGE_FUNCTION_SETUP.md)** for full setup instructions.

Quick summary:
1. Install Supabase CLI, link project
2. Sign up at [resend.com](https://resend.com), get API key
3. Set secrets: `RESEND_API_KEY`, `NOTIFY_EMAIL`, `FROM_EMAIL`
4. Deploy: `supabase functions deploy send-partner-notification`
5. Create Database Webhook in Supabase Dashboard → point to the Edge Function URL

---

## Option 2: Third-party automation (Zapier, Make.com, n8n)

1. In **Supabase Dashboard** → **Database** → **Webhooks**
2. Click **Create a new webhook**
3. Configure:
   - **Name:** Partner form notification
   - **Table:** `partner_requests`
   - **Events:** `INSERT`
   - **Type:** `HTTP Request`
   - **URL:** Your webhook URL from Zapier/Make.com/n8n

### Make.com (free tier)
1. Create scenario: **Webhooks** (Custom webhook) → **Gmail** (Send an email)
2. Use the webhook URL in Supabase
3. Map `record.store_name`, `record.area`, etc. from the webhook data

---

## Option 3: Supabase Realtime (for custom dashboards)

Subscribe to `partner_requests` changes in your admin app:

```javascript
supabase
  .channel('partner_requests')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'partner_requests' }, (payload) => {
    console.log('New partner request:', payload.new)
    // Show toast, send to your notification service, etc.
  })
  .subscribe()
```

Note: Realtime requires a client listening; it won't send you an email by itself. Combine with Option 1 for email alerts.
