# Deployment Guide

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended)

Vercel is the official hosting platform for Next.js and offers the best experience.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Features:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Automatic optimization

### Option 2: Netlify

```bash
# Build
npm run build

# Deploy the .next folder
netlify deploy --prod --dir=.next
```

### Option 3: Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🌍 Domain Setup

1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your hosting provider
3. Set up SSL certificate (automatic with Vercel/Netlify)
4. Update social links with your domain

## 📊 Analytics

Add analytics to track portfolio views:

```typescript
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## ✅ Pre-Launch Checklist

- [ ] Update all social links
- [ ] Replace email with yours
- [ ] Update phone number (if adding)
- [ ] Verify all external links work
- [ ] Test on mobile devices
- [ ] Check Google PageSpeed Insights
- [ ] Set up analytics
- [ ] Configure SEO metadata
- [ ] Test form submissions
- [ ] Set up email notifications

## 🔧 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_EMAIL=your@email.com
```

## 📈 Performance Optimization

- Image optimization: Use Next.js Image component
- Code splitting: Automatic with Next.js
- CSS optimization: Tailwind purges unused styles
- Font optimization: Use system fonts or preload

## 🔒 Security

- HTTPS enabled (automatic)
- CSP headers configured
- No sensitive data in client code
- Environment variables for secrets

## 📱 Mobile Testing

Before launch:
1. Test on iPhone and Android
2. Check responsive breakpoints
3. Verify touch interactions
4. Test on slow networks
5. Check battery usage

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading
- Clear browser cache
- Rebuild CSS with `npm run build`
- Check Tailwind config

### Slow performance
- Check Network tab in DevTools
- Optimize images
- Reduce animation complexity
- Use CDN for assets

## 📞 Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

