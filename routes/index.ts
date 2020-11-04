import { Router, Request, Response } from 'express'
import Controller from '../controller/Controller'

const router = Router()
const controller = new Controller();

router.get('/', async (req: Request, res: Response) => {
  controller.helloWorld(req,res)
  })
  
  router.get('/favicon.ico', (req: Request, res: Response) => controller.GetFavicon(req,res ))
  
  export default router