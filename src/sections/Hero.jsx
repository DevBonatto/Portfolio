import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from "../constants/index.js"
import JavaIcon from '../components/JavaIcon.jsx'
import ReactIcon from '../components/ReactIcon.jsx'
import NodeIcon from '../components/NodeIcon.jsx'
import MySQLIcon from '../components/MySQLIcon.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
 
const Hero = () => {
  const [hardwareAcceleration, setHardwareAcceleration] = useState(true)

  const [language, setLanguage] = useState("en");

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  useEffect(() => {
    function isHardwareAccelerationEnabled() {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

      if(!gl) return false

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if(!debugInfo) return true

      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      return !renderer.includes('SwiftShader')
    }

    if(!isHardwareAccelerationEnabled()) {
      setHardwareAcceleration(false)
    }
  }, [])

  if(!hardwareAcceleration) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white text-center p-5" id='home'>
      {language === "en" ? (
        <>
          <p className="text-2xl font-medium">🚀 Graphics acceleration disabled!</p>
          <p className="mt-2 text-gray-400">
            For the best experience, enable this option in your browser:
          </p>
          <ul className="text-left mt-4">
            <li>
              <b>Chrome:</b> Go to <i>Settings → System</i> and enable "Use hardware acceleration when available".
            </li>
            <li>
              <b>Firefox:</b> Type <i>about:config</i> and enable <i>webgl.force-enabled</i>.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            After enabling it, restart your browser and try again.
          </p>
        </>
      ) : (
        <>
          <p className="text-2xl font-medium">🚀 Aceleração gráfica desativada!</p>
          <p className="mt-2 text-gray-400">
            Para a melhor experiência, ative essa opção no seu navegador:
          </p>
          <ul className="text-left mt-4">
            <li>
              <b>Chrome:</b> Vá para <i>Configurações → Sistema</i> e ative "Usar aceleração de hardware quando disponível".
            </li>
            <li>
              <b>Firefox:</b> Digite <i>about:config</i> e habilite <i>webgl.force-enabled</i>.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Depois de ativar, reinicie o navegador e tente novamente.
          </p>
        </>
      )}

      <button 
        onClick={() => setLanguage(language === "en" ? "pt" : "en")} 
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
      >
        {language === "en" ? "Mudar instruções para Português" : "Switch instructions to English"}
      </button>
    </section>
  )
}

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Lucca Bonatto<span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Full Stack Developer</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

          <HeroCamera isMobile={isMobile}>
            <HackerRoom 
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