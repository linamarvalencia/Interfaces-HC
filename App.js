import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin  from "react-google-login";
import logo_zelda from './logo_zelda.png'

class App extends Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  login(){

}

  getValue(elm){

  console.log(elm.target.value);

  this.setState({first_name: elm.target.value})

}

  render() {

    const responseGoogle = (response) => {
      console.log("hola", response);
    }
    return (
      <div>
        <img src={logo_zelda} />
        <div className="split left">
          <div className="centered">
            <p>Ingresa tus datos para iniciar sesión</p>
            <form>
              <label>Nombre Usuario</label>
              <div className="form-group ">  
                <input type="text" name="user"/>
              </div>
              <label>Contraseña</label>
              <div className="form-group">
                <input type="password" name="pass"/>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-success">Entrar</button>
              </div>
            </form>
            <p>Si tienes cuenta en Google+, inicia sesión aquí</p>

            <GoogleLogin
                  clientId="1046408302562-6nqsuh4da6ip7an18gh8pr07at8a2olk.apps.googleusercontent.com"
                  buttonText="Iniciar con Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}

                />

          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <p>Si no tienes cuenta ¡Regístrte aquí!</p>
            <form>
              <label>Nombre</label>
              <div className="form-group ">  
                <input type="text" name="first_name"/>
              </div>
              <label>Apellido</label>
              <div className="form-group">
                <input type="text" name="last_name"/>
              </div>
              <label>Correo Electrónico</label>
              <div className="form-group ">  
                <input type="email" name="user"/>
              </div>
              <label>Nombre Usuario</label>
              <div className="form-group ">  
                <input type="text" name="user"/>
              </div>
              <label>Contraseña</label>
              <div className="form-group ">  
                <input type="password" name="user"/>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-success">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      
    );
  }
}

export default App;
