import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class truckBooking extends LightningElement {

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
}
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleButton(event){
        window.open('https://d5j000008xe5eeaq-dev-ed.lightning.force.com/lightning/n/TruckPage');
    }

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success!',
            message: 'The record has been successfully Created..!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    
}