const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello welcome')
})

router.get('/home', (req,res)=>{
    res.send('you have reached home')
})

module.exports = router;