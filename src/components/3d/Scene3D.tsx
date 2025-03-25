"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useScroll, useProgress } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function Dodecahedron() {
  const { theme } = useTheme();
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
      scale={hovered ? 1.2 : 1}
      position={[0, 0, 0]}
    >
      <dodecahedronGeometry args={[isMobile ? 0.8 : 1, 0]} />
      <meshStandardMaterial
        color={theme === "dark" ? "#4F46E5" : "#3B82F6"}
        metalness={0.8}
        roughness={0.2}
        emissive={hovered ? "#4F46E5" : "#000000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={1}
      />
    </mesh>
  );
}

function Icosahedron() {
  const { theme } = useTheme();
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= 0.01;
      meshRef.current.rotation.y -= 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
      scale={hovered ? 1.2 : 1}
      position={[isMobile ? 1.5 : 2, 0, 0]}
    >
      <icosahedronGeometry args={[isMobile ? 0.4 : 0.5, 0]} />
      <meshStandardMaterial
        color={theme === "dark" ? "#7C3AED" : "#8B5CF6"}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.8}
        emissive={hovered ? "#7C3AED" : "#000000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
      <Float
        speed={1.2}
        rotationIntensity={0.8}
        floatIntensity={0.8}
      />
    </mesh>
  );
}

function Octahedron() {
  const { theme } = useTheme();
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y -= 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
      scale={hovered ? 1.2 : 1}
      position={[isMobile ? -1.5 : -2, 0, 0]}
    >
      <octahedronGeometry args={[isMobile ? 0.4 : 0.5, 0]} />
      <meshStandardMaterial
        color={theme === "dark" ? "#EC4899" : "#F472B6"}
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.8}
        emissive={hovered ? "#EC4899" : "#000000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
      <Float
        speed={1.8}
        rotationIntensity={1.2}
        floatIntensity={1.2}
      />
    </mesh>
  );
}

function Scene() {
  const scroll = useScroll();
  const { theme } = useTheme();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <Dodecahedron />
      <Icosahedron />
      <Octahedron />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={isMobile ? 0.3 : 0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export function Scene3D() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div className="h-[300px] sm:h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6 : 5], fov: isMobile ? 35 : 45 }}
        className="bg-transparent"
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
} 