import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const NodeIcon = ({ ...props }) => {
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
        position={[9, -4, 0]} 
        rotation={[0, 0, 0]}
        scale={0.74}
        dispose={null}
        {...props}
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
