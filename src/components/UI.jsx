import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const UI = ({ activeStop }) => {
  return (
    <AnimatePresence>
      {activeStop && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-x-0 bottom-8 md:bottom-12 mx-auto max-w-lg w-[90%] z-50"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Header Color Bar */}
            <div className={`h-3 w-full ${activeStop.color}`}></div>
            
            <div className="p-6 md:p-8 relative">
              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                      {activeStop.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-gray-500 font-medium">
                      <span>{activeStop.company}</span>
                      <span>•</span>
                      <span>{activeStop.year}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-2xl ${activeStop.color} bg-opacity-10 text-gray-800`}>
                    {/* Just a visual indicator or icon could go here */}
                  </div>
                </div>
                
                <div className="mt-4 text-gray-600 leading-relaxed text-lg">
                  {activeStop.description}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UI;

