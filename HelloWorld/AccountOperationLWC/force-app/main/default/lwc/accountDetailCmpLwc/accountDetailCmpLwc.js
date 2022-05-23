import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountListController.getAccountList';
import {NavigationMixin} from 'lightning/navigation';


const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' }];

const columns = [{
        label: 'Account name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Industry',
        fieldName: 'Industry',
        type: 'text',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        sortable: true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'url',
        sortable: true
    },
    {
        label: 'Rating',
        fieldName: 'Rating',
        type: 'test',
        sortable: true
    }, 
    {
        type: 'action', 
        typeAttributes: { rowActions: actions } 
    }
];

export default class AccountDetailCmpLwc extends NavigationMixin(LightningElement){

    @track columns = columns;
    @track searchKey;
    @track acounts;
    @wire(getAccountList, { searchKey : '$searchKey' }) 
    accounts({error, data}){
        if (data){
            console.log("data:"+JSON.stringify(data));
            this.acounts = data;
        }
        else
        console.log("error:"+JSON.stringify(error));
    }

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.searchKey = evt.target.value;
            console.log("accounts: "+this.accounts.data);
         console.log("accounts error: "+this.accounts.error);
        }
        
    }

    handleRowAction(event) {
       const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
                this.deleteRow(row);
                break;
            case 'show_details':
                this.showRowDetails(row);
                break;
            default:
        }  
    }

    deleteRow(row){
            console.log("in deleteRow:"+ JSON.stringify(row));
    }

    HandleNewAccount(){
        
    }

    showRowDetails(row){
            console.log("in showRowDetail:"+ JSON.stringify(row));

            
                // View a custom object record.
                this[NavigationMixin.Navigate]({

                    type: 'standard__component', 
                    attributes: {
                        componentName: "c__showAccountDetail" 
                    },
              
               state: { 
                 "c__myAttrib": row.Id 
                 }

/*
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Account', // objectApiName is optional
                        actionName: 'view'
                    } */
                });
            
    }
}