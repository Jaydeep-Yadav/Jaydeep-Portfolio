# Step-by-step guide to deploy your Vite + React app using the gh-pages

## 📌 Domain: https://jaydeep-yadav.site

## Step 1: Push Local Code to GitHub
### 1. Initialize Git (if not already)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a GitHub repository (e.g. vite-deploy-demo)
Go to GitHub → New Repository → Create without README

### 3. Connect local repo to GitHub

```bash
git remote add origin https://github.com/Jaydeep-Yadav/Jaydeep-Portfolio
git branch -M main
git push -u origin main
```
## Step 2: Configure Vite for GitHub Pages
### 1. Edit vite.config.js
If not using custom domain:

```bash
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jaydeep-portfolio/',  // use repo name here
  plugins: [react()],
})
```

If using custom domain:

```js
base: '/',
```

## Step 3: Install gh-pages
```bash
npm install --save-dev gh-pages
```

## Step 4: Update package.json Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Step 5: Add CNAME (if using custom domain)
Create a file at public/CNAME with:
```
yourdomain.com
```
It will be copied to dist/ during build and deployed with your site.

## Step 6: Deploy to GitHub Pages
```bash
npm run deploy
```
This will:

Build your app into dist/

Push it to the gh-pages branch

Site will be live at:

https://jaydeep-yadav.github.io/jaydeep-portfolio/ (default)

https://yourdomain.com (if using custom domain)

## Step 7: Set GitHub Pages Source
On GitHub:

Go to Settings → Pages

Source: gh-pages branch, folder /root

Check "Enforce HTTPS"

Save

Optionally enter your custom domain

## Step 8: Configure DNS for Custom Domain
On your domain registrar:

Use GitHub A records (for root domain):
| Type | Name | Value           |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

If you also want www.yourdomain.com:

| Type  | Name | Value                     |
| ----- | ---- | ------------------------- |
| CNAME | www  | `yourdomain.com` |

## Step 9: Deploy Your Site Again after updates

```bash
npm run deploy
```

Rebuild your app

Push it to the gh-pages branch

Include the correct CNAME file

---
After a short wait, GitHub will issue the SSL certificate and the site will go live securely! 🔒

💡 If you’re planning to host a Vite + React app with a custom domain, this setup is fast, free, and production-ready with HTTPS.

