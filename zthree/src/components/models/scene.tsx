import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from './model'

export default function Scene () {
  return (
    <Canvas 
      camera={{ position: [0, 5, 5], fov: 45 }}
      style={{ width: '50%', height: '100vh' }}
    >
      <Suspense fallback={"loading"}>
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 0, 0]} angle={0.5} penumbra={1} />
            <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

