class user {
    name:string
    age:number
    
    constructor(name:string , age:number){
        this.name = name
        this.age = age
    }
    
}
const student = new user ("rumi" , 89 )
console.log(student);