// src/components/theory/ThreeFields.jsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Battery, Flame, Zap } from 'lucide-react';

function ThreeFields() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="text-center">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">三田</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">The Three Energy Fields</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          Understanding the body's three primary energy centers and their role in cultivation practice.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Lower Field */}
        <Card className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                        transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-jade-500/10 rounded-lg">
                <Battery className="w-5 h-5 text-jade-500" />
              </div>
              <div>
                <CardTitle className="text-gold-500">Lower Field</CardTitle>
                <p className="text-stone-400 font-chinese text-sm">下田</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm">The foundation center located in the lower abdomen</p>
          </CardHeader>
          <CardContent>
            <p className="text-stone-300 mb-4">
              Located approximately 2-3 inches below the navel and inside the body, the Lower Field serves as the primary reservoir for vital energy. It functions as the body's energetic root and foundation.
            </p>
            <h4 className="text-jade-400 font-serif mb-2">Functions:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Stores and accumulates vital energy</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Provides stability and grounding</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Connects to survival and reproductive functions</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Serves as the foundation for all energy work</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Middle Field */}
        <Card className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                        transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-jade-500/10 rounded-lg">
                <Flame className="w-5 h-5 text-jade-500" />
              </div>
              <div>
                <CardTitle className="text-gold-500">Middle Field</CardTitle>
                <p className="text-stone-400 font-chinese text-sm">中田</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm">The transformative center located in the heart region</p>
          </CardHeader>
          <CardContent>
            <p className="text-stone-300 mb-4">
              Located in the center of the chest between the nipples, the Middle Field functions as the transformative center that bridges the physical and spiritual aspects of being.
            </p>
            <h4 className="text-jade-400 font-serif mb-2">Functions:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Harmonizes and balances energies</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Connects to emotional regulation</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Transforms denser energies into more refined forms</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Serves as a bridge between lower and upper fields</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Upper Field */}
        <Card className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                        transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-jade-500/10 rounded-lg">
                <Zap className="w-5 h-5 text-jade-500" />
              </div>
              <div>
                <CardTitle className="text-gold-500">Upper Field</CardTitle>
                <p className="text-stone-400 font-chinese text-sm">上田</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm">The spiritual center located in the head region</p>
          </CardHeader>
          <CardContent>
            <p className="text-stone-300 mb-4">
              Located between the eyebrows and extending into the center of the brain, the Upper Field relates to spiritual awareness and higher consciousness.
            </p>
            <h4 className="text-jade-400 font-serif mb-2">Functions:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Refines energy into spiritual essence</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Connects to higher awareness and intuition</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Governs spiritual perception and insight</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300">
                <span className="text-jade-500 mt-1">•</span>
                <span>Acts as the gateway to transcendent states</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Cultivation Note */}
      <div className="bg-stone-800/50 p-6 rounded-xl border border-jade-500/20">
        <h3 className="text-xl font-serif text-gold-500 mb-4">Cultivation Approach</h3>
        <p className="text-stone-300">
          In Daoist practice, we typically begin by developing the Lower Field as a strong foundation. 
          Once this is established, we can work with the Middle Field to transform and refine energy. 
          The Upper Field is generally approached only after the lower centers are well-developed. 
          This systematic approach ensures stable and grounded progress.
        </p>
        <p className="text-stone-300 mt-4">
          Only when an actual elixir or "dan" is formed within a field does it become a true "dantian" or 
          "elixir field." Until that point in advanced practice, we work with these areas simply as energy 
          fields or centers.
        </p>
      </div>
    </div>
  );
}

export default ThreeFields;