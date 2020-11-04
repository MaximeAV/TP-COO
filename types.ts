export default interface Order {
    id: number
    packages: Package[]
    delivery: Delivery
}

interface Package {
    length: Size
    width: Size
    height: Size
    weight: Size
    products: Product[]
}

interface Size {
    unit: string
    value: number
}

interface Product {
    name: string
    price: Money
}

interface Money {
    currency: string
    value: number
}

interface Delivery {
    storePickingInterval: Interval
    deliveryInterval: Interval
    contact: Contact
    carrier: Carrier
}

interface Interval {
    start: string
    end: string
}

export interface Contact {
    fullname: string
    email: string
    phone: string
    address: string
    postalCode: string
    city: string
}

interface Carrier {
    name: string
}


