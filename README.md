# Young · Portfolio (Next.js)

A minimalist, fast portfolio using Next.js App Router, Tailwind, and server actions.

## Dev
```bash
npm i
npm run dev
```

## Deploy (Vercel)
1) Push to GitHub
2) Import repo in Vercel
3) Set env vars (below) and deploy

## Environment
Set these in Vercel (Project Settings → Environment Variables):

```
# Choose one provider
MAIL_PROVIDER=resend            # or 'ses'

# Resend (if using)
RESEND_API_KEY=...             # https://resend.com
MAIL_FROM=portfolio@your-domain
MAIL_TO=you@example.com

# AWS SES (if using)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
MAIL_FROM=portfolio@your-verified-domain
MAIL_TO=you@example.com
```

## Customize
- Edit `lib/projects.ts` to add projects
- Update copy in `app/(site)/*`
- Replace `/public/profile.jpg` and `/public/og-image.png`
- Set `metadataBase` in `app/layout.tsx`