class Car { // in this code we are creating a simple class in JavaScript what is just a template for objects that later we are gonna create using the constructor method 
    //The constructor method is a special method for creating and initializing an object created with a class. 
    // and also we can add fuctionalitiy to those objects that we are gonna create by using the class as we can see in the examples under
    constructor(model, brand, topSpeed){
        this.model = model
        this.brand = brand
        this.topSpeed = topSpeed
    }

    getType() {
     return 'Coupe'
    }

    recomendation() {
     console.log( `${this.brand} is a really good brand to be honest`)
    }
    
}

const CarObject = new Car(2011, "Ferrari", "230km/h")
const CarObject1 = new Car(2013, "Fiat", "100km/h")

/*console.log(CarObject);
console.log(CarObject.getType());
console.log(CarObject.brand);
console.log(CarObject1);
console.log(CarObject1.getType());
console.log(CarObject1.brand);*/

CarObject.recomendation();



