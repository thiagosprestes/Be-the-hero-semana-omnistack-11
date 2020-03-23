const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'Thiago Prestes'
    });
})

app.listen(3333);