const sharp = require('sharp');
const fs = require('fs');

// SVG content with proper gradient
const svgContent = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#grad1)"/>
  <text x="50%" y="58%" font-family="Arial, sans-serif" font-size="280" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">AP</text>
</svg>
`;

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgContent);

  try {
    // Generate 512x512 PNG
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile('./public/logo512.png');
    console.log('✓ Generated logo512.png');

    // Generate 192x192 PNG
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile('./public/logo192.png');
    console.log('✓ Generated logo192.png');

    // Generate 32x32 PNG for favicon.ico
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('./public/favicon-32x32.png');
    console.log('✓ Generated favicon-32x32.png');

    // Generate 16x16 PNG
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile('./public/favicon-16x16.png');
    console.log('✓ Generated favicon-16x16.png');

    // Copy the 32x32 as favicon.ico (browsers accept PNG renamed as .ico)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('./public/favicon.ico');
    console.log('✓ Generated favicon.ico');

    console.log('\n✓ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
