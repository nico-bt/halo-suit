import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { Vector3 } from "three"

function CameraAndLights() {
  const { camera } = useThree()

  useEffect(() => {
    // Set initial camera position and lookAt
    camera.position.set(0, 3, 7)
    camera.lookAt(new Vector3(0, 3, 0))
  }, [camera])

  return (
    <>
      <color attach="background" args={["black"]} />
      <OrbitControls maxPolarAngle={Math.PI / 1.85} maxDistance={9} minDistance={5} />

      <ambientLight intensity={2} />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={250}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  )
}

export default CameraAndLights
