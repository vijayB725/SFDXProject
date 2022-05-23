import { LightningElement, track, wire } from 'lwc';
import NAME_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';

export default class MyFirstLwc extends LightningElement {
    @track greeting = 'World';
    @track name = NAME_Field;
    @track objName = sObjectName;
 

    contacts = [
        {Id: '000458467', Name: 'Nick', Title: 'Application Manager'},
        {Id: '0004582367', Name: 'Carie', Title: 'Release Manager'},
        {Id: '00045898007', Name: 'Saul', Title: 'Test Manager'}
    ];


    changeHandler(event) {
      this.greeting = event.target.value;
    }
}