import {busqueda} from './components/ViewMoive/selectors';
import { searchMovies } from './components/ViewMoive/functions';

class app{

constructor(){
    this.initApp();
  }

  initApp(){
    busqueda.addEventListener('input', searchMovies);
  }
}

export default app;