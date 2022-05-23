({
    changeFormat : function(component, event, helper) {

        var inputDateTime = component.get("v.inputDateTime");
        var selectedFormat = component.find("select").get("v.value");
         console.log("inputDateTime:" +inputDateTime);
         console.log("selectedFormat:"+selectedFormat);

         var output= $A.localizationService.formatDate(inputDateTime, selectedFormat);
         component.set("v.outputDateTime", output);
    }
})
