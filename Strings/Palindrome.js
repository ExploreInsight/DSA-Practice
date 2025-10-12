var Palindrome = function(x){
    const left = x.toString().split('').reverse().join('');
    const right = x.toString();

    if(left === right) return true;

    return false;
}

Palindrome(121);