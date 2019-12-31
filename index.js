const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initilizations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', exphbs({
    defaultLayout: 'index',
    layoutsDir: path.join(app.get('views'), 'layouts'),     // Headers & Footers
    partialsDir: path.join(app.get('views'), 'partials'),   // Formularios de registro
    extname: '.html'                                        // Extensión de las vistas
}));
app.set('view engine', '.html');

// Middlewares (Permite hacer solicitudes como el envío de formularios)
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method')); 
app.use(session({                                           // autentica al usuario
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))
// Routes
app.use(require('./routes/index'));
app.use(require('./routes/primers'));
app.use(require('./routes/users'));

// Static files
app.use(express.static(path.join(__dirname, 'look')));

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});