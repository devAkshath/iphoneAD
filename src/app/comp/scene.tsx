"use client";

import { Canvas } from "@react-three/fiber";
import { Iphone } from "./iphone";

export function Scene() {
    return (
        <div className="fixed inset-0">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
                
                <ambientLight intensity={10.5} />

                <pointLight position={[5, 5, 5]} intensity={20} color="#D32F2F" />
                <pointLight position={[-5, 5, 5]} intensity={20} color="#D32F2F" />
                <pointLight position={[5, -5, 5]} intensity={20} color="#D32F2F" />
                <pointLight position={[-5, -5, 5]} intensity={20} color="#D32F2F" />
                <pointLight position={[0, 0, -5]} intensity={18} color="#D32F2F" />

                <directionalLight position={[1.5, 1, 1]} intensity={15} color="#D32F2F" />
                
                <Iphone />

                {/* Helper to visualize axis
                <axesHelper scale={2} /> */}
                
            </Canvas>
        </div>
    );
}
