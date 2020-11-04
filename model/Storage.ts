import storage from 'node-persist'
import Order from '../types'
import { orders } from '../data/_orders';

export default class Storage {
    private type: string;
    
     constructor(type:string) {
        this.type = type
        storage.init().then(() => {
            storage.setItem(this.type,orders)
          })
        
    } 
    
    public async getItems():Promise<any>{
        storage.getItem(this.type);
    }

    public async setItems(s :string):Promise<any>{
        await storage.setItem(this.type,s);
    }

}
