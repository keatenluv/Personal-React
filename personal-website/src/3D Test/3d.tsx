import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function Scene() {
    const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
    return <primitive object={gltf.scene} />
  }