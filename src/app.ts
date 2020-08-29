import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

export default class App {
  public express: express.Application

  constructor () {
    this.express = express()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    // mongoose.connect('mongodb://localhost')
  }
}
