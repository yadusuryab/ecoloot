'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useRef, useMemo } from 'react';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Create city lights texture programmatically
  const lightsMaterial = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw random city lights
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 0.5;
        const brightness = Math.random() * 0.8 + 0.2;
        
        ctx.fillStyle = `rgba(255, 255, 200, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  return (
    <>
      {/* Main Earth sphere */}
      <mesh ref={earthRef} rotation={[0, 0, 0.4]}>
        <sphereGeometry args={[5, 128, 128]} />
        <meshStandardMaterial
          color="#1a3a8f"
          roughness={0.8}
          metalness={0.2}
          emissive="#0a1a4a"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* City lights layer */}
      <mesh rotation={[0, 0, 0.4]}>
        <sphereGeometry args={[5.01, 128, 128]} />
        <meshBasicMaterial
          map={lightsMaterial}
          transparent={true}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh rotation={[0, 0, 0.4]}>
        <sphereGeometry args={[5.2, 64, 64]} />
        <meshBasicMaterial
          color="#0088ff"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function FireHotspots() {
  const fireCount = 30;
  const firePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < fireCount; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 5.05;
      
      positions.push([
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      ]);
    }
    return positions;
  }, [fireCount]);

  return (
    <>
      {firePositions.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial 
            color="#ff5500" 
            transparent={true}
            opacity={0.7}
          />
          <pointLight 
            color="#ff3300" 
            intensity={0.5} 
            distance={1}
          />
        </mesh>
      ))}
    </>
  );
}

function SunLight() {
  return (
    <>
      <directionalLight
        position={[15, 5, 5]}
        intensity={2}
        color="#ffaa33"
        castShadow={false}
      />
      <ambientLight intensity={0.1} color="#4488ff" />
    </>
  );
}

export default function EarthModel() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={['#000011']} />
        <fog attach="fog" args={['#000011', 10, 25]} />
        
        <SunLight />
        <Earth />
        <FireHotspots />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={3000} 
          factor={4}
          saturation={0}
          fade={true}
        />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.6}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxDistance={20}
          minDistance={7}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  );
  
}