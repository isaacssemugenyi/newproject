const express = require('express');
const app = express();

//Requiring routes
const homeRoutes = require('./routes/home.routes');
const adminRoutes = require('./routes/admin.routes')

const port = process.env.PORT || 2000;

//Using routes
app.use('/', homeRoutes);
app.use('/admin', adminRoutes)


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})