let val1 = Math.floor(Math.random()*1000);
let val2 = Math.floor(Math.random()*1000);
let val3 = Math.floor(Math.random()*1000);
let val4 = Math.floor(Math.random()*1000);
let val5 = Math.floor(Math.random()*1000);
let val6 = Math.floor(Math.random()*1000);
let val7 = Math.floor(Math.random()*1000);
let val8 = Math.floor(Math.random()*1000);
let val9 = Math.floor(Math.random()*1000);
let val10 = Math.floor(Math.random()*1000);

let NumArray = [val1,val2,val3,val4,val5,val6,val7,val8,val9,val10];
console.log("Arrays element will be :"+NumArray);
let max =NumArray[0];
let min = NumArray[0];
for(let num=1;num<=NumArray.length;num++)
{
    if(NumArray[num] > max)
    {
        max=NumArray[num];
        console.log("Maximum will be: "+max);
    }
    if(NumArray[num] < min)
    {
        min = NumArray[num];
        console.log("Minimum will be: "+min)
    }
}

