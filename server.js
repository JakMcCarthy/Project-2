const express= require('express')
const eventsRouter = require('./routes/events.js')
const app = express()

app.set('view engine', 'ejs')

app.use('/events', eventsRouter)

app.get('/', (req,res) => {
    const events =[{
        title: 'test event',
        eventDate: new Date ('<03-23-2023>'),
        eventTime:  'test 3:45',
        location: 'test location',
        description: 'test description'
    }]
    res.render('events/index.ejs', { events: events})
})
app.listen(5000)