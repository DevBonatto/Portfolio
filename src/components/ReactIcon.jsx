

import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactIcon = ({position, isMobile}) => {
  const { nodes, materials } = useGLTF('/models/react-icon.glb')
  return (
    <Float floatIntensity={1}>
      <group position={position} scale={isMobile ? 0.3 : 0.5 } >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
  
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react-icon.glb')

export default ReactIcon
