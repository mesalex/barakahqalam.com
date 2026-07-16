# Barakah Qalam Deployment Guide

## 🚀 GitHub Pages Deployment

The website is configured to automatically deploy to GitHub Pages when code is pushed to the main branch.

### Current Status
- **Repository**: mesalex/barakahqalam.com
- **GitHub Pages URL**: https://mesalex.github.io/barakahqalam.com/
- **Custom Domain**: barakahqalam.com (DNS configured)

### Build Configuration
- **Static Export**: Enabled (`output: 'export'`)
- **Image Optimization**: Disabled (`images.unoptimized: true`)
- **Generate Static Params**: Implemented for dynamic routes

### GitHub Pages Setup
1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically build and deploy on push to main

### Custom Domain Configuration
1. In repository Settings > Pages
2. Under "Custom domain", enter `barakahqalam.com`
3. Enable "Enforce HTTPS" (recommended)

### DNS Configuration
- **A Record**: barakahqalam.com → 185.199.108.153
- **A Record**: barakahqalam.com → 185.199.109.153
- **A Record**: barakahqalam.com → 185.199.110.153
- **A Record**: barakahqalam.com → 185.199.111.153

### Build Process
1. Code push triggers GitHub Actions
2. Node.js environment is set up
3. Dependencies are installed
4. Static build is generated
5. Artifact is uploaded to Pages
6. Website is deployed

### Troubleshooting
If the deployment fails:
1. Check the GitHub Actions logs
2. Verify the build configuration
3. Ensure all dependencies are correctly specified
4. Check for any TypeScript errors in the code