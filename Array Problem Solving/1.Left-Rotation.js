/**
 * QN: Array Left Rotation by one step 
 * What is array left rotation 
 * arr = [1,2,3,4,5]
 * output -> 2,3,4,5,1
 */

let ar= [1,2,3,4,5]
const temp = ar[0]
for (let i=0; i<ar.length-1; i++)
{
    ar[i] = ar[i+1]
}
ar[ar.length-1] = temp;

console.log(ar);


/*
Approach is that-> 
1,2,3,4,5
2,2,3,4,5
2,3,3,4,5
2,3,4,4,5
2,3,4,5,5
2,3,4,5,1

*/
