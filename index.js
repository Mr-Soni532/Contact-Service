const express = require('express');
const sequalise = require('./config/db');
const contactRouter = require('./router/contact.router');
const authRouter = require('./router/auth.router');
const authentication = require('./middleware/authentication.middleware');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to ABA Infotech Contact Management Service✨'))
app.use('/auth', authRouter)


app.use('/contact' ,contactRouter)

module.exports = authRouter

app.listen(9090, async () => {
    try {
        await sequalise.sync();
        console.log('server running @ 9090')
    } catch (error) {
        console.log(error.message)
    }
})