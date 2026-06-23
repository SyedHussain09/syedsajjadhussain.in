# Syed Sajjad Hussain Portfolio

Premium AI Engineer portfolio for `https://syedsajjadhussain.in/`.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Motion for React
- Typed content files
- JSON-LD, robots, Open Graph image, generated icons

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run resume:pdf
npm run projects:images
npm run capture:screenshots
```

## Environment

Create `.env.local` if needed:

```bash
NEXT_PUBLIC_SITE_URL=https://syedsajjadhussain.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

## Edit Content

- Profile and contact: `src/data/profile.ts`
- Projects: `src/data/projects.ts`
- Experience and GenAI training: `src/data/experience.ts`
- Skills and project map: `src/data/skills.ts`
- Certificates: `src/data/certificates.ts`
- Blog posts: `src/data/blog.ts`

## Certificates

Certificate assets live in `public/certificates`.

The uploaded archive was expected to provide:

- `micro1-startup.jpg`
- `Google for StartUp.pdf`
- `Complete web development.pdf`
- `Coursera ML certificate.pdf`
- `py 3.pdf`
- `coding competition.jpeg`

If the Educosys certificate becomes available, add the file to `public/certificates` and update the Educosys entry in `src/data/certificates.ts`.

## Resume PDF

The generated PDF path is:

`public/resume/syed-sajjad-hussain-ai-engineer.pdf`

Regenerate it with:

```bash
npm run resume:pdf
```

## Project Screenshots

`npm run capture:screenshots` attempts Playwright capture if `playwright` is installed. If not, it writes fallback SVG project cards and does not block the build.

## Netlify Deployment

Manual drag-and-drop deploy:

1. Run `npm run build:static`.
2. Upload the generated `out` folder to Netlify Drop.
3. Do not upload the project root, `.next`, `src`, or `node_modules`.

GitHub-connected deploy:

1. Push the repository to GitHub.
2. Import the repository in Netlify.
3. Netlify will read `netlify.toml`.
4. Build command: `npm run build`.
5. Publish directory: `out`.
6. Set `NEXT_PUBLIC_SITE_URL=https://syedsajjadhussain.in`.
7. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` after getting the Google verification value, or use DNS TXT verification.
8. Add custom domain `syedsajjadhussain.in`.
9. Ensure the canonical domain redirects consistently.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL=https://syedsajjadhussain.in`.
4. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` after getting the Google meta verification value, or use DNS TXT verification.
5. Add custom domain `syedsajjadhussain.in`.
6. Configure DNS records as Vercel instructs.
7. Ensure the canonical domain redirects consistently.

## Google Search Console Checklist

1. Deploy production to Vercel.
2. Add custom domain `syedsajjadhussain.in`.
3. Verify domain through DNS TXT in Google Search Console.
4. Inspect homepage with URL Inspection.
5. Request indexing after deployment.
6. Check `https://syedsajjadhussain.in/robots.txt`.
7. Run Rich Results Test for structured data.
8. Monitor Core Web Vitals.
9. Link the domain from GitHub profile and LinkedIn profile.
10. Avoid duplicate preview URLs being indexed.

## QA Targets

- Lighthouse Performance: 95+ mobile target
- SEO: 100 target
- Accessibility: 95+ target
- Best Practices: 95+ target
- LCP under 2.5s
- INP under 200ms
- CLS under 0.1

## Notes

The site avoids unsupported claims: no fake clients, no fake rankings, no fake traffic, no fake testimonials, and no fake production scale.
