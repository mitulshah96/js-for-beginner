const tax = 0.08;
var amount=99.99;
amount=amount*2
amount=amount+(amount*tax);
console.log(amount.toFixed(2))

function printAmount()
{
  console.log(amonunts.toFixed(2))
}
var amonunts=990.9;
printAmount()

amonunts=amonunts*2

printAmount()


function calctax(amt){
  amt=amt+(amt*tax);
  return amt
}
var amt=99.99;
amt=calctax(amt)
console.log(amt.toFixed(2))