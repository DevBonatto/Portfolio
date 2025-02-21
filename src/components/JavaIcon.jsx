import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const JavaIcon = (props) => {
  const javaIconRef = useRef()
  const { scene } = useGLTF('/models/java-icon.glb')

  useGSAP(() => {
    gsap.to(javaIconRef.current.position, {
      y: javaIconRef.current.position.y + 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <mesh {...props} ref={javaIconRef} rotation={[0, Math.PI / 1, 0]} scale={1}>
      <primitive object={scene} />
    </mesh>
  )
}

export default JavaIcon