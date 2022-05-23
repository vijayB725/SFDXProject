import { api, LightningElement, wire } from 'lwc';
import {getFieldValue, getRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class GetRecordApiExample extends LightningElement {

    @api recordId;

    accountObject = ACCOUNT_OBJECT;

    @wire(getRecord, {recordId: '$recordId', fields: [NAME_FIELD]})
    record;
 
    get nameValue() {
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD): ' ';
    }

}