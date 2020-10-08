var number=prompt("Please enter a number : ");

var sum=0;

for ( var i=2; i<=number; i++ ) {
    if (i%3==0 || i%5==0){
        sum=sum+i;
    }

}
alert("sum is : "+ sum);




