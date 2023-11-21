const express = require('express');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, err => {
    if(err){
        console.log(err.message);
    }
});
/* Hello */
app.get('/', (req, res) => {
    res.redirect('/main');
});

app.get('/main', (req, res) => {
    res.render('home');
});