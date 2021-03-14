
var input = prompt("Enter input:");
console.log("input is",input);
var values = prompt("Enter number:");
arr = values.split(' ');
console.log("array is",arr);
var i =0;
var j = 0;
for(i = 0; i<arr.length; i++)
{
  if(arr[i]!=(i+1))
  {
  console.log("Missing Number is: ",i+1);
  j =1;
  break;
  }
}
if(j==0)
{
  console.log("Missing Number is: ",input);
}