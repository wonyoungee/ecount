export class Test {
    async test(){
        await this.print();
    }
    async print(){}
}
console.log(Test);

function getAgeText(age: number | string) {
    if (typeof age === "number") {
      return age.toFixed(2);
    } else {
      return age.trim();
    }
  }

  interface Person {
    name: string;
    age: number;
  }
  interface Product {
    name: string;
    price: number;
  }
  function toString(value: Person | Product) {
    if ("age" in value) {
      return `${value.name} ${value.age}세`;
    } else {
      return `${value.name} ${value.price}원`;
    }
  }

  toString({age:123, name:"2222"})