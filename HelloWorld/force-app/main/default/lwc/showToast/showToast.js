import { LightningElement } from 'lwc'
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import {showToast, showAlert} from 'c/utilJs';

export default class ShowToast extends LightningElement {

    showToast() {
        this.dispatchEvent(
            showToast('success', 'dismissable', 'Success!', 'this is exported module')
        );
    } 
}