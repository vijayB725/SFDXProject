import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/AccountListWebController.getContactList';

const DELAY = 300;

export default class AccountListWeb extends LightningElement {

    
    searchKey ="";
    @wire(getContactList, {name: '$searchKey'}) contacts;
    //Data and error     
   // @track accounts;
    
  //  @track accSelected;

    @track selectedAccount="";
    

    handleChange(event){
         //   event.preventDefault();
            /*eslint-disable no-console*/
           
       //     this.searchKey = event.target.value;
       window.clearTimeout(this.delayTimeout);
       const searchKey = event.target.value;
       this.delayTimeout = setTimeout(() => {
           this.searchKey = searchKey;
           console.log(this.contacts);
           console.log(this.searchKey);
       }, DELAY);
    }

    handleSelectRec(event){
        const recId = event.detail;
        /* eslint-disable no-console */
      //  console.log("AccountListWeb --> handleSelectRec:", recId);
        
     //   this.selectedContact = this.contacts.find( con => con.Id === recId);
     //   this.accSelected = acc;
     //   console.log("selected account:", this.accounts.find( account => {account.Id == recId}));
       
    }
}