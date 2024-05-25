import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

function CameraChange() {
  const scroll = useScroll()

  const initialPosition = new Vector3(-0.75, 1, 6.75)
  const targetPosition = new Vector3(-4, 0.8, -5)
  const targetPosition2 = new Vector3(1, 12.5, 11.5)

  useFrame((state, alfa) => {
    const currentPosition = state.camera.position.clone()

    if (scroll.scroll.current < 0.5) {
      const lerpedPosition = currentPosition.lerp(initialPosition, 0.015)
      state.camera.position.copy(lerpedPosition)
      state.camera.lookAt(0, 1.25, 0)
    }

    if (scroll.scroll.current > 0.5) {
      const lerpedPosition = currentPosition.lerp(targetPosition, 0.015)
      state.camera.position.copy(lerpedPosition)
      state.camera.lookAt(0, 2, 0)
    }

    if (scroll.scroll.current > 0.9) {
      const lerpedPosition = currentPosition.lerp(targetPosition2, 0.015)
      state.camera.position.copy(lerpedPosition)
      state.camera.lookAt(0, 1.9, 0)
    }
  })

  return <></>
}

export default CameraChange
