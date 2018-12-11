import React, { Component } from 'react';
import './support/vendor/bootstrap/css/bootstrap.min.css';
import './support/vendor/fontawesome-free/css/all.min.css';
import './support/vendor/simple-line-icons/css/simple-line-icons.css';
import './support/css/landing-page.min.css';
import './support/css/font-css-aja.css';


import Headerpertama1 from './components/Headerpertama';
import ContenPertama1 from './components/Contenpertama';
import Footerpertama1 from './components/Footerpertama';
import Contenkedua1 from './components/Contenkedua';
import Contenketiga1 from './components/Contenketiga';
import ContenKeEmpat from './components/ContenkeEmpat';
import Contenkelima from './components/Contenkelima';

class App extends Component {
  render() {
    return(
      <div>
        <Headerpertama1 />
        <ContenPertama1 />
        <Contenkedua1 />
        <Contenketiga1 />
        <ContenKeEmpat />
        <Contenkelima />
        <Footerpertama1 />
      </div>
    );
  }
}

export default App;
