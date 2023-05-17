if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require('body-parser');



const indexRouter = require('./routes/index');
const customerRouter = require('./routes/customers');




app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set ('public', path.join('/', 'public'));
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));


app.use('/', indexRouter);
app.use('/customers', customerRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});