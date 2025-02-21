import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const MySQLIcon = ({position, isMobile}) => {
  const { nodes, materials } = useGLTF('/models/mysql-icon.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <group position={position} scale={isMobile ? 0.8 : 1} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Curve010.geometry}
        material={materials['Material.048']}
        position={[0, 0, 0.095]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[18.689, 13.456, 18.689]}
      />
    </group>
  )
}

useGLTF.preload('/models/mysql-icon.glb')

export default MySQLIcon