let n = 31052022;
// Write solution code here to find the lucky number
let digit;
let sum=0;
do{
    digit=n%10;
    sum=sum+digit;
    n=parseInt(n/10);
    if(n==0&&sum>10)
    {
        n=sum;
        sum=0;
    }
}
    while (n!=0);
console.log(`Your Lucky Number is ${sum}`);