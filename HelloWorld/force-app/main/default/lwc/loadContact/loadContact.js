import { LightningElement, api, wire, track } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Contact.Name', 'Contact.Phone'];

export default class LoadContact extends LightningElement {

    @api recordId;
    @track contact;
    @track name;
    @track phone;
    
    @wire( getRecord, { recordId: '$recordId', fields: FIELDS, modes: ['view']})
    wiredRecord(error, data){
        if(data) {
            
            this.contact = data;
             /* eslint-disable no-console */
            console.log('Contact Information:'+this.contact);
        }
        else if(error){
             /* eslint-disable no-console */
            console.log("error:"+error);
        }

    }

}