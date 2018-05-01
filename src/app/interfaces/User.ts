import{ Permission } from "./Permission";

export interface User{

    name: string; 
    phone : string;
    id_number : string;
    h_password:string;
    permission: string;
    is_active:boolean;

}

