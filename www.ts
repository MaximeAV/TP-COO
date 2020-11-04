#!/usr/bin/env node

import app from './app'
import Server from './Server'

const port = 1234
const myApp = new app(port)
const Serveur = new Server(myApp.getApp(), port)

Serveur.start()

