function truncate(str, maxlength) {
  let pt3 = '…';
 return str.length > maxlength ?
   str.slice(0, maxlength - 1) + pt3 : str ;
}
