import { LightningElement, track, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import USER_NAME from '@salesforce/schema/User.Name';

export default class Selector extends LightningElement {
    selectedProductId;

    @track error;
    @track name;

    @wire( getRecord, {recordId: USER_ID, fields: [USER_NAME ]}) wireUser({
        error, 
        data
    }) {
        if(error){
            this.error = error;
        }
        else if(data){
            this.name = data.fields.Name.value;
            console.log("data:"+JSON.stringify(data));
        }
    }

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}
