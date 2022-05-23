import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class PageReference extends NavigationMixin(LightningElement) {

    navigateTostandard__objectPage(){
        //alert("in navigateTostandard__objectPage");
        let pageRefer = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'home'
            }, 
            state: {
                filterName : 'Recent'
            } 
        };
        this[NavigationMixin.Navigate](pageRefer, true);
        
    }

    navigateTostandard__CreatePage(){
        let pageRefer = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'New'
            } 
             
        };
        this[NavigationMixin.Navigate](pageRefer);
    }

    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
           recordId: '0016F00002raW02QAE',
           objectApiName: 'Account',
           actionName: 'View'
            }
        });
        
    }

}