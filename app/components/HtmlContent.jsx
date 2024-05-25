import { Scroll } from "@react-three/drei"

function HtmlContent({ setViewDetails }) {
  return (
    <Scroll html style={{ width: "100%" }}>
      <div className="row" style={{ top: "60vh" }}>
        <h1 className="fade-in title">Halo ThermoSuit</h1>
        <h2 className="subtitle">Pre venta Nuevo Traje</h2>
      </div>

      <div className="row" style={{ top: `180vh` }}>
        <div className="col">
          <h2>Con climatizador automático</h2>
          <p>
            Halo ThermoSuit, diseñado para mantenerte confortable en cualquier clima, incluso en los
            desiertos más extremos.
          </p>

          <p>Ajuste automático de la temperatura y humedad interna.</p>
          <p> Confort y protección avanzada, testeado en los entornos más hostiles.</p>
          <p>Reservá tu talle. Unidades limitadas</p>
        </div>
      </div>

      <button
        onClick={() => setViewDetails(true)}
        style={{
          position: "absolute",
          top: `384vh`,
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
        className="btn"
      >
        Ver en Detalle
      </button>
    </Scroll>
  )
}

export default HtmlContent
