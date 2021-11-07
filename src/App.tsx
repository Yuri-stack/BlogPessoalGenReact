import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';

import Navbar from './components/statics/Navbar/Navbar';
import Footer from './components/statics/Footer/Footer';

import ListaTema from './components/temas/ListaTema/ListaTema';
import ListaPostagem from './components/postagens/ListaPostagem/ListaPostagem';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastro">
            <CadastroUsuario />
          </Route>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/posts">
            <ListaPostagem />
          </Route>
          
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
