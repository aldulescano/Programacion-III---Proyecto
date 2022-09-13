import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import VerTodas from './screens/VerTodas/VerTodas';
import VerTodasTop from './screens/VerTodasTop/VerTodasTop';
import Favoritos from './screens/Favoritos/Favoritos';
import Detalle from './screens/Detalle/Detalle';
import Search from './screens/SearchResults/SearchResults';
import Error404 from './screens/Error/Error404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../src/app.css'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas/populares" component={VerTodas} />
          <Route exact path="/peliculas/top_rated" component={VerTodasTop} />
          <Route path="/peliculas/favoritos" component={Favoritos} />
          <Route path="/peliculas/detalle/id/:id" component={Detalle} />
          <Route path= "/resultados/:title" component={Search} />
          <Route path="" component={Error404} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
