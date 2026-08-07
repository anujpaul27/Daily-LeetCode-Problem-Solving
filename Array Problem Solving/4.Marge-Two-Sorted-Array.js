
const ar = [1,3,5,7,21,24]
const ar1 = [2,4,7,8,9,10,15,20,25]
const margeArr = []

let i=0,j=0;
while (i < ar.length && j< ar1.length)
{
    if (ar[i] <= ar1[j])
    {
        margeArr.push(ar[i])
        i++; 
    }
    if (ar1[j] <= ar[i]) 
    {
        margeArr.push(ar1[j])
        j++;
    }
}

while (i< ar.length)
{
    margeArr.push(ar[i++])
}
while (j< ar1.length)
{
    margeArr.push(ar1[j++])
}

console.log(...margeArr);