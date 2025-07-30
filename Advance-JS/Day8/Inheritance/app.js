// class Vehicle {
//     constructor(m,c,f,b)
//     {
//         this.mode = m
//         this.color = c
//         this.fuel =f
//         this.brand = b
//     }
// }


// class Car extends Vehicle{
//     constructor(t,d,bt,m,c,f,b)
//     {
//         super(m,c,f,b)
//         this.tyres = t
//         this.doors = d
//         this.blutooth = bt
//     }
// }




// let car1 = new Car(4,4,true,"Land","White", "CNG", "Hyundai")
// {
//     console.log(car1);
    
// }



// class Aeroplan extends Vehicle{
//     constructor(isCom,isLar,hah,m,c,f,b)
//     {
//         super(m,c,f,b)
//         this.isComercial = isCom
//         this.isLarge = isLar
//         this.haveAirHostess = hah
//     }
// }




// let ap1 = new Aeroplan ( true, true, true, "Air", "White", "Jet")
// console.log(ap1);

// class Boat extends Vehicle{
//     constructor(isCar, eng, sp, m, c,f,b)
//     {
//         super (m,c,f,b)
//         this.isCargo = isCar
//         this.engine = eng
//         this.havSwimmingPool = sp
//     }
// }


// let b1 = new Boat(true, true ,true, "water", "Gray" , "Diesel")
// console.log(b1);




// console.log(Number.prototype);


// class Vehical{
//     constructor(m,c, f,b)
//     {
//         this.mode = m
//         this.color = c
//         this.feul = f
//         this.brand = b
//     }
// }

// let obj1 = new Vehical("Land" , "red", "petrol" ,"BMW")
// console.log(obj1);


// class Car extends Vehical {
//     constructor(t, d, bt,m,c,f,b)
//     { 
//         super(m,c,f,b)
//        this.tyres = t
//        this.door = d
//        this.bluetooth = bt
//     }
// }

// let car1 = new Car(4, true, true, "Land", "red", "fuel", "brand")
// console.log(car1);


// class Aeroplan extends Vehical{
//     constructor( isCom , isLar, hah , m,c,f, b) 
//     {
//         super(  m,c,f, b )
//         this.comirrcial = isCom
//         this.lsrge = isLar
//         this.haveAirHostess = hah
//     }
// }

// let aer1 = new Aeroplan(true, true, true, "Air", "white", "jet","AirIndia"  )
// console.log(aer1);


// class Boat extends Vehical{
//     constructor(isCar, eng , sp, m , c, f, b )
//     {
//         super( m , c, f, b)
//         this.isCargo  =  isCar
//         this.engine = eng
//         this.haveSwimingPool = sp
//     }
// }

// let boat1 = new Boat(true , true, true , "water" , "white" , "Diesil" , )
// console.log(boat1);



// class KuchBhi{
//     #store = 97
//     static store2 = 199
//     constructor()
//     {

//     }

//     tellStore()
//     {
//         console.log(this.#store);
        
//     }
    
//     tellStore2()
//     {
//         console.log(KuchBhi.store2);
        
//     }

// }

// let kb = new KuchBhi()
// console.log(kb);

// kb.tellStore()
// kb.tellStore2()
