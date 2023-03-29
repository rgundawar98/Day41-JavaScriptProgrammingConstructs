let num = Math.floor(Math.random()*6+1);
let a , b , c ,d ,e ,f,i;
let Dict = { a:0,b:0,c:0,d:0,e:0,f:0,i:1};
while(a<10 && b<10 && c<10 && d<10 && e<10 && f<10)
{
    let randomcheck = Math.floor(Math.random()%6+1)
    let dice = randomcheck;
    (i++)
    switch(randomcheck)
    {
        case 1:
            a++;
            break;
        case 2:
            b++;
            break;
        case 3:
            c++;
            break;
        case 4:
            d++;
            break;
        case 5:
            e++;
            break;
        case 6:
            f++;
            break;
    }
    console.log("The total number of dice rolled are: "+dice);
    console.log("All dice numbers are :"+dice);
}
if(a>b && a>c && a>d && a>e && a>f)
   console.log("The maximum dice number is :"+a +" times");
else if(b>c && b>d && b>e && b>f)
   console.log("The maximum dice number is :"+b +" times")
else if(c>d && c>e&& c>f)
  console.log("The maximum dice number is :"+c +" times")
else if(d>e && d>f)
   console.log("The maximum dice number is :"+d +" times")
else if(e>f)
    console.log("The maximum dice number is :"+e +" times")
else
    console.log("The maximum dice number is :"+f +" times")
if(a<b && a<c && a<d && a<e && a<f)
    console.log("The minimum dice number is :"+a +" times");
 else if(b<c && b<d && b<e && b<f)
    console.log("The minimum dice number is :"+b +" times")
 else if(c<d && c<e && c<f)
   console.log("The minimum dice number is :"+c +" times")
 else if(d<e && d<f)
    console.log("The minimum dice number is :"+d +" times")
 else if(e<f)
     console.log("The minimum dice number is :"+e +" times")
 else
     console.log("The minimum dice number is :"+f +" times")