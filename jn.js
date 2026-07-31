let ar = [5,5,7,7,9,10,10]

let index = 0;

for (let i=0; i<ar.length; i++)
{
    if (ar[i] !== ar[i+1])
    {
        ar[index] = ar[i]
        index++;
    }
}
ar.length =index


// now i can solve with set data structure
const sortedArr = [... new Set(ar)]
console.log(sortedArr);


