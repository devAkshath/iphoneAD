import { useGLTF } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useEffect, useRef } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function Iphone() {
    const { scene } = useGLTF("/assets/Iphone 16red2.glb");
    const groupref = useRef<THREE.Group>(null);

    useEffect(() => {   
        if(!groupref.current) return;
        
        gsap.timeline({
        
        scrollTrigger: {
            trigger :'#section1',
            start:'top bottom',
            end:'top ttop',
            scrub:true,
        }
    })
    .to(groupref.current.rotation,{x:Math.PI/2,ease:'power2.inOut ',y:25, duration: 0.5, }).to(groupref.current.rotation,{x:Math.PI/12,ease:'power2.inOut ',y:25, duration: 0.5,}).to(groupref.current.position,{x:Math.PI,ease:'power2.inOut ',y:-2.5},"<").to(groupref.current.rotation,{x:Math.PI/42,ease:'power2.inOut ',y:10}).to(groupref.current.position,{x:Math.PI/88,ease:'power2.inOut ',y:-1.5},"<");
});

    return (

        <group ref={groupref} scale={[3.5, 3.5, 3.6]} position={[0, -.5, 0]} rotation={[Math.PI/ 20,0,0]}>
            <primitive object={scene} />
        </group>
    );
}
