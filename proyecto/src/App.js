import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import VerTodas from './screens/VerTodas/VerTodas';
import Favoritos from './screens/Favoritos/Favoritos';
import Detalle from './screens/Detalle/Detalle';
import Resultados from './screens/Resultados/Resultados';
import Error404 from './screens/Error/Error404';

function App() {
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={VerTodas} />
          <Route path="/peliculas/favoritos" component={Favoritos} />
          <Route path="/peliculas/detalle/id/:id" component={Detalle} />
          <Route path="/resultados" component={Resultados} />
          <Route path="" component={Error404} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;