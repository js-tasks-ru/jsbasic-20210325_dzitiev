function factorial(n) {
   let result = 1
  for (; n!=0 ;)
    result *= n--;
  return result;  
}
