'use client';

import { useState } from 'react';
import { CopyButton } from '@/components/copy-button';

export function InstallCommand() {
  const [selectedPM, setSelectedPM] = useState<'npm' | 'pnpm' | 'yarn'>('npm');
  
  const installCommands = {
    npm: 'npm install octavedb',
    pnpm: 'pnpm add octavedb',
    yarn: 'yarn add octavedb'
  };

  return (
    <div className="flex flex-col gap-4 justify-center mb-12">
      <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
        <div className="flex gap-2 justify-center">
          {(['npm', 'pnpm', 'yarn'] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setSelectedPM(pm)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors cursor-pointer ${
                selectedPM === pm
                  ? 'bg-violet-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {pm}
            </button>
          ))}
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 font-mono text-sm flex items-center justify-between gap-4">
          <span className="text-slate-300">{installCommands[selectedPM]}</span>
          <CopyButton text={installCommands[selectedPM]} />
        </div>
      </div>
    </div>
  );
}