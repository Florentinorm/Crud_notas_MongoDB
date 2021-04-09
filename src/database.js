const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Producto:Tino-ramirez@cluster0.4g7bl.mongodb.net/notas', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));