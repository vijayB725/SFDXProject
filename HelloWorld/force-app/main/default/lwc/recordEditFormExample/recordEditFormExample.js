import { api, LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class RecordEditFormExample extends LightningElement {

    @api recordId;
    nameField = ACCOUNT_NAME;
}