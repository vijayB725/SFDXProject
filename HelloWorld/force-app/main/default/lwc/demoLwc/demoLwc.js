import { api, LightningElement, track } from 'lwc';
import myId from '@salesforce/user/Id';
export default class DemoLwc extends LightningElement {

    @api name = "Broody";
    @track title = "Application Manager";
    @track email = "broody@cis.com";
    @track mobile = "4501231345";
    userId = myId;

    handleClick(){
        /* eslint-disable no-console */
        console.log("calling Broody");
        alert("calling Broody");
    }

}