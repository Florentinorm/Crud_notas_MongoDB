const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/customerDatabase', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
