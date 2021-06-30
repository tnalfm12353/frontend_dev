/**
 * 5. Arrow Function
 */


const power = function(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number){
    process.stdout.write(`${number} : ${power(number)}\t`);
});

console.log("\n-------");

// ex1

const power2 = x => x * x;


// ex2
numbers.forEach(function(number){
    // let result = (function(x){
    //     return x*x;
    // })(number);

    // let result = (x =>{
    //     return x*x;
    // })(number)

    // let result = (x => x*x)(number);
    // process.stdout.write(`${number} : ${result}\t`);

    process.stdout.write(`${number} : ${power2(number)}\t`);
    // process.stdout.write(`${number} : ${(x => x*x)(number)}\t`);

});

// ex3
console.log("\n-------");
numbers.forEach(number =>  process.stdout.write(`${number} : ${(x => x*x)(number)}\t`));

// ex4 - 여러행 함수
[5,3,31,212,1312,3].forEach(e =>{
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

// ex5: this를 어휘적 바인딩(Lexical Binding)
const dooly = {
    name: "둘리",
    friends : ["또치", "마이콜", "도우너", "길동" , "희동이"],
    printFriends : function() {
        this.friends.forEach((friend) => {
            console.log(`${this.name}의 친구 ${friend}`);
        });
    }
}

dooly.printFriends();