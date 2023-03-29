const Number=18;
const isPrime =(n) =>
{
    for(let num=2;num<=n/2;num++)
    {
        if(n % num == 0)
        {
            return false;
        }
    };
    return true;
};
const findPrimeFactors = Number =>
{
    const res = Number%2===0? [2]:[];
    let start =3;
    while(start <= Number)
    {
        if(Number % start === 0)
        {
            if(isPrime(start))
            {
                res.push(start);
            };
        };
        start++;
    };
    return res;
};
console.log(findPrimeFactors(18));