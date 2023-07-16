const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('******Conexión correcta****')
        })
        .catch((error) => {
            console.error('******Error de conexión****')
        });
};

module.exports = dbConnect;