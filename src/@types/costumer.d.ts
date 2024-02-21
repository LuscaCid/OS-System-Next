type Address = {
    CEP : string
    street : string
    neighborhood : string
    city : string
    complement? : string
}

export interface CostumerData {
    name : string
    phone : string
    address : Address
    email? : string

}


export type InputNames = "tag" | "description" | "price" | 'device' 
