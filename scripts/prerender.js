import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = ['/officers', '/events', '/resources', '/contact']

// Read the built index.html
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')

routes.forEach((route) => {
  // Create directory for route
  const dir = path.resolve(__dirname, `../dist${route}`)
  fs.mkdirSync(dir, { recursive: true })
  
  // Copy index.html to route directory
  const filePath = path.join(dir, 'index.html')
  fs.writeFileSync(filePath, template)
  console.log(`✓ Created ${route}/index.html`)
})

console.log('\n✓ All routes prerendered successfully!')