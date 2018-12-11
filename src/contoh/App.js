import React, { Component } from 'react';
import Headerpertama from './components/Headerpertama';
import Contenpertama from './components/Contenpertama';
import Inputlol from './components/inputlol';
import Footerpertama from './components/Footerpertama';
import Contenkedua from './components/ContenKedua';
import Contenketiga from './components/Contenketiga';
import LoginPertama from './components/LoginPertama';

class App extends Component {
    state = { content : 'Pertama' , username : '' , akhir : 'Pirate' , apa : 'iya' , inputnama : '' }
  
    onBtnOkClick = () =>{
      
      this.setState({ content : 'Kedua' })
    }
  
    onBtnLoginClick = () => {
      var username = this.refs.username.refs.tbUsername.value;
      
      this.setState({ username : username })
    }
  
    onGantistate = () => {
      this.setState({ akhir : 'Pirate King' })
    }
  
    onGantistate2 = () => {
      this.setState( {apa: 'Nggeh'} )
    }
  
    onGantistate3 = () => {
      this.setState({ apa : 'Yes' })
    }
  
    onGantistate4 = () => {
      var penggantinama = this.refs.inputnama.value; // Ini Untuk Menghubungkan Ke Input form
      this.setState({ inputnama : penggantinama }) // Mengganti Properties inputnama menjadi isian Input
    }
  
    render() {
      var { content , username , akhir , apa , inputnama } = this.state;
      return(
          <div className={"container"}>
            <Contenpertama contentHeader={content} />
            <Button color="danger" className="col-xs-1" onClick={this.onBtnOkClick}> danger</Button> 
            <LoginPertama />
            <br /> 
            <Footerpertama contentHeader1={akhir} />
            <Button color="info" onClick={this.onGantistate}>info</Button>
            <Contenkedua IniCon2={apa} />
            <Button color="info" onClick={this.onGantistate2}>Masuk</Button>
            <Button color="danger" onClick={this.onGantistate3}>Masuk</Button>
            <Button href="https://reactstrap.github.io/components/form/">Masuk</Button>
            <Contenketiga namainput ={inputnama} />
            Silahkan Tulis Nama Anda <br />
            <input ref="inputnama" ></input>
            <br /> <br />
            <Button onClick={this.onGantistate4}>Ganti</Button> 
          </div>
      )
    }
} 

export default App;