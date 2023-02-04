const express = require('express')
const app = express()
const routes = require('./routes/routes');


app.use('/api', routes);

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
module.export = app