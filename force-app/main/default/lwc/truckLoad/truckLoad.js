import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class load extends LightningElement {

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
}
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success!',
            message: 'The record has been successfully updated..!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}