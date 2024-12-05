'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBackground = () => {
  const circles: Array<{
    color: string;
    width: number;
    height: number;
    points: Array<{ x: number | string; y: number | string; rotate?: number }>;
  }> = [
    {
      color: '#FF0000',
      width: 582,
      height: 770,
      points: [
        { x: -40, y: 90 },
        { x: 46, y: 12 },
        { x: 149, y: 117 },
        { x: 249, y: -285 },
        { x: -40, y: 90 },
      ],
    }, // Red
    {
      color: '#FFD900',
      width: 382,
      height: 451,
      points: [
        { x: 370, y: 409 },
        { x: 484, y: 201 },
        { x: 405, y: -54 },
        { x: 1, y: 133 },
        { x: 370, y: 409 },
      ],
    }, // Yellow
    {
      color: '#007497',
      width: 382,
      height: 629,
      points: [
        { x: 348, y: -314, rotate: 0 },
        { x: 0, y: -67, rotate: 0 },
        { x: -17, y: 44, rotate: 0 },
        { x: 344, y: 184, rotate: 62 },
        { x: 348, y: -314, rotate: 0 },
      ],
    }, // Blue
  ];

  return (
    <div
      style={{
        // position: 'relative',
        // height: '100vh',
        // overflow: 'hidden',
        backgroundColor: 'black',

        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            width: circle.width,
            height: circle.height,
            backgroundColor: circle.color,
          }}
          animate={{
            x: circle.points.map((point) => point.x), // Sequential x positions
            y: circle.points.map((point) => point.y), // Sequential y positions
            rotate: circle.points.map((point) => point?.rotate), // Sequential rotations
          }}
          transition={{
            duration: 10, // Smooth animation duration
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeOut',
          }}
        />
      ))}
      {/* Blurred Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
          backdropFilter: 'blur(152.5px)', // Blur effect
        }}
      />

      {/* Noise Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/bg-noise.png)', // Noise texture
          backgroundSize: 'cover',
          // opacity: 0.4, // Transparency to blend with other layers
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default AnimatedGradientBackground;
