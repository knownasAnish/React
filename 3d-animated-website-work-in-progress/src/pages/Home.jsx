import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island.jsx';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP

        </div> */}

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    }else{
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale,  screenPosition; 

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition=[0, -1.5, 0];
    }else{
      screenScale = [3, 3, 3];
      screenPosition=[0, -4, -4];
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}>
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} /> //sunlight
              <ambientLight intensity={0.5} /> //Equally distributed light all over
              {/* <pointLight /> */} //like a lamp or torch, distance matters
              {/* <spotLight /> */} //similar to point light, but it provides light in shape of cone
              <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} /> //Provides a smooth, ambient light with two color sources (sky and ground), offering soft and indirect lighting.
              <Bird />
              <Sky />
              <Island 
                position={islandPosition}
                scale={islandScale} 
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />
              <Plane
                planeScale={planeScale}
                planePosition={planePosition}
                isRotating={isRotating}
                rotation={[0, 20, 0]}
              />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home