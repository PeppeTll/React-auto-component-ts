import { existsSync, mkdirSync, writeFile } from 'fs';
import { index, component, barrel } from './component_templates.js';

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const componentsDir = './src/components/';
const dir = `${componentsDir}${name}/`;

// Create "Components" directory if it doesn't exist
if (!existsSync(componentsDir)) {
  console.log('Creating "Components" directory...');
  mkdirSync(componentsDir);
}

// Throw an error if the component directory already exists
if (existsSync(dir)) {
  throw new Error('A component with that name already exists.');
}

// Create the component directory
mkdirSync(dir);
console.log(`Component directory "${name}" created.`);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
console.log(`Component file "${name}.tsx" created.`);

// component.scss
writeFile(`${dir}/${name}.scss`, index(name), writeFileErrorHandler);
console.log(`Component file "${name}.scss" created.`);

// index.jsx
writeFile(`${dir}/index.tsx`, barrel(name), writeFileErrorHandler);
console.log(`Component file "index.tsx" created.`);
