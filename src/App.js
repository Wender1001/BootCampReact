 import React, { Component } from "react";
 import Home from './Pages/Home/Home';
 import './Pages/signup/step1/Step1'
 import signup from './Pages/signup/Signup'

 import './template/assets/css/normalize.css';
 import './template/assets/css/template.css';
 import './template/assets/css/style.css';
import Step1 from "./Pages/signup/step1/Step1";


// class Meuh1 extends Component {
//   render() {
//     return <h1> Voce clicou no  {this.props.title}</h1>
//   }
// }


// class MeuBtn extends Component {
//   render() {
//     return <button onClick= { () =>this.props.change(this.props.name)}>{this.props.name}</button>
//   }

// }
// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       actualBtn: ''
//     }
//   }
//   handleChange = (name) => {
        
//     this.setState({ actualBtn: name })
//   }


//   render() {
//     return (
//       <>
//         <Meuh1 title={this.state.actualBtn} />
//         <MeuBtn change={this.handleChange} name="botão 1" />
//         <MeuBtn change={this.handleChange} name="botão 2" />
//         <MeuBtn change={this.handleChange} name="botão 3" />
//       </>
//     );
//   }
// }

 //     <React.Fragment>
   //     <h1> Hello wender</h1>
     //   <h2> hello nao men</h2>
       // <ComponenteDoTeste nome="Wender" idade="17" />
       // <ComponenteDoTeste nome="Augusto" idade="18" />
     // </React.Fragment>
export default class App extends Component{
  render(){
    return <Step1 />
  }
}
