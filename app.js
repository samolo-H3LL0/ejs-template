const express = require('express');
const app = rexpress();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {})
})

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000')
})
