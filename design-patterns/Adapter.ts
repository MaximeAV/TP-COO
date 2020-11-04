import {Contact} from '../types';

export default class Adapter implements Contact{
    public fullname: string;
    public email: string;
    public phone: string;
    public address: string;
    public postalCode: string;
    public city: string;

    constructor(){
        this.fullname = "Nom Prénom"
        this.email = 'email@messagerie.com'
        this.phone = '061122334455'
        this.address = 'n° rue '
        this.postalCode= 'code postal'
        this.city = 'cherbourg' // Etant la meilleure ville de France 
    }
}