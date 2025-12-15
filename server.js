require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 3000;

// הגדרות בסיסיות
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'schoolhubsecret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// דוגמה לעמוד ראשי
app.get('/', (req, res) => {
  res.render('index');
});

// הפעלת השרת
app.listen(PORT,  '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
