const express = require ('express');
const app = express();
const axios = require('axios');
const porta = 3000;

app.use(express.json());

axios
.get("https://3cf5817dfc9ad85116b38126db23f328/data")
.then((response) => console.log(response.data))
.catch((error) => console.error(error));


app.listen(porta, ()=>{
    console.log(`O servidor está rodando em http://localhost:${porta}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo deu errado')
})