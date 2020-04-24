import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'restartando' })
})

app.listen(3333, () => {
  console.log('all right')
})
