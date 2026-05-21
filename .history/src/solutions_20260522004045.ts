// Problem-1
function filterEvenNumbers(num: number[]){
    const evenNumber = num.filter((n)=>{
        if(n % 2 === 0){
            return n ;
        }
    })
    return evenNumber;
}
filterEvenNumbers([1,2,3,4,5,6]);
// console.log(filterEvenNumbers([1,2,3,4,5,6]))

// Problem-2
const reverseString = (word: string) => {
    const convertArray = [...word]
    const reverseArray = convertArray.reverse();
    const reverseWord = reverseArray.join("");
    return reverseWord ;
}

reverseString("typescript");
// console.log(reverseString("typescript"))

// Problem - 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
    return typeof value === "string"
        ? "String"
        : "Number";
}

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem-4
const getProperty = <T>(obj: T,key:keyof T) => {
    return obj[key];
}
const property = { id: 1, propertyName: "Land ", place: "Uttara" };
// console.log(getProperty(property ,"propertyName"));



// Problem-5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
const toggleReadStatus =(book:Book)=> {
    return{
        ...book,
        isRead: true
    }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
// console.log(toggleReadStatus(myBook));


// Problem-6
class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age =age;
    }

}

class Student extends Person{
    grade: string;

    constructor(name: string, age:number,grade:string){
        super(name,age);
        this.grade = grade;
    }

    getDetails(){
        // console.log(`"Name:${this.name}, Age: ${this.age}, Grade: ${this.grade}"`);
        return `"Name:${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem-7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(value => arr2.includes(value));
};

// console.log(getIntersection([1,2,3,4,5,6], [3,4,5,6]));




