import { LightningElement, track } from 'lwc';

export default class SimpleEvent extends LightningElement {

    @track page = 1;

    handleNx(){
        this.page = this.page + 1;
        console.log("HandleNx", this.page);
    }

    handlePre(){
        if(this.page > 1){
            this.page = this.page -1;
            console.log("HandlePre", this.page);
        }
    }
}