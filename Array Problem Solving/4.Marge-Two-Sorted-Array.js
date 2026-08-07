
const ar = [1,3,5,6]
const ar1 = [2,4,7,8]
const margeArr = [ar.length+ar1.length]

let i=0,j=0,k=0;
while (i < ar.length || j< ar1.length)
{
    if (ar[i] < ar1[j])
    {
        margeArr[k]= ar[i]
        i++; k++;
    }
    if (!ar[i] < ar1[j]) 
    {
        margeArr[k] = ar1[j]
        j++, k++;
    }
}

console.log(margeArr);