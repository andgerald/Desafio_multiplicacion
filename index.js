const multiplicacion = (num) => {
  if (num > 0 && num <= 20) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      let multi = num * i;
      for (let j = 1; j > 0; j--) {
        factorial = factorial * i;
      }
      console.log(i, "x", num, "=", multi);
      console.log("el factorial de ", i, "es:", factorial);
    }
  } else console.log("número fuera del rango");
};
multiplicacion(22);
