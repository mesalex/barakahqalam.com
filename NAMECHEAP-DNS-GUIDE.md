# Namecheap DNS Setup Guide (Updated 2024)

## 📍 Where to Find DNS Management in Namecheap

### **Method 1: Advanced DNS Tab (Most Common)**

1. **Log in to Namecheap**
   - Go to https://namecheap.com
   - Log in with your account

2. **Navigate to Domain List**
   - Click **Domain List** in the left sidebar

3. **Find Your Domain**
   - Locate `barakahqalam.com`
   - Click the **Manage** button next to it

4. **Go to Advanced DNS Tab**
   - Click the **Advanced DNS** tab at the top
   - This is where you'll see all DNS records

5. **Add Your A Record**
   - Click **Add New Record** button
   - Configure:
     ```
     Type:          A Record
     Host:          @
     Value:         185.199.108.153
     TTL:           Auto (or 1800)
     ```

6. **Add WWW Record (Optional)**
   - Click **Add New Record** again
   - Configure:
     ```
     Type:          A Record
     Host:          www
     Value:         185.199.108.153
     TTL:           Auto (or 1800)
     ```

---

### **Method 2: Quick Links (If Advanced DNS Not Available)**

If you don't see "Advanced DNS" tab:

1. **After clicking Manage**
   - Look for **Quick Links** section
   - Click **DNS Records** or **Manage DNS**

2. **Add Records**
   - Click **Add New Record** button
   - Configure as above

---

### **Method 3: Manage All Hosts (Older Interface)**

1. **After clicking Manage**
   - Click **Manage All Hosts** button

2. **Add Records**
   - Click **Add New Record** button
   - Configure as above

---

## 🎯 Verify DNS is Working

After adding the records:

1. **Wait 5-10 minutes** for DNS propagation

2. **Check DNS Status**
   - In Namecheap, click **Advanced DNS** tab
   - You should see your A records listed
   - Status should say "Active" or "No Error"

3. **Test with nslookup** (optional)
   ```bash
   nslookup barakahqalam.com
   ```
   Should return: `185.199.108.153`

---

## ✅ Next Steps After DNS is Added

1. **Go to GitHub**
   - https://github.com/mesalex/barakahqalam.com
   - Click **Settings** tab

2. **Configure Pages**
   - Left sidebar → **Pages**
   - Under **Custom domain**, type: `barakahqalam.com`
   - Click **Save**

3. **Wait for Verification**
   - GitHub will automatically verify the DNS record
   - Green checkmark will appear ✅
   - SSL certificate will be issued automatically

---

## 🚨 Troubleshooting

### **"Add New Record" Button Not Visible**

- Make sure you're on the **Advanced DNS** tab
- Try refreshing the page (F5)
- Check if you're logged in correctly

### **DNS Records Not Showing**

- Wait 5-10 minutes for propagation
- Check if DNS is enabled for your domain
- Try using **Manage All Hosts** instead

### **GitHub Still Not Verifying**

- Wait another 5-10 minutes
- Check DNS records are "Active" in Namecheap
- Try clicking **Retry** in GitHub Pages settings

---

## 📝 Summary

**What you need to add:**

1. **A Record for @**
   - Type: A Record
   - Host: @
   - Value: 185.199.108.153

2. **A Record for www** (optional)
   - Type: A Record
   - Host: www
   - Value: 185.199.108.153

**After that:**
- Go to GitHub Pages settings
- Add custom domain: `barakahqalam.com`
- Wait for verification (5-15 minutes)
- Site will be live at https://barakahqalam.com/

---

**Let me know once you've added the DNS records!** 🚀
