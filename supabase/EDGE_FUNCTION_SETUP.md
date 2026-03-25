# Partner Notification: Supabase Edge Function + Resend

This setup sends you an email when someone submits the "Become a Partner" form—no Zapier, Make.com, or other third-party automation needed.

## Prerequisites

- Supabase project (you already have this)
- [Resend](https://resend.com) account (free tier: 3,000 emails/month)
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed

---

## Step 1: Install Supabase CLI

```bash
# macOS (Homebrew)
brew install supabase/tap/supabase

# Or via npm
npm install -g supabase
```

---

## Step 2: Log in and link your project

```bash
cd /path/to/Dhobify-frontend

# Log in to Supabase
supabase login

# Link to your existing project (get project ref from Supabase Dashboard URL)
supabase link --project-ref eneaamruppyylphtokis
```

---

## Step 3: Get your Resend API key

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your domain (or use `onboarding@resend.dev` for testing)
3. Go to **API Keys** → **Create API Key**
4. Copy the key (starts with `re_`)

---

## Step 4: Set Edge Function secrets

```bash
supabase secrets set RESEND_API_KEY=re_your_api_key_here
supabase secrets set NOTIFY_EMAIL=waytogocheerag@gmail.com
supabase secrets set FROM_EMAIL="Dhobify <onboarding@resend.dev>"
```

- **RESEND_API_KEY:** Your Resend API key (required)
- **NOTIFY_EMAIL:** Where to send the notification email (required)
- **FROM_EMAIL:** Sender address. Use `onboarding@resend.dev` for testing, or your verified domain (e.g. `Dhobify <hello@dhobify.com>`)

---

## Step 5: Deploy the Edge Function

```bash
# --no-verify-jwt allows the Database Webhook to call the function without a JWT
supabase functions deploy send-partner-notification --no-verify-jwt
```

After deployment, your function URL will be:
```
https://eneaamruppyylphtokis.supabase.co/functions/v1/send-partner-notification
```

---

## Step 6: Create the Database Webhook

1. Go to **Supabase Dashboard** → **Database** → **Webhooks**
2. Click **Create a new webhook**
3. Configure:
   - **Name:** Partner form notification
   - **Table:** `partner_requests`
   - **Events:** `INSERT`
   - **Type:** **HTTP Request**
   - **URL:** `https://eneaamruppyylphtokis.supabase.co/functions/v1/send-partner-notification`

4. Save the webhook

> **Note:** The Edge Function is configured with `verify_jwt = false` in `supabase/config.toml`, so the webhook can call it without an Authorization header. The function URL is not publicly listed, so this is acceptable for webhook use.

---

## Step 7: Test

1. Submit the partner form on your landing page
2. Check your email (the address in `NOTIFY_EMAIL`)
3. You should receive a notification with the partner details

---

## Troubleshooting

### No email received
- Check Resend dashboard for delivery status
- Verify `RESEND_API_KEY` and `NOTIFY_EMAIL` are set: `supabase secrets list`
- Check Edge Function logs: **Supabase Dashboard** → **Edge Functions** → **send-partner-notification** → **Logs**

### Webhook not firing
- Ensure the `partner_requests` table exists (run `supabase/partner_requests.sql` if not)
- Verify the webhook is enabled in Database → Webhooks

### Resend "from" domain error
- For production, verify your domain in Resend
- For testing, use `onboarding@resend.dev` as the from address
