"use client"

import { Environment, Loader, ScrollControls, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Ground } from "./Ground"
import HtmlContent from "./HtmlContent"
import CameraChange from "./CameraChange"
import CameraAndLights from "./CameraAndLights"
import HaloModel from "./HaloModel"
import FooterDetailsView from "./FooterDetailsView/FooterDetailsView"

function Experience() {
  const [viewDetails, setViewDetails] = useState(false)

  if (viewDetails) {
    return (
      <>
        <Canvas shadows>
          <Suspense fallback={null}>
            <CameraAndLights />

            <Background showBackground={false} />
            <Ground sandFloor={false} position={[0, -2, 0]} />
            <HaloModel position={[0, -2, 0]} />
            <FooterDetailsView />
          </Suspense>
        </Canvas>

        <Loader />
      </>
    )
  } else {
    return (
      <>
        <Canvas shadows camera={{ position: [-0.75, 1, 6.75] }}>
          <Suspense fallback={null}>
            <ScrollControls pages={4} damping={0.1}>
              <CameraChange />
              <ambientLight intensity={0.25} />
              <directionalLight position={[0, 5, 5]} intensity={2} castShadow />

              <Background />
              <Ground />
              <HaloModel />
              <HtmlContent setViewDetails={setViewDetails} />
            </ScrollControls>
          </Suspense>
        </Canvas>

        <Loader />
      </>
    )
  }
}
export default Experience

// -------------------------------------------------------------------------------------------------

const Background = ({ showBackground = true }) => {
  let envProps = {}

  if (showBackground) {
    envProps = {
      files: "./goegap.hdr",
      background: true,
      ground: {
        height: 15, // Height of the camera that was used to create the env map (Default: 15)
        radius: 542, // Radius of the world. (Default 60)
        scale: 900, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
      },
    }
  } else {
    envProps = {
      files: "./goegap.hdr",
      background: false,
    }
  }

  return <Environment {...envProps} />
}
