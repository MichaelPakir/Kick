import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera } from 'three';
import Shoe from '../components/Shoe';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
const Hero = () => {
 

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Welcome <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Kick Bastards</p>
      </div>

      <div className="w-full h-full absolute inset-0">
      <Canvas className='w-full h-full'>
      <Suspense fallback={<CanvasLoader/>}>
      {/* <PerspectiveCamera makeDefault position={[0, 0, 30]}/> */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
    </mesh>
      <Shoe/>

      </Suspense>
      </Canvas>
      </div>
    </section>
  );
};

export default Hero;