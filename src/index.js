import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'

const estilosBotao = {
    marginTop:12, paddingTop:8, paddingBottom:8, backgroundColor:'blueviolet', color:'white',
    border:'none', widht:'100%', borderRadius:8
}

const textoDoRotulo = 'Nome'

const obterTextoBotao = () => {
    return 'Enviar'
}

const App = () => {
    return <div style={{margin:"auto", width:768, backgroundColor: "#EEE",
    padding:12, borderRadius:8}}>
        <label className="rotulo" htmlFor='nome' style={{display: 'block', marginBottom:4}}>
            {textoDoRotulo}
        </label>
        <input type='text' id='nome' style={{paddingTop:8, paddingBottom:8,borderStyle:'hidden', widht:'100%', borderRadius:8,
            outline:'none',boxSizing:'border-box'}}/>
            <button style={estilosBotao}>{obterTextoBotao}Enviar</button>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)