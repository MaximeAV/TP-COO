import express from 'express'
import http from 'http'

export default class Server {
  
    private app = express();
    private port: number;

    constructor(app = express(), port:number) {        
        this.app = app;
        this.port = port;
    }

    private _normalizePort(value: any): number {
        let number;
        const port = parseInt(value, 10)
      
        if (isNaN(port)) {
          number = value
        }      
        if (port >= 0) {
          number = port
        } 

        return number
      }
      
    private _onError(error: any): never {
        if (error.syscall !== 'listen') {
          throw error
        }
      
        switch (error.code) {
          case 'EACCES':
            console.error(`${this.port} requires elevated privileges`)
            process.exit(1)
          case 'EADDRINUSE':
            console.error(`${this.port} is already in use`)
            process.exit(1)
          default:
            throw error
        }
      }
      
    private _onListening(): void {
        console.log(`Listening on ${this.port}`)
      } 
    
    public start(): void{
        this.port = this._normalizePort(process.env.PORT || this.port);
        const server = http.createServer(this.app)
        server.listen(this.port)
        server.on('error', error => this._onError(error))
        server.on('listening', () => this._onListening()) 
    }
}
