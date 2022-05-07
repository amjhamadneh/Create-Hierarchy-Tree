const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const db = require('./models');
const indexRoute = require('./routes/index');
app.use('/api/v1', indexRoute);


db.sequelize.sync().then(() => {
    app.listen(5000, () =>
        console.log(`Example app listening on port 5000!`),
    );
})


