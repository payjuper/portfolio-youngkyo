import { NextResponse } from 'next/server'

// Dual provider: Resend or AWS SES (v3)
// Configure via env:
// MAIL_PROVIDER=resend|ses
// For Resend: RESEND_API_KEY
// For SES: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, MAIL_FROM, MAIL_TO

export async function POST(req: Request){
  const data = await req.formData()
  const email = String(data.get('email') || '')
  const name = String(data.get('name') || '')
  const message = String(data.get('message') || '')

  const provider = (process.env.MAIL_PROVIDER || 'resend').toLowerCase()

  try{
    if(provider === 'ses'){
      const { SESClient, SendEmailCommand } = await import('@aws-sdk/client-ses')
      const client = new SESClient({ region: process.env.AWS_REGION })
      const from = process.env.MAIL_FROM || `portfolio@${process.env.VERCEL_URL || 'example.com'}`
      const to = process.env.MAIL_TO || 'you@example.com'
      const cmd = new SendEmailCommand({
        Destination: { ToAddresses: [to] },
        Message: {
          Body: { Text: { Data: `From: ${name} <${email}>\n\n${message}` } },
          Subject: { Data: `Portfolio message from ${name}` }
        },
        Source: from
      })
      await client.send(cmd)
    } else {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const to = process.env.MAIL_TO || 'you@example.com'
      await resend.emails.send({
        from: process.env.MAIL_FROM || 'portfolio@your-domain',
        to,
        subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`
      })
    }

    return NextResponse.json({ ok: true })
  }catch(err){
    console.error('[contact] error', err)
    return NextResponse.json({ ok: false, error: 'failed' }, { status: 500 })
  }
}