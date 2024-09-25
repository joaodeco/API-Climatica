const express = require ('express');
const app = express();
const axios = require('axios');
const porta = 3000;
const API_KEY = require('./key')

app.use(express.json());


app.get('/clima/:cidade', async (req, res)  => {
    try{
        let {cidade} = req.params
        const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
        res.send(resposta.data)
    } catch(erro){
        res.status(500)
            .json({ mensagem: 'Erro', erro: erro.message })
    }
})

app.listen(porta, ()=>{
    console.log(`O servidor está rodando em http://localhost:${porta}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo deu errado')
})