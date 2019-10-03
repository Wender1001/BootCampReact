import  React, {Component} from 'react';

export default class Home extends Component{

    render(){
        return(
        <div className="geral mainBackground">
        <nav>
            <div id="logo"></div>
            <input type="text" placeholder="O que você está procurando"/>
            <div id="signin">
                <a className="itensHovered" href="">Entrar</a>
            </div>
        </nav>
        <section>
            <span>A conta Banco Digital te dá acesso a um novo patamar de produtos e serviços bancários. Bem vindo ao
                futuro.</span>
            <button className="itensHovered btnOutline btnDefault">Continuar</button>
        </section>
    </div>

        
        );
    }
}
