
const ar = [1,3,5,6]
const ar1 = [2,4,7,8]
const margeArr = [ar.length+ar1.length]

let i=0,j=0;
while (i < ar.length && j< ar1.length)
{
    if (ar[i] < ar1[j])
    {
        margeArr[i]= ar[i]
        i++;
    }
    else 
    {
        margeArr[i] = ar1[j]
        j++
    }
}

console.log(margeArr);