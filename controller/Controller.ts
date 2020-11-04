
import { Router, Request, Response } from 'express'
import Order from '../types'
import Storage from '../model/Storage'
import Adapter from '../design-patterns/Adapter'

export default class Controller {
   private storage : Storage;

    constructor() {
         this.storage = new Storage("orders");
    }

    public helloWorld(req: Request, res: Response):void{
        res.send('Hello World !')
    }

    public GetFavicon(req: Request, res: Response):void{
        res.status(204)
    }

    public async GetOrdersList(req: Request, res: Response):Promise<void>{
        const orders:Order[] = await this.storage.getItems();
        res.json(orders)
    }

    public async GetAnOrderById(req: Request, res: Response):Promise<void>{
        const id = req.params.id

        const orders = await this.storage.getItems()
        const result = orders.find((order: any) => order.id === parseInt(id, 10))
      
        if (!result) {
          res.sendStatus(404)
        }
      
        res.json(result)
    }

    public async PostOrders(req: Request, res: Response):Promise<void>{
        const payload = req.body

        const orders = await this.storage.getItems()
        const alreadyExists = orders.find((order: any) => order.id === payload.id)
      
        if (alreadyExists) {
          res.sendStatus(409)
        }
      
        orders.push(payload)
      
        await this.storage.setItems(orders)
      
        res.sendStatus(201)
    }
}