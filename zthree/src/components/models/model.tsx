import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { GroupProps } from '@react-three/fiber'

export default function Model(props: GroupProps) {
  const { nodes, scene } = useGLTF('/sofa.glb')
  const modelRef = useRef<THREE.Group>(null)

  const textures = new Map([
    ['Cube002_1', useTexture('/wood3.jpg')],
    ['Cube002', useTexture('/zz3.jpg')],
    ['Cube009', useTexture('/zz1.jpg')],
    ['Cube008', useTexture('/zz1.jpg')]
  ])

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        
        child.castShadow = true
        child.receiveShadow = true

       
        const texture = textures.get(child.name)
        if (texture) {
          texture.flipY = false
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          child.material = new THREE.MeshStandardMaterial({
            map: texture,
            color: '#e5e7eb',
            roughness: 0.9,
            metalness: 0.4,
            flatShading: true ,
          })
          child.material.castShadow = true 
        }
      }
    })
  }, [scene, textures])

  return (
    <>
      
        <primitive object={scene} />
      
      
    
    </>
  )
}

useGLTF.preload('/sofa.glb')