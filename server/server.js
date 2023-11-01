const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config.jsx');
require('dotenv').config();

const gearRoutes = require('./routes/gear.routes.jsx')
gearRoutes(app)
const wishRoutes = require('./routes/wish.routes.jsx')
wishRoutes(app)

app.listen(8000, () => {
    console.log("Crackalackin' at Port 8000")
})