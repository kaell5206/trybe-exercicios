const a = 60;
const b = 40;
const c = 60;

if (c > a && b && a + b > c && a > 0 && b > 0 && c > 0 ) {
    console.log(true);
}   else if (c > a && b && a + b < c && a > 0 && b > 0 && c > 0) {
    console.log(false);
} else if (a<0 || b<0 || c<0) {
    console.log("Erro.");
}
