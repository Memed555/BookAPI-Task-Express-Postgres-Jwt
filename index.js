const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const bookRoutes = require('./src/routes/booksroutes')
const userRotes = require('./src/routes/userRoutes')
const authRoutes = require('./src/routes/authroutes')

const authMiddleware = require('./src/middlewares/auth-middleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());

const port = process.env.PORT || 3000

app.use('/books', bookRoutes)
app.use('/users', userRotes)
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`Project listening on port : ${port}`)
})

