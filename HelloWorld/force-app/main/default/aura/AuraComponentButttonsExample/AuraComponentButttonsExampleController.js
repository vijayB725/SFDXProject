({
    performSave : function(component, event, helper) {
        console.log("save button is clicked");
        console.log("name:"+component.get("v.NameField"));
        console.log("name:"+component.find("inputName").value);
    }
})
