({
	handleClick : function(component, event, helper) {
        var action=component.get("c.getDetails");
      
        action.setCallback(this,function(response){
            var conList=response.getReturnValue()
            
            component.set("v.listCon",conList);
            var listCon=component.get("v.listCon");
              });
        
        $A.enqueueAction(action); 
    },
    
    handleSuccess: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Record updated!",
            "message": "The record "+ event.getParam("id") + " has been updated successfully.",
            "variant": "success"
        });
    },
    handleError: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Something has gone wrong!",
            "message": event.getParam("message"),
            "variant": "error"
        });
    }
})