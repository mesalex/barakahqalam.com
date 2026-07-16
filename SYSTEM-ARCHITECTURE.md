# BarakahQalam System Architecture

## Overview
Complete autonomous system for managing barakahqalam.com website and social media presence using OpenClaw skills.

## Components

### 1. Website Deployment (barakahqalam-deployer skill)
**Status:** ✅ Already built (Next.js 14 + TypeScript)

**Capabilities:**
- GitHub repository management
- GitHub Pages deployment
- Environment configuration
- CI/CD automation via GitHub Actions

**Workflow:**
```
User makes changes → Git commit → GitHub Actions builds → GitHub Pages deploys
```

**Commands:**
- `/deploy` - Deploy current changes
- `/setup-repo` - Initialize GitHub repository
- `/check-status` - Check deployment status

### 2. Social Media Automation (barakahqalam-autoposter skill)
**Status:** 🔄 Pending creation (approved in skill workshop)

**Platforms:**
- Pinterest → Auto-create pins from free samples
- X/Twitter → Auto-post announcements
- Instagram → Schedule posts
- Threads → Cross-post from X

**Capabilities:**
- Natural language posting via Zernio skill
- Multi-platform publishing via Upload-Post MCP
- Scheduled posting via cron jobs
- Engagement tracking

**Workflow:**
```
New content added → Generate posts → Schedule/cross-post → Track engagement
```

**Commands:**
- `/post-sample <sample-name>` - Post a specific sample
- `/auto-post` - Run full automation cycle
- `/post-announcement <message>` - Post announcement to all platforms

## Integration Points

### GitHub Integration
- **Repository:** `barakahqalam.com` (to be created)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions workflow (`deploy.yml`)
- **Access:** GitHub Personal Access Token (repo scope)

### Social Media APIs
- **Zernio Skill:** Natural language posting interface
- **Upload-Post MCP:** 40 tools for multi-platform publishing
- **Platforms:** Pinterest, X, Instagram, Threads

### Automation
- **Cron Jobs:** Scheduled posting (every 6 hours)
- **GitHub Actions:** Auto-deployment on push
- **Webhooks:** Real-time content updates

## Deployment Pipeline

### Phase 1: GitHub Setup (10 minutes)
1. Create GitHub repository
2. Push existing code
3. Enable GitHub Pages
4. Configure custom domain

### Phase 2: Website Deployment (Already done)
- ✅ Next.js 14 with TypeScript
- ✅ Tailwind CSS styling
- ✅ Homepage, Free Samples, About, Contact pages
- ✅ GitHub Actions for auto-deployment

### Phase 3: Social Media Setup (Pending)
1. Install Zernio skill
2. Configure Upload-Post MCP
3. Set up Pinterest API
4. Configure X/Twitter API
5. Set up Instagram/Threads access

### Phase 4: Automation (Pending)
1. Create cron jobs for scheduled posting
2. Set up GitHub Actions for content detection
3. Configure engagement tracking
4. Test end-to-end workflow

## Technical Stack

### Website
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

### Social Media
- **Posting Interface:** Zernio skill (natural language)
- **Multi-platform:** Upload-Post MCP (40+ tools)
- **Platforms:** Pinterest, X, Instagram, Threads

### Automation
- **Scheduling:** Cron jobs
- **Monitoring:** GitHub Actions
- **Tracking:** Engagement metrics

## Security & Privacy

### GitHub
- Use Personal Access Token with `repo` scope
- Store token in environment variables
- Never commit tokens to repository

### Social Media
- Use API keys with restricted scopes
- Rotate keys regularly
- Monitor API usage

## Maintenance

### Daily
- Check deployment status
- Monitor social media engagement
- Review content performance

### Weekly
- Update website content
- Optimize social media strategy
- Review analytics

### Monthly
- Audit security settings
- Update dependencies
- Review and refine automation

## Next Steps

1. **Get GitHub token** (repo scope)
2. **Install skills** from skill workshop
3. **Set up social media APIs**
4. **Test deployment pipeline**
5. **Launch and monitor**

## Success Metrics

- ✅ Website live and accessible
- ✅ Social media automated
- ✅ Zero manual posting required
- ✅ Engagement tracking enabled
- ✅ Auto-deployment working
- ✅ Scheduled posting operational
