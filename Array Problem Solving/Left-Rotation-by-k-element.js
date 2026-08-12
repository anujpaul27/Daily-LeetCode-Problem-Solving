const prompt = require('prompt-sync')();

let ar = [1,2,3,4,5,6]
let k = prompt('Enter k: ');

for (let i=0; i<k; i++)
{
    let temp = ar[0]
    for (let j=0; j<ar.length-1; j++)
    {
        ar[j] = ar[j+1]
    }
    ar[ar.length-1] = temp 
}

console.log(ar);
// now code is that now i will fix it 
