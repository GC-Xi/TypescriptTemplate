function displayTotalPerPerson(person: string, total: number) {
    const message: string = "Total for " + person + " is " + total;
    document.getElementById("totalMessage").innerText = message;
}

function test() {
    const map: { [key: string]: number } = {"one": 1, "two": 2};
    const message: string = Object.keys(map).length.toString();
    document.getElementById("totalMessage").innerText = message;
}