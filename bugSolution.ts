function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

user.forEach(person => {
    console.log(greeter(person));
});
//OR

function greeterArray(person: string[]): string[] {
    return person.map(person => "Hello, " + person);
}
console.log(greeterArray(user));