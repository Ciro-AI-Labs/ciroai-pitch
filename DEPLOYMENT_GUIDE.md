# Deployment Guide for CIRO AI Pitch Deck

## 🎯 **Current Issue**
Your site at `pitch.ciroai.us` is showing the README.md instead of the actual pitch deck application.

## ✅ **Solution**
The issue is fixed! I've configured Next.js for static export. Here's what you need to do:

## 📁 **Deploy the Correct Files**

### Option 1: Upload the `/out` directory contents
1. **Location**: All the deployable files are now in the `/out` directory
2. **Upload**: Upload everything **inside** the `/out` folder to your web hosting
3. **Key File**: Make sure `index.html` from `/out` is served as the main page

### Option 2: Build fresh files (if needed)
```bash
npm run export
```
This generates a new `/out` directory with all static files.

## 🗂️ **What to Deploy**
Upload these files from the `/out` directory to your web server:
```
/out/
├── index.html          ← This should be your main page
├── 404.html
├── images/             ← All images (team photos, logos, etc.)
├── _next/              ← JavaScript and CSS files
└── index.txt
```

## 🔧 **Web Server Configuration**
Make sure your web server:
- Serves `index.html` as the default page (not `README.md`)
- Serves files from the uploaded `/out` directory contents
- Has the correct MIME types for `.js`, `.css`, and image files

## 🚀 **Expected Result**
After deploying the `/out` directory contents:
- `pitch.ciroai.us` → Shows the **Opening Slide** (not README)
- Navigation between slides works
- All images load correctly
- Interactive presentation features work

## ✨ **What's Fixed**
- ✅ Static export configuration added
- ✅ Proper `index.html` generated
- ✅ All images exported correctly
- ✅ React components compiled to static files
- ✅ Removed README from interfering with the main page

## 📋 **Next Steps**
1. Download or access the `/out` directory from your project
2. Upload **only the contents** of `/out` to your web hosting
3. Make sure your web server points to `index.html` as the default page
4. Test `pitch.ciroai.us` - you should now see the pitch deck!

Your pitch deck will now load properly with the Opening Slide as the first thing visitors see! 🎉 