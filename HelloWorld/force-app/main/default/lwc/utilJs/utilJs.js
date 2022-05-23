import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// create ES6 module
const showToast = (variant='info', mode='dismissable', title, message) => {
    
        const event = new ShowToastEvent({
            title: title,
            message: message, 
            mode: mode, 
            variant: variant
                
        });

        return event;

    }

    const showAlert = () => {
        /* eslint-disable */ 
        alert("I am inside another module");
    }
    
// export module
    export {showToast, showAlert};
