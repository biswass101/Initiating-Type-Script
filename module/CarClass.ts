export class Car {
    brandName: string;
    model: string;
    seats: number;
    
    constructor(brandName: string, model: string, seats: number) {
        this.brandName = brandName;
        this.model = model;
        this.seats = seats;
    }

    showInfo(): string {
        return `name: ${this.brandName}, model: ${this.model}, seats: ${this.seats}`
    }
}
