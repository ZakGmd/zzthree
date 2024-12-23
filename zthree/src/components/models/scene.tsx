import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import Model from './model'
import { easing } from 'maath'

export default function Scene() {
  return (
      <Canvas
        shadows
        id="canvas-container"
        camera={{ position: [10, 7, 13], fov: 65  ,} }
        gl={{ preserveDrawingBuffer: true }} 
        style={{ width: '100%', height: '100%'  }}
      
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.8} />
          <directionalLight 
            castShadow 
            position={[1, 12, 9]} 
            intensity={1.9} 
            shadow-mapSize={[1024, 1024]}
          >
            <orthographicCamera attach="shadow-camera" args={[-14, 10, 10, -10]} />
          </directionalLight>

          <Model />

          <OrbitControls
     //   enabled={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2 - 0.1}
            minPolarAngle={Math.PI / 2 - 1}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
          />
          
        
        </Suspense>
      </Canvas>
   
  )
}