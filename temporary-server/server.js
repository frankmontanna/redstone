const express = require('express');
const path = require('path');

const app = express();

/*SIMULATED DB*/
var products = {
    "results":[
        {
            "ID": 1,
            "DISCOUNT": true,
            "DISCOUNT_VALUE": 44,
            "BEST_SELLER": true,
            "TITLE": "LEVE 8, PAGUE 4",
            "TAGS": ["1 frigideira 24cm", "1 caçarola 20cm", "1 caçarola 24cm", "1 panela 20cm", "2 tampas 20cm","2 tampas 24cm"],
            "IMAGE": "http://127.0.0.1:8080/images/kit-1.png",
            "FULL_PRICE": 116600,
            "CURRENT_PRICE": 67700,
        },
        {
            "ID": 2,
            "DISCOUNT": true,
            "DISCOUNT_VALUE": 44,
            "BEST_SELLER": false,
            "TITLE": "LEVE 9 PAGUE 5",
            "TAGS": ["1 frigideira 24cm ", "1 caçarola 20cm", "1 caçarola 24cm", "1 panela 20cm","2 tampas 20cm","2 tampas 24cm",],
            "IMAGE": "http://127.0.0.1:8080/images/kit-2.png",
            "FULL_PRICE": 259000,
            "CURRENT_PRICE": 75700,
        },
        {
            "ID": 3,
            "DISCOUNT": true,
            "DISCOUNT_VALUE": 44,
            "BEST_SELLER": false,
            "TITLE": "LEVE 7, PAGUE 4",
            "TAGS": ["1 frigideira 24cm ", "1 caçarola 20cm", "1 caçarola 24cm", "1 panela 20cm","2 tampas 20cm"],
            "IMAGE": "http://127.0.0.1:8080/images/kit-3.png",
            "FULL_PRICE": 110900,
            "CURRENT_PRICE": 64700,
        },
        {
            "ID": 4,
            "DISCOUNT": false,
            "DISCOUNT_VALUE": 0,
            "BEST_SELLER": false,
            "TITLE": "LEVE 5, PAGUE 3",
            "TAGS": ["1 frigideira 24cm ", "1 caçarola 24cm", "1 panela 20cm","2 tampas 20cm","2 tampas 24cm",],
            "IMAGE": "http://127.0.0.1:8080/images/kit-4.png",
            "FULL_PRICE": 77500,
            "CURRENT_PRICE": 33000,
        },
]
}

app.get('/products', (req, res) =>{
    res.send(products);
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080,() =>{
    console.log("Server On, faça a requisição para 127.0.0.1:8080/products, e tera como resposta o JSON")
})
