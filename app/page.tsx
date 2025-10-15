import React from 'react';
import { Github, Music, Zap, Shield, Eye, Package } from 'lucide-react';
import { InstallCommand } from '@/components/install-command';

const githubUrl = 'https://github.com/jarednand/octavedb';
const npmUrl = 'https://www.npmjs.com/package/octavedb';

export default function OctaveDBSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-violet-400" />
            <span className="font-mono text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              OctaveDB
            </span>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Music className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">TypeScript-first JSON database</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            OctaveDB
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            A simple, TypeScript-first JSON file database for local development and prototyping
          </p>
          
          <InstallCommand />

          <div className="inline-flex gap-3 text-sm text-slate-400">
            <span>✨ Zero config</span>
            <span>•</span>
            <span>🔒 Type-safe</span>
            <span>•</span>
            <span>📦 Lightweight</span>
          </div>
        </div>
      </section>

      {/* Use Case Warning */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 border border-blue-400/20 rounded-xl p-6">
            <h3 className="text-blue-200 font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Important: When to use this
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-emerald-300 font-semibold mb-2">✅ Good for:</p>
                <ul className="text-slate-200 space-y-1.5">
                  <li>• Local development & prototyping</li>
                  <li>• CLI tools & desktop apps</li>
                  <li>• Demo projects & tutorials</li>
                  <li>• Single-user applications</li>
                </ul>
              </div>
              <div>
                <p className="text-rose-300 font-semibold mb-2">❌ Not for:</p>
                <ul className="text-slate-200 space-y-1.5">
                  <li>• Production web applications</li>
                  <li>• Multi-user environments</li>
                  <li>• Sensitive data (no encryption)</li>
                  <li>• High-concurrency scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Why OctaveDB?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Configuration</h3>
              <p className="text-slate-400 text-sm">
                No database server to install or configure. Just create a JSON file and start building. Perfect for getting started quickly without infrastructure overhead.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">TypeScript-First</h3>
              <p className="text-slate-400 text-sm">
                Built with TypeScript generics for full type safety. Get autocomplete, type checking, and catch errors at compile time instead of runtime.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Debug</h3>
              <p className="text-slate-400 text-sm">
                It's just JSON! Open the file in any text editor to see exactly what's stored. No need for database clients or query tools to inspect your data.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightweight & Reliable</h3>
              <p className="text-slate-400 text-sm">
                Minimal dependencies keep your bundle small. Atomic file writes prevent data corruption if your app crashes during a write operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Quick Start
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Define your types</h3>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono whitespace-pre">
                  <code className="text-slate-500">{'// types.ts\n'}</code>
                  <code className="text-violet-400">{'import'}</code>
                  <code>{' { Resource } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" 'octavedb'"}</code>
                  <code>{';\n\n'}</code>
                  <code className="text-violet-400">{'export interface'}</code>
                  <code className="text-sky-300">{' User '}</code>
                  <code className="text-violet-400">{'extends'}</code>
                  <code className="text-sky-300">{' Resource '}</code>
                  <code>{'{\n  username: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{';\n  email: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{';\n}\n\n'}</code>
                  <code className="text-violet-400">{'export interface'}</code>
                  <code className="text-sky-300">{' Post '}</code>
                  <code className="text-violet-400">{'extends'}</code>
                  <code className="text-sky-300">{' Resource '}</code>
                  <code>{'{\n  title: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{';\n  content: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{';\n  userId: '}</code>
                  <code className="text-emerald-300">{"User['id']"}</code>
                  <code>{';\n}\n\n'}</code>
                  <code className="text-violet-400">{'export interface'}</code>
                  <code className="text-sky-300">{' Database '}</code>
                  <code>{'{\n  users: '}</code>
                  <code className="text-emerald-300">{'User[]'}</code>
                  <code>{';\n  posts: '}</code>
                  <code className="text-emerald-300">{'Post[]'}</code>
                  <code>{';\n'}</code>
                  <code>{'}'}</code>

                  {/* <code>{'{\n  users: User[];\n  posts: Post[];\n}'}</code> */}
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Create a JSON file</h3>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono whitespace-pre">
                  <code className="text-slate-500">{'// database.json\n'}</code>
                  <code>{'{\n  '}</code>
                  <code className="text-sky-300">{'"users"'}</code>
                  <code>{': [],\n  '}</code>
                  <code className="text-sky-300">{'"posts"'}</code>
                  <code>{': []\n}'}</code>
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Initialize the client</h3>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono whitespace-pre">
                  <code className="text-slate-500">{'// lib/db.ts\n'}</code>
                  <code className="text-violet-400">{'import'}</code>
                  <code>{' { createClient } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" 'octavedb'"}</code>
                  <code>{';\n'}</code>
                  <code className="text-violet-400">{'import type'}</code>
                  <code>{' { Database } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" './types'"}</code>
                  <code>{';\n\n'}</code>
                  <code className="text-violet-400">{'export const'}</code>
                  <code>{' db = createClient'}</code>
                  <code className="text-sky-300">{'<Database>'}</code>
                  <code>{'('}</code>
                  <code className="text-emerald-300">{"'./database.json'"}</code>
                  <code>{');\n\n'}</code>
                  <code className="text-slate-500">{'// Also export the helpers for convenience\n'}</code>
                  <code className="text-violet-400">{'export'}</code>
                  <code>{' { makeResource, makeDateTime, makeId } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" 'octavedb'"}</code>
                  <code>{';'}</code>
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold">Start building!</h3>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono whitespace-pre">
                  <code className="text-violet-400">{'import'}</code>
                  <code>{' { db, makeResource, makeDateTime } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" './lib/db'"}</code>
                  <code>{';\n'}</code>
                  <code className="text-violet-400">{'import type'}</code>
                  <code>{' { User } '}</code>
                  <code className="text-violet-400">{'from'}</code>
                  <code className="text-emerald-300">{" './types'"}</code>
                  <code>{';\n\n'}</code>
                  <code className="text-slate-500">{'// CREATE\n'}</code>
                  <code className="text-violet-400">{'function'}</code>
                  <code>{' createUser(username: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{', email: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{') {\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' user = makeResource'}</code>
                  <code className="text-sky-300">{'<User>'}</code>
                  <code>{'({ username, email });\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' data = db.read();\n\n  data.users.push(user);\n  db.write(data);\n\n  '}</code>
                  <code className="text-violet-400">{'return'}</code>
                  <code>{' user;\n}\n\n'}</code>
                  <code className="text-slate-500">{'// READ\n'}</code>
                  <code className="text-violet-400">{'function'}</code>
                  <code>{' getUser(id: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{') {\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' data = db.read();\n  '}</code>
                  <code className="text-violet-400">{'return'}</code>
                  <code>{' data.users.find(u => u.id === id);\n}\n\n'}</code>
                  <code className="text-slate-500">{'// UPDATE\n'}</code>
                  <code className="text-violet-400">{'function'}</code>
                  <code>{' updateUser(id: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{', email: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{') {\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' data = db.read();\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' index = data.users.findIndex(u => u.id === id);\n\n  '}</code>
                  <code className="text-violet-400">{'if'}</code>
                  <code>{' (index < '}</code>
                  <code className="text-emerald-300">{'0'}</code>
                  <code>{') '}</code>
                  <code className="text-violet-400">{'throw new'}</code>
                  <code>{' Error('}</code>
                  <code className="text-emerald-300">{"'User not found'"}</code>
                  <code>{');\n\n  data.users[index] = { ...data.users[index], email, updatedAt: makeDateTime() };\n  db.write(data);\n\n  '}</code>
                  <code className="text-violet-400">{'return'}</code>
                  <code>{' data.users[index];\n}\n\n'}</code>
                  <code className="text-slate-500">{'// DELETE\n'}</code>
                  <code className="text-violet-400">{'function'}</code>
                  <code>{' deleteUser(id: '}</code>
                  <code className="text-emerald-300">{'string'}</code>
                  <code>{') {\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' data = db.read();\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' index = data.users.findIndex(u => u.id === id);\n\n  '}</code>
                  <code className="text-violet-400">{'if'}</code>
                  <code>{' (index < '}</code>
                  <code className="text-emerald-300">{'0'}</code>
                  <code>{') '}</code>
                  <code className="text-violet-400">{'throw new'}</code>
                  <code>{' Error('}</code>
                  <code className="text-emerald-300">{"'User not found'"}</code>
                  <code>{');\n\n  '}</code>
                  <code className="text-violet-400">{'const'}</code>
                  <code>{' deleted = data.users.splice(index, '}</code>
                  <code className="text-emerald-300">{'1'}</code>
                  <code>{')['}</code>
                  <code className="text-emerald-300">{'0'}</code>
                  <code>{'];\n\n  db.write(data);\n\n  '}</code>
                  <code className="text-violet-400">{'return'}</code>
                  <code>{' deleted;\n}'}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            API Reference
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-mono text-lg text-violet-400 mb-2">createClient&lt;Database&gt;(filePath)</h3>
              <p className="text-slate-400 text-sm mb-4">Creates a database client for the specified JSON file.</p>
              <div className="bg-slate-950 rounded-lg p-3 text-sm font-mono text-slate-300">
                <code className="text-violet-400">const</code>
                <code>{' db = createClient'}</code>
                <code className="text-sky-300">{'<Database>'}</code>
                <code>{'('}</code>
                <code className="text-emerald-300">{"'./database.json'"}</code>
                <code>{');'}</code>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-mono text-lg text-violet-400 mb-2">db.read()</h3>
              <p className="text-slate-400 text-sm mb-4">Reads and returns the entire database.</p>
              <div className="bg-slate-950 rounded-lg p-3 text-sm font-mono text-slate-300">
                <code className="text-violet-400">const</code>
                <code>{' data = db.read();'}</code>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-mono text-lg text-violet-400 mb-2">db.write(data)</h3>
              <p className="text-slate-400 text-sm mb-4">Writes data to the database file atomically.</p>
              <div className="bg-slate-950 rounded-lg p-3 text-sm font-mono text-slate-300">
                <code>{'db.write(data);'}</code>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-mono text-lg text-violet-400 mb-2">makeResource&lt;T&gt;(data)</h3>
              <p className="text-slate-400 text-sm mb-4">Creates a new resource with automatic id, createdAt, and updatedAt fields.</p>
              <div className="bg-slate-950 rounded-lg p-3 text-sm font-mono text-slate-300">
                <code className="text-violet-400">const</code>
                <code>{' user = makeResource'}</code>
                <code className="text-sky-300">{'<User>'}</code>
                <code>{'({ username: '}</code>
                <code className="text-emerald-300">{"'johndoe'"}</code>
                <code>{' });'}</code>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-mono text-lg text-violet-400 mb-2">makeId() / makeDateTime()</h3>
              <p className="text-slate-400 text-sm">Helper functions for generating UUIDs and ISO timestamps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="font-mono text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              OctaveDB
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            A TypeScript-first JSON database for local development
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              npm
            </a>
            <a
              href={`${githubUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              Issues
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            MIT License © {new Date().getFullYear()} Jared Nand
          </p>
        </div>
      </footer>
    </div>
  );
}