
import { Suspense } from 'react'
import { Canvas  } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from './model'


export default function Scene () {
  
  return (
    <Canvas 
      shadows
     
      camera={{ position: [3, 8, 15], fov: 44 }}
      style={{ width: '55%',  }}
    >

      <Suspense fallback={"loading"}>
        
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[1, 12, 9]} intensity={1.9} shadow-mapSize={[1024, 1024]}>
         <orthographicCamera attach="shadow-camera" args={[-14, 10, 10, -10]} />
        </directionalLight>


        <Model   />
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2 - 0.1}
        minPolarAngle={Math.PI / 2 - 1}
        maxAzimuthAngle={Math.PI / 4} 
        minAzimuthAngle={-Math.PI / 4}
        zoom0={1}
       
        />
      </Suspense>
    </Canvas>
  )
}

