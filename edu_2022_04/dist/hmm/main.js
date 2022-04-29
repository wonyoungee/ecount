export class Test {
    async test() {
        await this.print();
    }
    async print() { }
}
console.log(Test);
function getAgeText(age) {
    if (typeof age === "number") {
        return age.toFixed(2);
    }
    else {
        return age.trim();
    }
}
function toString(value) {
    if ("age" in value) {
        return `${value.name} ${value.age}세`;
    }
    else {
        return `${value.name} ${value.price}원`;
    }
}
toString({ age: 123, name: "2222" });
//# sourceMappingURL=main.js.map