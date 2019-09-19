import React,{Component} from "react";
import ComponenteDoTeste from "./ComponenteDoTeste"

export default class App extends Component {

  render(){
    return(
      <React.Fragment>
       <h1> Hello wender</h1>
       <h2> hello nao men</h2>
       <ComponenteDoTeste nome ="Wender" idade ="17"/>
       <ComponenteDoTeste nome ="Augusto" idade ="18"/>
       </React.Fragment>
    );
    }
}