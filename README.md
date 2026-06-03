# 🧪 UIForge Component Tester

A Next.js app for testing and previewing generated npm components from UIForge in isolation.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

The app will run on **http://localhost:3005** (to avoid conflicts with other UIForge apps)

## 📦 Testing Generated Components

### Install a Component

Use the built-in test script to install any generated component:

```bash
npm run test-component <package-name>
```

**Example:**
```bash
npm run test-component @uiforge/button-primary
npm run test-component buttonvariant-lightmode
```

### Use the Component

1. **Import** the component in `app/page.tsx`:

```typescript
import ButtonComponent from '@uiforge/button-primary';
```

2. **Render** it in the Component Test Area:

```tsx
<div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
  <ButtonComponent variant="primary">
    Click Me
  </ButtonComponent>
</div>
```

3. **View** at http://localhost:3005

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3005 |
| `npm run build` | Build for production |
| `npm run start` | Start production server on port 3005 |
| `npm run test-component <name>` | Install and test a component |
| `npm run lint` | Run ESLint |

## 📂 Project Structure

```
uiforge-component-tester/
├── app/
│   ├── page.tsx          # Main test page - add components here
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── PureTailwindButton.tsx  # Local sample component (no npm install needed)
├── scripts/
│   └── test-component.js # Component installation script
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

### Local sample components

In addition to installing generated npm packages, `components/` holds local sample
components you can import directly into `app/page.tsx` for quick checks — e.g.
`PureTailwindButton` (a self-contained Tailwind button extending
`React.ButtonHTMLAttributes`). Use these to sanity-check the sandbox without publishing a
package first.

## 🎨 Features

- **Isolated Testing**: Runs on port 3005 to avoid conflicts
- **Hot Reload**: Next.js fast refresh for instant feedback
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Easy Installation**: Simple script to install components

## 💡 Usage Example

### Full Workflow

```bash
# 1. Generate a component via UIForge codegen service
# (This happens in uiforge-codegen)

# 2. Install the generated component
npm run test-component @uiforge/my-button

# 3. Import in app/page.tsx
# import MyButton from '@uiforge/my-button';

# 4. Use it
# <MyButton>Click Me</MyButton>

# 5. View and test at http://localhost:3005
```

## 🔧 Configuration

### Change Port

Edit `package.json` to change the port:

```json
{
  "scripts": {
    "dev": "next dev -p 3006"  // Change to any port
  }
}
```

### Add Custom Styles

Modify `app/globals.css` for custom global styles.

## 🧩 Testing Multiple Components

You can test multiple components simultaneously:

```tsx
// app/page.tsx
import Button from '@uiforge/button-primary';
import Card from '@uiforge/card-default';
import Input from '@uiforge/input-text';

export default function Home() {
  return (
    <div>
      <Button>Test Button</Button>
      <Card title="Test Card">Card content</Card>
      <Input placeholder="Test Input" />
    </div>
  );
}
```

## 🐛 Troubleshooting

### Component Not Found

If a component fails to import:

1. Check if it's installed: `npm list <package-name>`
2. Verify the import path matches the package name
3. Check for TypeScript errors: `npm run build`

### Port Already in Use

If port 3005 is in use:

```bash
# Find process using port 3005
lsof -i :3005

# Kill the process
kill -9 <PID>

# Or change the port in package.json
```

### Styling Issues

If component styles don't appear:

1. Check if the component includes its own CSS
2. Verify Tailwind is configured correctly
3. Import component styles if needed

## 📝 Notes

- Components are installed as regular npm packages
- All installed components appear in `node_modules/`
- Use `npm uninstall <package>` to remove test components
- The app uses Next.js 16 with App Router
- TypeScript and ESLint are pre-configured

## 🔗 Related Projects

- **uiforge-codegen**: Generates the components
- **uiforge-frontend**: Main UIForge app
- **uiforge-backend**: API server

## 📄 License

Part of the UIForge project by Artemis Design Labs
