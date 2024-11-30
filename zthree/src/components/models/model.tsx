import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'



export default function Model (){
  const meshRef = useRef<THREE.Mesh>(null!)

  const { scene } = useGLTF('/sofa.glb') 
  useFrame((_state, delta) => (meshRef.current.rotation.y += delta/5))

  return (
    <mesh
    ref={meshRef}>

    
    <primitive 
      object={scene} 
      scale={[1, 1, 1]}  
      position={[0, 0, 0]}
    />
    </mesh>
  )
}

useGLTF.preload('/sofa.glb')