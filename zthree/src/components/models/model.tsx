import * as THREE from 'three'
import { GizmoHelper, GizmoViewport, Html, PivotControls, TransformControls, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useControls, folder } from 'leva'


gsap.registerPlugin(ScrollTrigger)

export default function Model() {
  const { nodes, scene } = useGLTF('/sofa.glb')
  const modelRef = useRef<THREE.Group>(null)
  const [showHelpers, setShowHelpers] = useState(true)
  const { camera } = useThree()
  const cameraRef = useRef();
  const animationGroupRef = useRef<THREE.Group>(null)
  const textures = new Map([
    ['Cube002_1', useTexture('/wood3.jpg')],
    ['Cube002', useTexture('/zz.jpg')],
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
            roughness: 0.7,
            metalness: 0.6,
            flatShading: true,
          })
        }
      }
    })
  }, [scene, textures])
  const {
    showGrid,
    showAxes,
    showBoundingBox,
    showTransformControls,
    showPivotControls,
    pillowPosition,
    sofaPosition,
    
  } = useControls('Debug Controls', {
    helpers: folder({
      showGrid: true,
      showAxes: true,
      showBoundingBox: true,
      showTransformControls: false,
      showPivotControls: false,
    }),
    positions: folder({
      pillowPosition: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.1,
      },
      sofaPosition: {
        value: { x: 0, y: 1.4, z: 0 },
        step: 0.1,
      },
    }),
  })
  useEffect(() => {
    if (nodes.Cube009) {
      nodes.Cube009.position.set(
        pillowPosition.x,
        pillowPosition.y,
        pillowPosition.z
      )
    }
  }, [pillowPosition])

  useEffect(() => {
    if (animationGroupRef.current) {
      animationGroupRef.current.position.set(
        sofaPosition.x,
        sofaPosition.y,
        sofaPosition.z
      )
    }
  }, [sofaPosition])


  useGSAP(() => {
    if (!modelRef.current) return

  
    gsap.set(modelRef.current.position, {x:7 })
    
 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#canvas-container',
        start: '500px top',
        end: 'bottom bottom',
        scrub: 1,
        markers:true ,
       
      }
    })
    tl.to(nodes.Cube009.position, {
      z: 3.3,
      y: 11.9,
      x: 0,
      duration: 1,
      ease: 'power1.inOut' ,
      scrollTrigger: {
        trigger: '#canvas-container',
        start: '1% top', 
        end: '10% center',  
        scrub: 8,
        markers: {
          startColor: 'blue',
          endColor: 'red',
          fontSize: '1rem',
        },
       
      }
    
      
    }, '+=1').to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 2,
      ease: 'none',
      
    }).to(modelRef.current.position, {
      y: -20 ,
      x: -30 ,
      duration: 1,
      ease: 'power1.inOut'
    }, '<')
    

    return () => {
      tl.kill()
    }
  }, [camera])

  return (
    <>
   
    {showGrid && <gridHelper args={[30, 20]} />}
    {showAxes && <axesHelper args={[5]} />}
    
    <group ref={animationGroupRef}>
      <group ref={modelRef}>
      <GizmoHelper
       alignment="top-left" 
       margin={[80, 80]} 
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
      </GizmoHelper>

        {showBoundingBox && (
          <primitive object={new THREE.BoxHelper(scene, 0xff0000)} />
        )}
        <primitive object={scene} position={[0, 1.4, 0]} />
        {showTransformControls && nodes.Cube009 && (
          <TransformControls object={nodes.Cube009} mode="translate" />
        )}

        {showPivotControls && (
          <PivotControls 
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={2}
            axisColors={['#ff0000', '#00ff00', '#0000ff']}
            scale={1}
          />
        )}
  
        {showHelpers && (
          <>
            <Html position={[0, 2, 0]}>
              <div className="bg-black/50 text-white px-2 py-1 rounded">
                Sofa Group
              </div>
            </Html>
            {nodes.Cube009 && (
              <Html position={[
                nodes.Cube009.position.x,
                nodes.Cube009.position.y + 0.5,
                nodes.Cube009.position.z
              ]}>
                <div className="bg-purple-500/50 text-white px-2 py-1 rounded">
                  Pillow (Cube009)
                </div>
              </Html>
            )}
          </>
        )}
      </group>
    </group>
  </>
  )
}

useGLTF.preload('/sofa.glb')