import 'styles/globals.css';

function Informacion() {
  return (
    <div className='InformacionAcademica md:w-11/12 md:mx-7 md:text-lg'>
      <h1 className='Caracteristicas'>Informacion Academica</h1>
      <div className='InformacionAcademicaCuerpo md:w-10/12 md:mx-8 p-1'>
        <h2 className='Textocuerpo md:text-sm md:p-1'>
          Educación Secundaria:Institución Educativa San Lorenzo de Aburrá
          Bachiller Académico 2013
        </h2>
        <h2 className='Textocuerpo md:text-sm md:p-1'>
          Educación Superior:Ingeniería de Sistemas Séptimo Nivel Universidad de
          Antioquia
        </h2>
      </div>
    </div>
  );
}
export default Informacion;
