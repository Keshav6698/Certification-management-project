import { LightningElement, wire, track, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getTruckList from '@salesforce/apex/truckList.search';

const table_columns = [{
    label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'View'
        }},
                        {label:'Name', fieldName:'Name', type:'text'},
                      
                        {label:'Maximum Load(In Kgs)', fieldName:'Maximum_Load__c', type:'number'},
                        {label:'Cost / K.M. (in INR)', fieldName:'Cost__c', type:'number'},];
                        

export default class truckList extends LightningElement {
   @api recordId;
    @track error;
    @track columns = table_columns;
    @track record = {};
    @track data = {};
    @track bShowModal = false;
    @track show = false;
    @wire(getTruckList) trucks;

    //Handling errors
    wiredTrucks({ error, data }) {
        if (data) {
            this.trucks = data;
            this.error = undefined;
            console.log(this.trucks);
        } else if (error) {
            this.error = error;
            this.trucks = undefined;
        }
    }

    //selection of particular row 
    callRowaction(event){
            var count=0;
            const row = event.detail.row;
            this.record = row;
            this.bShowModal = true;
           
    }

    //function of NEXT BUTTON
    handleSelect(){
        this.show = true;
    }
    
    //Function of PREVIOUS BUTTON
    navigatePrevious(event){
        this.show = false;
        this.bShowModal = false;
    }
//Function of Add Truck BUTTON
handleClick(event){
    window.open('https://d5j000008xe5eeaq-dev-ed.lightning.force.com/lightning/n/BookingUI');
}

 //Function of Add Approximate Load BUTTON
 
handleReset(event) {
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
 }
 

 //confirmation through toast
 showSuccessToast() {
    const evt = new ShowToastEvent({
        title: 'Success!',
        message: 'The record has been updated successfully.',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}
}