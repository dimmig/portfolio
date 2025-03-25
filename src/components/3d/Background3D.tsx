"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, useScroll } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  size?: number;
  rotationSpeed?: number;
}

function FloatingShape({ position, color, size = 0.5, rotationSpeed = 0.01 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[isMobile ? size * 0.7 : size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={isMobile ? 0.4 : 0.6}
      />
      <Float
        speed={isMobile ? 1.2 : 1.5}
        rotationIntensity={isMobile ? 0.8 : 1}
        floatIntensity={isMobile ? 0.8 : 1}
      />
    </mesh>
  );
}

function BackgroundScene() {
  const scroll = useScroll();
  const { theme } = useTheme();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <FloatingShape
        position={isMobile ? [-1.5, 1.5, -5] : [-2, 2, -5]}
        color={theme === "dark" ? "#4F46E5" : "#3B82F6"}
        size={0.3}
        rotationSpeed={0.005}
      />
      <FloatingShape
        position={isMobile ? [1.5, -1.5, -5] : [2, -2, -5]}
        color={theme === "dark" ? "#7C3AED" : "#8B5CF6"}
        size={0.4}
        rotationSpeed={-0.008}
      />
      <FloatingShape
        position={[0, 0, -5]}
        color={theme === "dark" ? "#EC4899" : "#F472B6"}
        size={isMobile ? 0.4 : 0.5}
        rotationSpeed={0.01}
      />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
    </>
  );
}

export function Background3D() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6 : 5], fov: isMobile ? 35 : 45 }}
        className="bg-transparent"
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
      </Canvas>
    </div>
  );
} 