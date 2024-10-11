"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";
const StarBackground: React.FC<React.ComponentPropsWithoutRef<typeof Points>> = (props) => {
  const ref: React.RefObject<THREE.Points> = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvasContainer = ({ children }) => (
  <div className="star-background-container" style={{position: 'absolute', top: 0, left: 0, width: '50%', height: '50%', zIndex: -1, pointerEvents: 'none'}}>{children}</div>
);

const StarsCanvas = () => (
    <StarsCanvasContainer>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </StarsCanvasContainer>
);


export default StarsCanvas;
