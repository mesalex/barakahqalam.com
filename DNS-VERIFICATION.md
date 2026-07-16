# DNS Verification Guide for Namecheap

## 🔧 Step 1: Add DNS Record to Namecheap

1. **Log in to Namecheap:**
   - Go to https://namecheap.com
   - Log in with your account

2. **Navigate to Domain Manager:**
   - Click on **Domain List** in the left sidebar
   - Find `barakahqalam.com` and click **Manage**

3. **Add DNS Record:**
   - Click the **Manage** button next to "DNS Records"
   - Click **Add New Record** button

4. **Configure the Record:**
   ```
   Type:          A Record
   Host:          @
   Value:         185.199.108.153
   TTL:           Auto (or 1800)
   ```

5. **Add Another Record (Optional but recommended):**
   ```
   Type:          A Record
   Host:          www
   Value:         185.199.108.153
   TTL:           Auto (or 1800)
   ```

## 🎯 Step 2: Verify in GitHub

1. **Go to GitHub Repository:**
   - https://github.com/mesalex/barakahqalam.com
   - Click **Settings** tab

2. **Navigate to Pages:**
   - Left sidebar → **Pages**

3. **Add Custom Domain:**
   - Under **Custom domain**, type: `barakahqalam.com`
   - Click **Save**

4. **Verify Domain:**
   - GitHub will automatically detect the DNS record
   - You'll see a verification status (green checkmark ✅)
   - It may take 5-10 minutes for DNS propagation

## ⏱️ Step 3: Wait for SSL Certificate

1. **GitHub Issues SSL Certificate:**
   - Once verified, GitHub will automatically issue an SSL certificate
   - This usually takes 5-15 minutes

2. **Site is Live:**
   - Your site will be accessible at: https://barakahqalam.com/
   - No manual configuration needed

## 📊 DNS Propagation Time

- **Namecheap:** Usually 5-10 minutes
- **GitHub Pages:** 2-5 minutes after DNS update
- **SSL Certificate:** 5-15 minutes after domain verified

## 🔍 Troubleshooting

### **DNS Not Detected:**
- Wait 10-15 minutes for DNS propagation
- Check your DNS record again in Namecheap
- Use `nslookup barakahqalam.com` to verify DNS is working

### **GitHub Still Shows Not Verified:**
- Click **Retry** on GitHub Pages settings
- Check that you used the correct A record value: `185.199.108.153`

### **SSL Certificate Not Issued:**
- Wait another 10 minutes
- Check GitHub Pages status page: https://www.githubstatus.com/

## 📝 Quick Reference

**A Record Values for GitHub Pages:**
- `185.199.108.153` (US East)
- `185.199.109.153` (US East)
- `185.199.110.153` (US West)
- `185.199.111.153` (US West)

GitHub automatically uses the nearest server.

## ✅ Final Check

Once verified, you should see:
- ✅ Custom domain verified in GitHub Pages settings
- ✅ Site accessible at https://barakahqalam.com/
- ✅ Lock icon in browser (HTTPS)
- ✅ No "Site not found" errors

---

**Next Steps After Domain Verification:**
1. Set up social media automation (Zernio skill)
2. Add more content to your site
3. Monitor analytics
