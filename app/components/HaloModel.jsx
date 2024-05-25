import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const HaloModel = ({ position = [0, 0, 0] }) => {
  const model = useGLTF("halo-walk.glb")

  const { actions } = useAnimations(model.animations, model.scene)

  useEffect(() => {
    actions?.Walk?.play()
  })

  useEffect(() => {
    model.scene.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    }, [])
  })

  return <primitive object={model.scene} scale={1.75} position={position} />
}

export default HaloModel
