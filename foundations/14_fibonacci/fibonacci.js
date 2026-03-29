function fibonacci(n) {
    if (n <0){
        return "OOPS";
    }
    else if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else if (typeof n === "string") {
        return fibonacci(Number(n));
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
   



fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
