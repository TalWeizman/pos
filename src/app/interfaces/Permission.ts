import { FirebaseListObservable} from 'angularfire2/database';

export interface Permission{

    name : string;
    permissions : {

        bo: boolean;
        bo_dash : boolean;
        bo_users : boolean;
        bo_items : boolean;
        bo_categories : boolean;
        bo_reports : boolean;
        bo_permissions : boolean;
        bo_invantory : boolean;
        bo_sales : boolean;
        bo_castumers : boolean;
        
        settings : boolean;
        close_day : boolean;
        start_cash : boolean;
        x_report : boolean;
        invoice_search : boolean;

        pos: boolean;
        pos_disscount: boolean;
        pos_open_cash : boolean;
        pos_refound : boolean;
        pos_general_cash : boolean;
        pos_castumer_add : boolean;
        pos_cash_pay : boolean;
        pos_credit_pay : boolean;
        pos_over_pay : boolean;

    };

}
