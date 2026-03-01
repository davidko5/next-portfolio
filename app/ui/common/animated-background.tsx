"use client";

import React from "react";
import { motion } from "framer-motion";

const circles = [
  {
    color: "#FF0000",
    width: 582,
    height: 770,
    points: [
      { x: -40, y: 90 },
      { x: 46, y: 12 },
      { x: 149, y: 117 },
      { x: 249, y: -285 },
      { x: -40, y: 90 },
    ],
  },
  {
    color: "#FFD900",
    width: 382,
    height: 451,
    points: [
      { x: 370, y: 409 },
      { x: 484, y: 201 },
      { x: 405, y: -54 },
      { x: 1, y: 133 },
      { x: 370, y: 409 },
    ],
  },
  {
    color: "#007497",
    width: 382,
    height: 629,
    points: [
      { x: 348, y: -314, rotate: 0 },
      { x: 0, y: -67, rotate: 0 },
      { x: -17, y: 44, rotate: 0 },
      { x: 344, y: 184, rotate: 62 },
      { x: 348, y: -314, rotate: 0 },
    ],
  },
];

const AnimatedGradientBackground = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      {/* Centered anchor so circles always sit around the content */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: 1100,
          height: "100%",
        }}
      >
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: circle.width,
              height: circle.height,
              backgroundColor: circle.color,
              boxShadow: "0px 4px 300px 0px rgba(0, 0, 0, 0.25) inset",
            }}
            animate={{
              x: circle.points.map((point) => point.x),
              y: circle.points.map((point) => point.y),
              rotate: circle.points.map((point) =>
                "rotate" in point ? point.rotate : undefined,
              ),
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      {/* Blurred Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, .1)",
          backdropFilter: "blur(152.5px)",
        }}
      />

      {/* Noise Texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/bg-noise.png)",
          backgroundSize: "cover",
          mixBlendMode: "soft-light",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default AnimatedGradientBackground;
