const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const path = require('path')

const PORT = process.env.port || 3001
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
  res.send('Server Online')
})

app.listen(PORT, () => {
  console.log(`🌎 => API Server now listening on PORT ${PORT}!`)
})
