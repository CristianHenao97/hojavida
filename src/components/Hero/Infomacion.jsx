import 'styles/globals.css';

function Informacion() {
  return (
    <div className='InformacionAcademica md:w-1/2 md:mx-24 sm:mx-4  md:justify-center lg:justify-center items-center'>
      <h1 className='Caracteristicas'>Informacion Academica</h1>
      <div className='InformacionAcademicaCuerpo md:w-1/2 md:mx-24 sm:mx-4  md:justify-center lg:justify-center items-center'>
        <h2 className='Textocuerpo'>
          Educación Secundaria:Institución Educativa San Lorenzo de Aburrá
          Bachiller Académico 2013
        </h2>
        <h2 className='Textocuerpo'>
          Educación Superior:Ingeniería de Sistemas Séptimo Nivel Universidad de
          Antioquia
        </h2>
      </div>
    </div>
  );
}
export default Informacion;
