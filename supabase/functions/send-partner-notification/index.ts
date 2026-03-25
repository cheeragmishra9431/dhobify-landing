// Supabase Edge Function: Send email via Resend when a partner request is submitted
// Triggered by Database Webhook on partner_requests INSERT

const RESEND_API_URL = 'https://api.resend.com/emails'

interface PartnerRequestRecord {
  id: string
  store_name: string
  area: string
  phone: string
  monthly_capacity: string
  created_at: string
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  table: string
  schema: string
  record: PartnerRequestRecord | null
  old_record: PartnerRequestRecord | null
}

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const payload: WebhookPayload = await req.json()

    if (payload.type !== 'INSERT' || payload.table !== 'partner_requests' || !payload.record) {
      return new Response(
        JSON.stringify({ error: 'Invalid webhook payload or event type' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const record = payload.record
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const notifyEmail = Deno.env.get('NOTIFY_EMAIL') // Where to send the notification
    const fromEmail = Deno.env.get('FROM_EMAIL') || 'Dhobify <onboarding@resend.dev>'

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!notifyEmail) {
      console.error('NOTIFY_EMAIL is not set')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const subject = `New Partner Request: ${record.store_name}`
    const html = `
      <h2>New partner request from the landing page</h2>
      <p><strong>Store Name:</strong> ${escapeHtml(record.store_name)}</p>
      <p><strong>Area:</strong> ${escapeHtml(record.area)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(record.phone)}</p>
      <p><strong>Monthly Order Capacity:</strong> ${escapeHtml(record.monthly_capacity)}</p>
      <p><strong>Submitted at:</strong> ${record.created_at}</p>
    `

    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notifyEmail],
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('Resend API error:', res.status, errText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: errText }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await res.json()
    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Error:', err)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
