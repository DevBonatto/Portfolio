import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const NodeIcon = ({ position, isMobile }) => {
  const { nodes, materials } = useGLTF('/models/nodejs-icon.glb')
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float>
      <group
        ref={groupRef}
        scale={isMobile ? 0.7 : 1}
        dispose={null}
        position={position}
      >
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={materials['Material.001']}
          position={[0, -0.066, 0.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={5.154}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/nodejs-icon.glb')

export default NodeIcon
