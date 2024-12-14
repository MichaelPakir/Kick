
import { useGLTF } from '@react-three/drei'

const Shoe = (props) => {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_shoe_0.geometry}
        material={materials.shoe}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoelace_shoelace_0.geometry}
        material={materials.shoelace}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/FinalShoes/public/models/scene.glb')
export default Shoe;




