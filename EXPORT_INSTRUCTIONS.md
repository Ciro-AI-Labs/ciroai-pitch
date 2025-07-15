# Export Spanish Slides to GIF

This project includes an automated script to export your Spanish slides to GIF format using browser automation.

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **In a new terminal, run the export script:**
   ```bash
   npm run export-gifs
   ```

## What the script does:

- 🌐 Opens your presentation in a browser
- 🇪🇸 Automatically switches to Spanish language
- 🎯 Enters presentation mode
- 📸 Captures high-quality screenshots of each slide
- 🎬 Records a video of the full presentation
- 🎨 Creates an animated GIF (if ImageMagick is installed)

## Output Files:

After running the script, you'll find in the `exported-gifs/` folder:

- `slide-1-spanish.png` to `slide-12-spanish.png` - Individual slide images
- `[timestamp].webm` - Full presentation video
- `spanish-slides-animated.gif` - Animated GIF (if ImageMagick available)

## Converting to GIF:

### Option 1: Install ImageMagick (recommended)
```bash
brew install imagemagick
```
Then run the export script again.

### Option 2: Online conversion
Upload the individual PNG files or the video file to online GIF converters like:
- ezgif.com
- convertio.co
- cloudconvert.com

### Option 3: Using ffmpeg
If you have ffmpeg installed:
```bash
ffmpeg -i exported-gifs/[video-file].webm -vf "fps=2,scale=800:-1" output.gif
```

## Customization:

Edit `scripts/export-slides-to-gif.js` to adjust:
- `slideDelay`: Time spent on each slide (default: 3 seconds)
- `animationDelay`: Extra time for animations (default: 1 second)
- `videoWidth`/`videoHeight`: Resolution (default: 1920x1080)
- `headless`: Set to `true` for background operation

## Troubleshooting:

- **"Server not responding"**: Make sure `npm run dev` is running first
- **Empty screenshots**: Increase the `animationDelay` value
- **Missing slides**: Adjust the `totalSlides` count if you have more/fewer slides
- **GIF not created**: Install ImageMagick or use online converters

## Tips:

- The script captures slides with their animations
- Each slide includes the beautiful gradient backgrounds and CIRO branding
- High resolution ensures quality when shared or embedded
- The video format is great for social media sharing 