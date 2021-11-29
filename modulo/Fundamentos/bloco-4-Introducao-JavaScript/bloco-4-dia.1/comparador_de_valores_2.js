const a = 20;
const b = 30;
const c = 40

if (a > b && a > c) {
    console.log(a,"é maior que ", b," e", c);
} 
else if (c > a && c > b) {
    console.log(c, "é maior que ", a," e", b);
} else {
    console.log(b, "é maior que ", a," e", c);
}