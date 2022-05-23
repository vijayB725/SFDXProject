import { LightningElement, wire, track } from 'lwc';
import { getPicklistValues} from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class GetPicklistExample extends LightningElement {

    @track pickListValues;
    @track error;
    @wire(getPicklistValues, 
            {recordTypeId: '012000000000000AAA',
             fieldApiName: INDUSTRY_FIELD})

        wiredPickListValue({data, error}){

            if(data){
                console.log("picklist values:", data.values);
                this.GetPicklistExample = data.values;
            }
            if(error){
                console.log(`error: ${error}`);
            }
        }
}