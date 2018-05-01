import{ CartItem } from "./CartItem";

export interface Cart{

    items : CartItem[];

    total_amount : number;

}