({
    getInputText : function(component, event, helper) {
        var searchTerm = component.find('searchBox').getElement().value;
        console.log("searchTerm:"+searchTerm);
        component.set("v.searchTerm",searchTerm);
    }
})
