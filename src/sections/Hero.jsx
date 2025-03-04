import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from "../constants/index.js"
import JavaIcon from '../components/JavaIcon.jsx'
import ReactIcon from '../components/ReactIcon.jsx'
import NodeIcon from '../components/NodeIcon.jsx'
import MySQLIcon from '../components/MySQLIcon.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
 
const Hero = () => {
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  
  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Lucca Bonatto<span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Full-Stack Developer</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

          <HeroCamera isMobile={isMobile}>
            <HackerRoom 
              // scale={0.07} 
              //position={[0, 0, 0]} 
              //rotation={[0, 280, 0]} 
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
              />
            </HeroCamera>

              <group>
                <JavaIcon position={sizes.javaIconPosition} isMobile={isMobile}/>
                <ReactIcon position={sizes.reactIconPosition} isMobile={isMobile}/>
                <NodeIcon position={sizes.nodeIconPosition} isMobile={isMobile}/>
                <MySQLIcon position={sizes.mySQLIconPosition} isMobile={isMobile}/>
              </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
        <a href="#about" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
        </a>
      </div>
    </section>
  )
}

export default Hero