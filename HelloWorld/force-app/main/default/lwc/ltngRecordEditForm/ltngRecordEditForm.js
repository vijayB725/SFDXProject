import { api, LightningElement } from 'lwc';

import OBJECT_NAME from '@salesforce/schema/Contact';

import ACCOUNT_NAME from '@salesforce/schema/Account'; 
import INDUSTRY from '@salesforce/schema/Account.Industry';
import PHONE_NUMBER from '@salesforce/schema/Account.Phone';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class LtngRecordEditForm extends LightningElement {

    @api recordId;
    ObjectName = OBJECT_NAME;
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    }

   // fields = [ACCOUNT_NAME, INDUSTRY, PHONE_NUMBER, REVENUE];
}