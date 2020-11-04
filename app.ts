import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import storage from 'node-persist'

import indexRouter from './routes/index'
import ordersRouter from './routes/orders'

import { orders } from './data/_orders'

export default class App {
  
  private app = express();

  constructor(port: number) {
    this.app = express()
    this.app.set('port',port);
    this._registerRoutes();
    this._registerMiddleware();
    this._initDefaultData();
  }

  private _registerRoutes(){
    this.app.use('/', indexRouter)
    this.app.use('/orders', ordersRouter)
  }

  private _registerMiddleware(){
    this.app.use(logger('dev'))
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.static(path.join(__dirname, 'public')))
  }

  private _initDefaultData(){
    // Init default data
    storage.init().then(() => {
      storage.setItem('orders', orders)
    })
  }

  public getApp(){
    return this.app;
  }
}