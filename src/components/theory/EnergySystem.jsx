// src/components/theory/EnergySystem.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap, GitBranch, Circle } from 'lucide-react';

function EnergySystem() {
  return (
    <div className="space-y-12 mt-16">
      {/* Overview */}
      <div className="text-center">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">能量系統</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">The Energy Meridian System</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          Understanding the network of energy pathways that connect and vitalize the entire body.
        </p>
      </div>

      {/* Content */}
      <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-jade-500/10 rounded-lg">
                <GitBranch className="w-6 h-6 text-jade-500" />
              </div>
              <h3 className="text-xl font-serif text-gold-500">Meridian Pathways</h3>
            </div>
            
            <p className="text-stone-300 mb-4">
              The human body contains a sophisticated network of energy channels called meridians (經絡) that distribute qi throughout the system. These pathways, though invisible to the eye, have been mapped through thousands of years of clinical observation.
            </p>
            
            <p className="text-stone-300 mb-4">
              The meridian system consists of several types of channels:
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">12 Primary Meridians</span>
                  <p className="text-sm">Corresponding to the five yin and yang organs, plus the pericardium and triple warmer</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">8 Extraordinary Vessels</span>
                  <p className="text-sm">Including the governing and conception vessels that form the microcosmic orbit</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">Connecting Channels</span>
                  <p className="text-sm">Secondary pathways that link the primary meridians</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-jade-500/10 rounded-lg">
                <Zap className="w-6 h-6 text-jade-500" />
              </div>
              <h3 className="text-xl font-serif text-gold-500">Application in Practice</h3>
            </div>
            
            <p className="text-stone-300 mb-4">
              In Daoist Yoga, physical postures are designed to work with specific meridian pathways. By stretching, compressing, or twisting along these channels, we can:
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">Clear Blockages</span>
                  <p className="text-sm">Release stagnation that may be causing physical or emotional issues</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">Stimulate Flow</span>
                  <p className="text-sm">Increase energy circulation to specific areas or organs</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">Balance the System</span>
                  <p className="text-sm">Harmonize the flow between complementary meridians</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <Circle className="w-2 h-2 text-jade-500 mt-2" />
                <div>
                  <span className="text-jade-400">Connect Energy Centers</span>
                  <p className="text-sm">Establish pathways between the three fields for more integrated energy work</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-700">
          <p className="text-center text-stone-300 italic">
            "The meridian system is like a river network - the main channels feed into smaller streams,
            bringing life-giving energy to every part of the body's landscape."
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnergySystem;