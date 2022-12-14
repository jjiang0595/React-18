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

// Generic Types

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'e')

// updatedArray[0].split('')