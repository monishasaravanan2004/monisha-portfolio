# Monisha S — Java Full Stack Developer Portfolio

A responsive, high-contrast, modern portfolio built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**, featuring dark obsidian aesthetics (`#08070B`), interactive 3D tilt effects, certificate modal inspector, and direct email delivery.

---

## 📧 EmailJS Setup Guide (Direct Email Contact Form)

The Contact section uses **EmailJS** (`@emailjs/browser`) to send visitor messages directly to `monishamonisaravanan08@gmail.com` securely without exposing backend credentials.

### 1. Create a Free EmailJS Account
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. Gmail connected to `monishamonisaravanan08@gmail.com`).
3. Create an **Email Template** with the following template fields:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email address
   - `{{subject}}` — Message subject
   - `{{message}}` — Message content
   - `{{to_name}}` — Recipient (Monisha S)

### 2. Local Environment Variables (.env)
Create a `.env` file in the root directory (based on `.env.example`):

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 3. Deploying to GitHub Pages
To make EmailJS work on GitHub Pages:
1. Go to your repository **Settings > Secrets and variables > Actions**.
2. Add Repository secrets for:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Ensure your GitHub Actions workflow passes these environment variables during `npm run build`.

---

## 🚀 Commands

- **Development Server**: `npm run dev`
- **Build Production**: `npm run build`
- **Preview Build**: `npm run preview`
