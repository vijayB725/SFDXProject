import { LightningElement } from 'lwc';

export default class Peginator extends LightningElement {

    handleNext(){
        const nextEvent = new CustomEvent('next', {detail: 'this is from Peginator:handleNext'});
        this.dispatchEvent(nextEvent); 
        console.log("next event dispatched");
    }

    handlePrevious(){
        const preEvent = new CustomEvent('previous');
        this.dispatchEvent(preEvent); 
        console.log("previous event dispatched");
    }
}