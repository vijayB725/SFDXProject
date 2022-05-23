({
    getNumbers : function(component, event, helper) {
        var numbers = [];
        var name = component.get("v.Name");
        console.log("Name:"+ name);
        for(var i= 0; i<10 ; i++){
            numbers.push({
                value :i
            });
        }
        component.set("v.numbers", numbers);
    },

    getMap : function(component, event, helper) {
        var numbers = [];
        var name = component.get("v.Name");
        console.log("Name:"+ name);
        for(var i= 0; i<10 ; i++){
            numbers.push({
                value :i
            });
        }
        component.set("v.numbers", numbers);
    }, 


})
