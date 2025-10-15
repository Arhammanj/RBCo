import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Individual Brick Component
function Brick({ position, color = "#8B4513", opacity = 1, delay = 0 }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  
  useFrame((state) => {
    if (state.clock.elapsedTime > delay && !visible) {
      setVisible(true);
    }
    
    if (meshRef.current && visible) {
      // Animate brick falling into place
      const targetY = position[1];
      const currentY = meshRef.current.position.y;
      
      if (currentY > targetY) {
        meshRef.current.position.y = Math.max(targetY, currentY - 0.05);
      }
      
      // Add slight rotation animation when placing
      if (currentY <= targetY + 0.1) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 10) * 0.02;
        meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 8) * 0.01;
      }
    }
  });

  if (!visible) return null;

  return (
    <mesh 
      ref={meshRef} 
      position={[position[0], position[1] + 2, position[2]]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.3, 0.15, 0.6]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={opacity}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

// Construction Tools
function ConstructionTools() {
  const toolsRef = useRef();
  
  useFrame((state) => {
    if (toolsRef.current) {
      toolsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={toolsRef} position={[3, 0, 0]}>
      {/* Wheelbarrow */}
      <group position={[0, 0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.3, 0.2, 8]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.1, 0.1, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.3, -0.2, 0]} rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
      
      {/* Cement mixer */}
      <group position={[1.5, 0.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#FF6B35" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.8]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
      
      {/* Pile of bricks */}
      <group position={[-1, 0, 0]}>
        {Array.from({ length: 12 }, (_, i) => (
          <mesh 
            key={i} 
            position={[
              (i % 3) * 0.32, 
              Math.floor(i / 3) * 0.16, 
              (i % 2) * 0.32
            ]}
          >
            <boxGeometry args={[0.3, 0.15, 0.6]} />
            <meshStandardMaterial color="#A0522D" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// Main Building Construction
function BuildingConstruction() {
  const buildingRef = useRef();
  
  // Building dimensions
  const buildingWidth = 4;
  const buildingDepth = 3;
  const buildingHeight = 4;
  const brickWidth = 0.3;
  const brickHeight = 0.15;
  const brickDepth = 0.6;
  
  // Calculate total bricks and construction phases
  const bricksPerRow = Math.floor(buildingWidth / brickWidth);
  const bricksPerDepth = Math.floor(buildingDepth / brickDepth);
  const rows = Math.floor(buildingHeight / brickHeight);
  
  // Generate brick positions with realistic patterns
  const bricks = useMemo(() => {
    const brickArray = [];
    let brickIndex = 0;
    
    for (let row = 0; row < rows; row++) {
      for (let x = 0; x < bricksPerRow; x++) {
        for (let z = 0; z < bricksPerDepth; z++) {
          // Alternate brick pattern (offset every other row)
          const offsetX = (row % 2) * (brickWidth / 2);
          const posX = (x * brickWidth) - (buildingWidth / 2) + offsetX;
          const posY = row * brickHeight;
          const posZ = (z * brickDepth) - (buildingDepth / 2);
          
          // Skip some bricks for doors and windows
          const isDoor = row < 8 && x === Math.floor(bricksPerRow / 2) && z === 0;
          const isWindow = row > 4 && row < 8 && 
            ((x === 1 || x === bricksPerRow - 2) && z === 0);
          
          if (!isDoor && !isWindow) {
            brickArray.push({
              position: [posX, posY, posZ],
              delay: brickIndex * 0.1, // Delay for animation
              color: `hsl(${20 + Math.random() * 20}, 70%, ${35 + Math.random() * 15}%)`,
              id: brickIndex
            });
          }
          brickIndex++;
        }
      }
    }
    return brickArray;
  }, []);

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={buildingRef} position={[0, 0, 0]}>
      {/* Foundation */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <boxGeometry args={[buildingWidth + 0.5, 0.3, buildingDepth + 0.5]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      
      {/* Animated Bricks */}
      {bricks.map((brick) => (
        <Brick
          key={brick.id}
          position={brick.position}
          color={brick.color}
          delay={brick.delay}
        />
      ))}
      
      {/* Window frames */}
      <mesh position={[-1.2, 0.8, -1.51]}>
        <boxGeometry args={[0.6, 0.6, 0.05]} />
        <meshStandardMaterial color="#4169E1" transparent opacity={0.7} />
      </mesh>
      <mesh position={[1.2, 0.8, -1.51]}>
        <boxGeometry args={[0.6, 0.6, 0.05]} />
        <meshStandardMaterial color="#4169E1" transparent opacity={0.7} />
      </mesh>
      
      {/* Door frame */}
      <mesh position={[0, 0.6, -1.51]}>
        <boxGeometry args={[0.8, 1.2, 0.05]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

// Construction Worker (simplified)
function ConstructionWorker() {
  const workerRef = useRef();
  
  useFrame((state) => {
    if (workerRef.current) {
      // Simple walking animation
      workerRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      workerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) > 0 ? 0 : Math.PI;
    }
  });

  return (
    <group ref={workerRef} position={[0, 0.5, 2]}>
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.8]} />
        <meshStandardMaterial color="#FF6B35" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      {/* Hard hat */}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.17]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.3, 0.7, 0]} rotation={[0, 0, Math.PI/6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      <mesh position={[0.3, 0.7, 0]} rotation={[0, 0, -Math.PI/6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.1, -0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
      <mesh position={[0.1, -0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
    </group>
  );
}

// Floating construction particles
function ConstructionParticles() {
  const particlesRef = useRef();
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#D2691E" />
    </points>
  );
}

// Main 3D Scene
function ConstructionScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, 5, -5]} intensity={0.3} />
      
      {/* Ground */}
      <mesh position={[0, -0.5, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      
      <BuildingConstruction />
      <ConstructionTools />
      <ConstructionWorker />
      <ConstructionParticles />
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={15}
      />
    </>
  );
}

// Main Construction3D Component
const Construction3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas
        camera={{ position: [8, 6, 8], fov: 60 }}
        shadows
        className="w-full h-full"
      >
        <ConstructionScene />
      </Canvas>
    </div>
  );
};

export default Construction3D;