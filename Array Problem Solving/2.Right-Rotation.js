/**
 * QN: Right Rotation by one step 
 * ar = [1,2,3,4,5]
 * output -> 5,1,2,3,4
 */

let ar =[1,2,3,4,5]
let temp = ar[ar.length-1]

for (let i=ar.length-1; i>=0; i--)
{
    ar[i] = ar[i-1]
}
ar[0] = temp
console.log(ar);

/*
    Approach are same as left rotation 
*/
