import { Router, Request, Response } from 'express'
import storage from 'node-persist'
import Controller from '../controller/Controller'

const router = Router()
const controller = new Controller();

router.get('/', async (req: Request, res: Response) => {
  controller.GetOrdersList(req,res);
})

router.get('/:id', async (req: Request, res: Response) => {
  controller.GetAnOrderById(req,res);
})

router.post('/', async (req: Request, res: Response) => {
  controller.PostOrders(req,res);
})

export default router