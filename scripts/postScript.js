// scripts/copy-minimal-package-json.js
const fs = require('fs');
const path = require('path');

const rootPkgPath = path.resolve(__dirname, '../package.json');
const outputPath = path.resolve(__dirname, '../lib/module/package.json');

// Read the root package.json
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));

// Create a minimal package.json
const minimalPkg = {
  name: rootPkg.name,
  version: rootPkg.version,
};

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the minimal package.json to lib/module
fs.writeFileSync(outputPath, JSON.stringify(minimalPkg, null, 2));

console.log('✅ Minimal package.json copied to lib/module/');
