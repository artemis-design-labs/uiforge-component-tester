'use client';
import React from 'react';
// Import a working Tailwind component (compatible with React 19)
import PureTailwindButton from '@/components/PureTailwindButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧪 UIForge Component Tester
          </h1>
          <p className="text-gray-600 text-lg">
            Test and preview generated npm components in isolation
          </p>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-sm text-green-800">
              ✅ <strong>Component Loaded:</strong> PureTailwindButton (Local)
            </p>
            <p className="text-xs text-green-700 mt-1">
              Pure Tailwind CSS - React 19 compatible! 🎉
            </p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Quick Start
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">1. Install a component:</p>
              <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                npm run test-component @uiforge/your-component-name
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">2. Import and use in this page:</p>
              <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                {`import YourComponent from '@uiforge/your-component-name';`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">3. View your component:</p>
              <code className="block bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                http://localhost:3005
              </code>
            </div>
          </div>
        </div>

        {/* Test Area */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎨 Component Test Area
          </h2>
          <p className="text-gray-600 mb-6">
            Import and render your generated components below:
          </p>

          {/* Add your test components here */}
          <div className="border-2 border-solid border-blue-300 rounded-lg p-12 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              🎨 Generated Component Preview
            </h3>
            <div className="flex flex-col items-center gap-6">
              {/* Pure Tailwind button component */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <PureTailwindButton onClick={() => alert('Button clicked!')}>
                  Click Me!
                </PureTailwindButton>
              </div>
              <div className="text-sm text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  &lt;PureTailwindButton&gt;Click Me!&lt;/PureTailwindButton&gt;
                </code>
              </div>
              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded mt-4">
                <strong>Component Details:</strong><br/>
                • Pure Tailwind CSS styling<br/>
                • React 19 compatible<br/>
                • No external UI library dependencies<br/>
                • Hover effects and animations included<br/>
                • Fully customizable via className prop
              </div>
            </div>
          </div>

          {/* Example Usage */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Example Usage</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`// 1. Import your component
import ButtonComponent from '@uiforge/button-primary';

// 2. Use it in the Test Area above
<ButtonComponent variant="primary">
  Click Me
</ButtonComponent>`}
            </pre>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-lg mb-2">Install Components</h3>
            <p className="text-gray-600 text-sm">
              Use the test-component script to quickly install generated npm packages
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">Test in Isolation</h3>
            <p className="text-gray-600 text-sm">
              Preview components without affecting other running apps (Port 3005)
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Fast Refresh</h3>
            <p className="text-gray-600 text-sm">
              Next.js hot reload means instant feedback as you test components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
