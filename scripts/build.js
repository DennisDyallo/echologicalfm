#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

// Clean and create dist directory
console.log('🧹 Cleaning dist directory...');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Function to copy file
function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied: ${path.basename(dest)}`);
}

// Function to minify CSS (basic)
function minifyCSS(content) {
    return content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around special chars
        .trim();
}

// Function to minify JS (basic)
function minifyJS(content) {
    return content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*/g, '') // Remove line comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}();,:])\s*/g, '$1') // Remove spaces around special chars
        .trim();
}

// Function to minify HTML (basic)
function minifyHTML(content) {
    return content
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/>\s+</g, '><') // Remove spaces between tags
        .trim();
}

// Copy and process files
console.log('📦 Building project...');

// Create subdirectories
fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });

// Process HTML
const htmlContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
const minifiedHTML = minifyHTML(htmlContent);
fs.writeFileSync(path.join(distDir, 'index.html'), minifiedHTML);
console.log('✓ Minified: index.html');

// Process CSS
const cssContent = fs.readFileSync(path.join(srcDir, 'css/main.css'), 'utf8');
const minifiedCSS = minifyCSS(cssContent);
fs.writeFileSync(path.join(distDir, 'css/main.css'), minifiedCSS);
console.log('✓ Minified: css/main.css');

// Process JS
const jsContent = fs.readFileSync(path.join(srcDir, 'js/main.js'), 'utf8');
const minifiedJS = minifyJS(jsContent);
fs.writeFileSync(path.join(distDir, 'js/main.js'), minifiedJS);
console.log('✓ Minified: js/main.js');

// Copy favicon
copyFile(path.join(srcDir, 'favicon.svg'), path.join(distDir, 'favicon.svg'));

// Calculate total size
function getDirectorySize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            size += getDirectorySize(filePath);
        } else {
            size += fs.statSync(filePath).size;
        }
    }

    return size;
}

const totalSize = getDirectorySize(distDir);
const sizeKB = (totalSize / 1024).toFixed(2);

console.log('\n✨ Build complete!');
console.log(`📊 Total size: ${sizeKB} KB`);

if (totalSize > 50 * 1024) {
    console.warn('⚠️  Warning: Bundle size exceeds 50KB target');
} else {
    console.log('✓ Bundle size within 50KB target');
}
