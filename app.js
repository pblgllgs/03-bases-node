const fs = require('fs');
console.clear();
console.log('==========================');
console.log('      Tabla del 5');
console.log('==========================');
const base = 10;
let salida = '';

for (let i = 1; i < 11; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`archivo tabla-${base}.txt creado`);
