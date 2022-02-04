import 'styles/globals.css';
import Hero from 'components/Hero/Hero';
import Educacion from 'components/Hero/Educacion';
import Idiomas from 'components/Hero/Idiomas';
import Cursos from 'components/Hero/Cursos';
import Perfil from 'components/Hero/Perfil';
import Informacion from 'components/Hero/Infomacion';

function App() {
  return (
    <div>
      <Hero />
      <Educacion />
      <Idiomas />
      <Cursos />
      <Perfil />
      <Informacion />
    </div>
  );
}

export default App;
