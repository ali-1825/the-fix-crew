const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectFolder = __dirname;
const imagesFolder = path.join(projectFolder, 'images');
const inputFolder = fs.existsSync(imagesFolder) ? imagesFolder : projectFolder;
const outputFolder = path.join(projectFolder, 'optimized');

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

const imageFiles = fs.readdirSync(inputFolder).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext);
});

if (imageFiles.length === 0) {
  console.log(`No JPG, JPEG, or PNG images found in ${inputFolder}`);
} else {
  Promise.all(imageFiles.map(file => {
    const outputName = path.parse(file).name + '.webp';
    const inputPath = path.join(inputFolder, file);
    return sharp(inputPath).metadata().then(({ width, height }) => {
      const maxWidth = width === height ? 240 : height > width ? 800 : 1440;
      return sharp(inputPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 74, effort: 6 })
        .toFile(path.join(outputFolder, outputName))
        .then(() => console.log(`Done: ${outputName}`));
    });
  })).catch(error => {
    console.error('Image optimization failed:', error);
    process.exitCode = 1;
  });
}