const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: 'http://localhost:3001',
  outputDir: 'exported-gifs',
  slideDelay: 3000, // Time to spend on each slide (3 seconds)
  animationDelay: 1000, // Extra time for animations to complete
  videoWidth: 1920,
  videoHeight: 1080,
  totalSlides: 12
};

async function exportSlidesToGif() {
  console.log('🚀 Starting slide export to GIF...');
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ 
    headless: false // Set to true for background operation
  });
  
  try {
    const context = await browser.newContext({
      viewport: { width: CONFIG.videoWidth, height: CONFIG.videoHeight },
      recordVideo: {
        dir: CONFIG.outputDir,
        size: { width: CONFIG.videoWidth, height: CONFIG.videoHeight }
      }
    });
    
    const page = await context.newPage();
    
    console.log('📱 Navigating to presentation...');
    await page.goto(CONFIG.baseUrl);
    
    // Wait for page to load
    await page.waitForTimeout(2000);
    
    console.log('🇪🇸 Switching to Spanish...');
    // Click the Spanish language button
    await page.click('button:has-text("ES")');
    await page.waitForTimeout(1000);
    
    console.log('🎯 Starting presentation mode...');
    // Click the Present button
    await page.click('button:has-text("Present")');
    await page.waitForTimeout(2000);
    
    // Export individual slides
    for (let slideIndex = 0; slideIndex < CONFIG.totalSlides; slideIndex++) {
      console.log(`📸 Capturing slide ${slideIndex + 1}/${CONFIG.totalSlides}...`);
      
      // Wait for animations to complete
      await page.waitForTimeout(CONFIG.animationDelay);
      
      // Take screenshot of current slide
      await page.screenshot({
        path: path.join(CONFIG.outputDir, `slide-${slideIndex + 1}-spanish.png`),
        fullPage: false
      });
      
      // Wait before moving to next slide
      await page.waitForTimeout(CONFIG.slideDelay);
      
      // Move to next slide (except for the last one)
      if (slideIndex < CONFIG.totalSlides - 1) {
        await page.keyboard.press('ArrowRight');
      }
    }
    
    console.log('🎬 Creating full presentation video...');
    await page.waitForTimeout(2000);
    
    await context.close();
    
    console.log('✅ Export completed!');
    console.log(`📁 Files saved to: ${CONFIG.outputDir}/`);
    console.log('📸 Individual slide screenshots: slide-1-spanish.png to slide-12-spanish.png');
    
    // The video file will be automatically saved by Playwright
    const videoFiles = fs.readdirSync(CONFIG.outputDir).filter(f => f.endsWith('.webm'));
    if (videoFiles.length > 0) {
      console.log(`🎥 Full presentation video: ${videoFiles[0]}`);
      console.log('💡 You can convert the video to GIF using online tools or ffmpeg');
    }

  } catch (error) {
    console.error('❌ Error during export:', error);
  } finally {
    await browser.close();
  }
}

// Helper function to convert screenshots to animated GIF
async function createAnimatedGif() {
  console.log('🎨 Creating animated GIF from screenshots...');
  
  try {
    const { exec } = require('child_process');
    const gifPath = path.join(CONFIG.outputDir, 'spanish-slides-animated.gif');
    
    // Use ImageMagick (if available) to create animated GIF
    const command = `convert -delay 300 -loop 0 ${CONFIG.outputDir}/slide-*-spanish.png ${gifPath}`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log('⚠️  ImageMagick not found. You can:');
        console.log('1. Install ImageMagick: brew install imagemagick');
        console.log('2. Use online tools to combine the PNG files into a GIF');
        console.log('3. Use the video file and convert it with online converters');
      } else {
        console.log(`✨ Animated GIF created: ${gifPath}`);
      }
    });
  } catch (error) {
    console.log('💡 To create animated GIF manually, use the individual PNG files');
  }
}

// Main execution
async function main() {
  console.log('🎬 CIRO AI Spanish Slides GIF Exporter');
  console.log('=====================================');
  
  // Check if Next.js server is running
  try {
    const response = await fetch(CONFIG.baseUrl);
    if (!response.ok) throw new Error('Server not responding');
  } catch (error) {
    console.log('⚠️  Please start your Next.js development server first:');
    console.log('   npm run dev');
    console.log('');
    console.log('Then run this script again.');
    process.exit(1);
  }
  
  await exportSlidesToGif();
  await createAnimatedGif();
  
  console.log('');
  console.log('🎉 All done! Your Spanish slides are ready.');
  console.log('📊 Output options:');
  console.log('   • Individual PNG files for each slide');
  console.log('   • Video recording of the full presentation');
  console.log('   • Animated GIF (if ImageMagick is installed)');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { exportSlidesToGif, createAnimatedGif }; 