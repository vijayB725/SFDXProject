import { LightningElement, api } from 'lwc';

export default class ContactName extends LightningElement {

    @api contact1;

    handleSelect(event){
   //    alert("button Clicked");
      //  event.preventDefault();
        /* eslint-disable no-console */
        console.log("button clicked");
    //    console.log(contact1.Id);
        const selectEve = CustomEvent(
             'select', 
             {
                 detail: this.contact1.Id
             }
         );
         this.dispatchEvent(selectEve);
         /* eslint-disable no-console */
         console.log(this.contact1.Id);
         console.log("ContactName --> selectEvent dispatched");  
        
    }

    handleClick(){
        alert("button clicked");
    }
}