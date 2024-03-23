const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

const router = require('./routes/routeUserPosts');

app.use(router);

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening to port ${port}`);
})


