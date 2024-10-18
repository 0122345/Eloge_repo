"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePopup = ({ isOpen, onClose, images }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-black p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-4xl font-bold text-gray-600 hover:text-gray-300"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">Image Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative h-48 border-2 border-white rounded-md overflow-hidden">
                  <Image
                    src={image.img}
                    alt={image.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-center p-2">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePopup;
