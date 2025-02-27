import { useContext } from "react";
import { AccessibilityContext } from "../context/AccessibilityContext";

function SobreNosotros() {
  const { highContrast } = useContext(AccessibilityContext);

  return (
    <div className={`container my-4 ${highContrast ? "high-contrast" : ""}`}>
      <div className="row">
        {/* Título principal */}
        <div className="col-md-12">
          <h2 className="text-center text-primary">Sobre Nosotros</h2>
          <p className="text-justify">
            Somos un equipo de estudiantes apasionados por la tecnología y el desarrollo de software, comprometidos con la innovación y el aprendizaje constante. Actualmente, cursamos el tercer año de la carrera Técnico Superior en Desarrollo de Software Full Stack en el Instituto Técnico Superior de Cipolletti (ITS), ubicado en la provincia de Río Negro, Argentina.
          </p>
        </div>

        {/* Sección del equipo con imagen y lista */}
        <div className="col-md-12">
          <h4 className="text-center text-primary">Nuestro Equipo</h4>
          <div className="row">
            {/* Lista de nombres */}
            <div className="col-md-8">
              <p className="text-justify">
                Nuestro grupo está conformado por:
                <ul>
                  <li>Bello Altamirano, Franco</li>
                  <li>Duvall, Brian</li>
                  <li>Ezequiel, Herrera</li>
                  <li>Mellao, Nadia</li>
                  <li>Migoni, Ignacio</li>
                  <li>Opazo, Tomás</li>
                  <li>Silva, Juan</li>
                </ul>
              </p>
            </div>

            {/* Imagen del grupo */}
            <div className="col-md-4">
              <img
                src="src/assets/imagenGrupo.jpeg"
                alt="Imagen del grupo"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        {/* Resto del texto centrado */}
        <div className="col-md-12 text-center">
          <p className="text-justify">
            Cada uno de nosotros aporta sus conocimientos y habilidades para llevar adelante proyectos tecnológicos con impacto social. Nos complementamos en diversas áreas del desarrollo, desde la programación backend y frontend hasta la experiencia de usuario, bases de datos y accesibilidad.
          </p>
        </div>

        {/* Sección de Misión */}
        <div className="col-md-12">
          <h4 className="text-center text-primary">Nuestra Misión</h4>
          <p className="text-justify">
            Este proyecto surge como parte de nuestra formación académica y responde a una necesidad concreta: crear una aplicación sobre Educación Sexual Integral (ESI). La ESI es un pilar fundamental en la formación de jóvenes y adultos, proporcionando herramientas para el conocimiento del propio cuerpo, la toma de decisiones informadas y el respeto por la diversidad.
          </p>
          <p className="text-justify">
            Nuestra aplicación busca ser un recurso accesible, educativo e interactivo, diseñado con principios de usabilidad, inclusión y diseño intuitivo. Más allá de cumplir con los requerimientos académicos, nos motiva el impacto positivo que este proyecto puede generar en la comunidad, promoviendo una educación basada en la equidad y el respeto.
          </p>
        </div>

        {/* Sección de Compromiso */}
        <div className="col-md-12">
          <h4 className="text-center text-primary">Nuestro Compromiso</h4>
          <p className="text-justify">
            Como futuros desarrolladores de software, entendemos que la tecnología no solo debe ser funcional, sino también significativa. Por eso, cada línea de código que escribimos y cada decisión de diseño que tomamos están orientadas a construir una herramienta que realmente pueda aportar valor.
          </p>
          <p className="text-justify">
            Este es solo el comienzo de nuestra trayectoria en el mundo del desarrollo de software, y estamos orgullosos de que este proyecto represente nuestro esfuerzo, creatividad y compromiso con la educación y la tecnología.
          </p>
        </div>

        {/* Sección de Ética */}
        <div className="col-md-12">
          <h4 className="text-center text-primary">Ética en Nuestro Trabajo</h4>
          <p className="text-justify">
            Creemos que la tecnología debe estar al servicio de la sociedad y construirse con responsabilidad. Por eso, nuestra aplicación se desarrolla bajo los principios de transparencia, inclusión y respeto por la privacidad de los usuarios.
          </p>
          <h4 className="text-center text-primary">Nos comprometemos a:</h4>
          <ul className="text-justify">
            <li>Respetar la diversidad y promover valores de igualdad.</li>
            <li>Diseñar una plataforma accesible para todos.</li>
            <li>Garantizar que la información proporcionada sea confiable y verificada.</li>
            <li>Aplicar buenas prácticas de desarrollo para la seguridad y privacidad de los datos.</li>
          </ul>
          <p className="text-justify">
            Entendemos que el desarrollo de software no es solo una cuestión técnica, sino también una responsabilidad ética con quienes interactúan con nuestras soluciones digitales.
          </p>
        </div>

        {/* Sección de Visión */}
        <div className="col-md-12">
          <h4 className="text-center text-primary">Nuestra Visión</h4>
          <p className="text-justify">
            Aspiramos a que este proyecto no solo cumpla con los objetivos académicos, sino que también se convierta en una herramienta valiosa para la educación y el acceso a la información.
            <br />
            Nos proyectamos como futuros profesionales en el mundo del desarrollo de software, con la convicción de que la tecnología tiene el poder de transformar vidas. Queremos seguir creando soluciones innovadoras, inclusivas y con impacto real en la sociedad.
            <br />
            Soñamos con un mundo donde la educación sea accesible, la información esté al alcance de todos y la tecnología sea un puente hacia un futuro más justo y equitativo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;