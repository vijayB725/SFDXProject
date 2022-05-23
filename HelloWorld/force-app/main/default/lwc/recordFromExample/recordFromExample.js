import { LightningElement, api } from 'lwc';


export default class RecordFromExample extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['AccountId', 'Name', 'Type', 'Phone', 'Billing Address'];

    
}