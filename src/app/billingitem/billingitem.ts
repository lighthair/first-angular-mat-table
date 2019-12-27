export class BillingItem {
    date: string;
    task: string;       // Tätigkeit
    client: string;     // Klient
    comment: string;    // Bemerkung
    units: number;      // training units a 45 min
    fee: number;        // Honorar / Stundensatz
    sum: number;        // Gesamt Summe Honorar
    duration: Date;
    bill: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
