import { BillingItem } from './billingitem';

export class BillingItemCreator {
    constructor() {

    }

    createDefault(): BillingItem {
        const myDate = new Date();
        return new BillingItem({
            date: new Date(),
            task: 'Training',
            client: '',
            comment: '',
            units: 0,
            fee: 19,
            sum: 0,
            duration: 0,
            bill: 0,
        });
    }

}
