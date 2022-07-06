const express = require('express')
const router = express.Router()

router.get('/new', (req,res) => {
    res.render('events/new.ejs')
})

router.post('/', (req,res) =>{
    
})

module.exports = router