function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This will cause an error because the function expects a string not an array