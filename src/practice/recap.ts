// variabel 

let Name: string = "Rumi Parvez";
let RollNo: Number = 1034;
let isSSCPassed: boolean = true;
let Collage: unknown = "";
let SuperPower: null = null;


// Array 

let ClassRoll: number[] = [4,2,26,5,6,7,8,9,12];
let StudentsName: string[] = ["rumi", "shumi" , 'bomi'];
let isPassedSSC: boolean[] = [true, false , true];

// Union

// (string | number | null | boolean | unknown  | undefined)



// Array + Union 

let StudentDetasil: (string | number | boolean)[] = ['rumi', true , 56754];



// Objects 

let CEO: {
    Name : string,
    Age : number,
    Mobile : number,
    Email : string,
    isMarridge? : boolean,
} = {
    Name: "Rumi pavrez",
    Age : 17,
    Mobile : 8801407794143 ,
    Email : "xyz@admin.com",
    isMarridge : false,

}




type Employers = {
    Name : string,
    Age : number,
    Mobile : number,
    Email? : string,
    isMarridge? : boolean,
};


let EM1 : Employers = {
    Name: "Rumi pavrez",
    Age : 17,
    Mobile : 8801407794143 ,
    Email : "xyz@admin.com",
    isMarridge : false,
}

let EM2 : Employers = {
    Name: "Hasina",
    Age : 56,
    Mobile : 8801407794143 ,
    isMarridge : false,
}

let EM3 : Employers = {
    Name: "khaleda",
    Age : 6541,
    Mobile : 8801407794143 ,
    Email : "xyz@admin.com",
}


// console.log(EM1);
// console.log(EM2);
// console.log(EM3);



// Function 

const add = (number1 : number , number2: number):string =>{
    let AddNumber = number1+number1;
    if(AddNumber > number1 && AddNumber > number2  ){
        return "it's larjest Number"
    }
    return ` ${number1} `
}

console.log(add(45,0));