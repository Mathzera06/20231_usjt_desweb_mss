const express = require ('express')
const axios = require('axios')
const bodyParse = require ('body-parser')

const app = express()
app.use(bodyParse.json())

const observacoesPorLembreteId = {}

const {v4 : uuidv4} = require ('uuid')

app.post('/lembretes/:id/observacoes',async (req,res) => {
    const idObs = uuidv4();
    const {texto} = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.id] || [];
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteId[req.id] = observacoesDoLembrete;
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs, texto, lembreteId: req.params.id
        }
    })
    res.status(201).send(observacoesDoLembrete)
})

app.get('/lembretes/:id/observacoes', (req,res) => {
    res.send(observacoesPorLembreteId[req.id] || []);
})

app.post('/eventos', (req, res) =>{
    console.log(req.body)
    res.status(200).send({msg: 'ok'})
})

app.listen(5000, () => {
    console.log("Observacoes. Porta 5000")
})