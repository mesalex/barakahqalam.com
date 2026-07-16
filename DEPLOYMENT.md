# Deployment Guide - Barakah Qalam

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `barakahqalam.com`
3. Public or Private (Public recommended)
4. Click "Create repository"

### Step 2: Push Your Code

```bash
cd barakahqalam
git remote add origin https://github.com/YOUR_USERNAME/barakahqalam.com.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. Click **Save**

### Step 4: Wait for Deployment

- GitHub will automatically deploy your site
- Check the **Actions** tab for deployment status
- Your site will be live at: `https://YOUR_USERNAME.github.io/barakahqalam.com/`

### Step 5: Customize Your Domain (Optional)

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `barakahqalam.com`
3. Add DNS records:
   - Type: **A**
   - Name: `@`
   - Value: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait for SSL certificate to activate

## 🧪 Test Locally First

```bash
cd barakahqalam
npm run dev
```

Open `http://localhost:3000` to see your site!

## 📦 Build for Production

```bash
npm run build
npm start
```

This builds the optimized production version.

## 🔍 Verify Deployment

After deployment:
1. Check your GitHub Pages URL
2. Test all pages: Home, Samples, About, Contact
3. Verify responsive design on mobile
4. Test download links
5. Check SEO meta tags

## 🚨 Troubleshooting

### Site not deploying?
- Check **Actions** tab for errors
- Verify GitHub Pages source is set to `main` branch
- Ensure workflow file is in `.github/workflows/` directory

### 404 errors?
- Check if you're using `/ (root)` as the folder
- Verify branch name is `main`
- Clear browser cache

### SSL certificate issues?
- Wait 5-10 minutes after adding custom domain
- Check DNS propagation
- GitHub provides automatic SSL

## 📊 Monitoring

- Check **Analytics** tab in GitHub repository
- Monitor **Actions** for deployment status
- Test regularly to ensure everything works

## 🎨 Next Steps After Deployment

1. Add real coloring page samples
2. Set up Pinterest board
3. Create X/Twitter account
4. Add Instagram account
5. Configure social media automation
6. Add Google Analytics
7. Test all features thoroughly

---

**Your site will be live in 2-5 minutes after pushing!** 🎉
