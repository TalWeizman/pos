import{ Cart } from "./Cart";
import{ Item } from "./Item";
import { FirebaseListObservable} from 'angularfire2/database';

export interface Sale{

    items : FirebaseListObservable<Item>;
    cart : Cart;
}

