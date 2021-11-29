class Vehicle {
    setDetails(type,company,mileage){
        this.type=type;
        this.company=company;
        this.mileage=mileage;
    }
    getDetails(){
        console.log(`Type: ${this.type},Company: ${this.company},Mileage: ${this.mileage}`)
    }
}

let v1 = new Vehicle();
v1.setDetails("tw","Hero",60)
v1.getDetails();