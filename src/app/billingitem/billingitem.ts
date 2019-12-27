export class BillingItem {
    date: Date;
    task: string;       // Tätigkeit
    client: string;     // Klient
    comment: string;    // Bemerkung
    units: number;      // training units a 45 min
    fee: number;        // Honorar / Stundensatz
    sum: number;        // Gesamt Summe Honorar
    duration: Date;
    bill: number;
    _id: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
