import { CommonService } from "../../shared/services/common.service";

import { Constants } from "../../../common/app-settings/constants";

let PayeeService = {
    getalllPAyees:()=>{     
        return CommonService.sendRequest({},"/Payee","GET");
    },
    addPayee:(body)=>{
         return CommonService.sendRequest(body,"/Payee","POST");
    }
    };
exports.PayeeService = PayeeService;