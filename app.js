#!/usr/bin/env node
const fs = require('node:fs')

const projectStructure = { 																				// Define directory and files
  'src': ['index.js'],
  'public': ['index.html', 'styles.css'],
}

Object.entries(projectStructure).forEach(([dir, files]) => {
  fs.mkdirSync(dir, { recursive: true }) 													// Create directories
  files.forEach(file => fs.writeFileSync(`${dir}/${file}`, '')) 	// Create files
})

console.log("Project structure created successfully!");