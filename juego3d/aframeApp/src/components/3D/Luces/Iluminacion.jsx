import LuzDireccional from "./LuzDireccional";

/** Aporta iluminación a la escena */
/** Sin iluminación, los paneles permanecen negros */
const Iluminacion = () => {
    // Con cada componente de ilumincación, solamente se debe indicar la posición
    return (
        <>
            <LuzDireccional posicion={"0 2 1.3"} />
            <LuzDireccional posicion={"1 2 -1"} />
            <LuzDireccional posicion={"-1 2 -1"} />
        </>
    )
}
export default Iluminacion;