import { Html } from "@react-three/drei"
import zoom from "./zoom.svg"
import orbit from "./orbit.svg"
import styles from "./styles.module.css"
import Image from "next/image"

function FooterDetailsView() {
  return (
    <Html fullscreen className={styles.cursor}>
      <div className={styles.footer}>
        <div>
          <Image src={orbit} alt="orbit" width={36} />
          <h5>Orbit</h5>
          <p>Click + drag</p>
        </div>
        <div>
          <Image src={zoom} alt="scroll" width={36} />
          <h5>Zoom</h5>
          <p>Scroll</p>
        </div>
        <button
          className={styles.reservaBtn}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nico-battaglia/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Reservar
        </button>
      </div>
    </Html>
  )
}

export default FooterDetailsView
