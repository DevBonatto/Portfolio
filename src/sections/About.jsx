import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('devbonatto@gmail.com')

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  const isSmall = useMediaQuery({ maxWidth: 440 })

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container items-center'>
            <img src="/assets/grid1.jpg" alt="grid-1" className='w-[200px] sm:w-[276px] sm:h-[276px] aspect-square object-cover rounded-full' />
            <div>
              <p className='grid-headtext'>About me</p>
              <p className='grid-subtext'>With 3+ years of experience, i have honed my skills in Frontend and Backend development.</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl: row-span-3'>
          <div className='grid-container items-center justify-between'>
            <img src="assets/grid2.png" alt="grid-2" className='w-[200px] sm:w-[276px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Tech  Stack</p>
              <p className='grid-subtext'>I have professional experiences with React, Java, Node.js, MySQL, Docker & Git.</p>
            </div>
          </div>
        </div>
        <div className='col-span xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
            {console.log("Renderizando Globe")}
              <Globe
                height={isSmall ? 250 : 326}
                width={isSmall ? 250 : 326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth_day.jpg"
                labelsData={[{
                  lat: -23.533773, lng: -46.625290,
                  text: "I'm here",
                  color: 'white',
                  size: 20
                }]}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely across most timezones
              </p>
              <p className='grid-subtext'>
                I'm based in Brazil, São Paulo.
                <br/>
                English (Fluent) | Italian (Basic+)
              </p>
              <a href="#contact">
                <Button name="Contact me" isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>
                My passion for coding
              </p>
              <p className='grid-subtext'>
                I love solving problems and building things through code. Coding isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white mb-0'>devbonatto@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About