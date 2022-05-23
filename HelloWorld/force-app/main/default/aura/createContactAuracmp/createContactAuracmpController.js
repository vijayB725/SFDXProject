({
    saveContact : function(component, event, helper) {
        
        var inputEmail = component.find('inputEmail').get("v.value");
        console.log("email:"+inputEmail);
        console.log(component.find('inputEmail').get("v.validity").valid);
    
        var contact1 = component.get("v.newContact.FirstName");
        console.log(contact1);

        var saveContactAction = component.get("c.saveCon");
        saveContactAction.setParams({
            "contact" : component.get("v.newContact")
        });

        saveContactAction.setCallback(this, function(response) {
                var state = response.getState();
                if(state === "SUCCESS"){
                    component.set("v.message", "contact created successfully");
                }
                else if(state === "ERROR"){
                    component.set("v.message", "Error received while saving contact");
                    console.log("Error while saving contact"+ state);
                }
        });

        $A.enqueueAction(saveContactAction);
    }

})
