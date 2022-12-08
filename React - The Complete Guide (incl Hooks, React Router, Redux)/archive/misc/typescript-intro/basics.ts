let age: number

age = 12

let userName: string | string[]

userName = 'Max'

let isInstructor: boolean

isInstructor: true

let hobbies: string[]

hobbies = ['Sports', 'Cooking']

type Person = {
    name: String;
    age: number;
}

let person: Person

person = {
    name: 'Max',
    age: 32
}

let people: Person[];

let course: string|number = 'React - The Complete Guide'

course = 12341

// Function & Types

function add(a: number, b: number) {
    return a + b
}

function print(value: any) {
    console.log(value)
}