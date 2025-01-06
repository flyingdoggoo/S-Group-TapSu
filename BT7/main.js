function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function PrimesBetween(a, b) {
    left = Math.min(a, b);
    right = Math.max(a, b);
    let primes = [];
    for (let i = a; i <= b; i++)
        if (isPrime(i)) primes.push(i);
    for (x of primes)
        console.log(x);
}
function getMonthName(num) {
    if(num < 1 || num > 12) return "Invalid month";
    let months = ["Tháng một", "Tháng hai", "Tháng ba", "Tháng bốn", "Tháng năm", "Tháng sáu",
        "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"];
    return months[num - 1];
}
function getLongestWord(str){
    let list = str.split(" ");
    let max = 0;
    let ans = [];
    let isWord = (tmpStr) => {
        for(let i = 0; i < tmpStr.length; i++)
            if(tmpStr[i] < 'A' || tmpStr[i] > 'z')
                return false;
        return true;
    }
    for(let i = 0; i < list.length; i++)
        if(list[i].length > max)
            max = list[i].length;

    for(let i = 0; i < list.length; i++)
        if(list[i].length == max)
            if(isWord(list[i]))
                ans.push(list[i]);
    return ans;
}
function customTrimFn(str){
    let ans = "";
    l = 0, r = str.length - 1;
    for(let i = 0; i < str.length; i++)
        if(str[i] != " ")
        {
            l = i;
            break;
        }
    for(let i = str.length - 1; i >= 0; i--)
        if(str[i] != " ")
        {
            r = i;
            break;
        }
    for(let i = l; i <= r; i++)
        ans += str[i];
    return ans;
}
console.log("5 is prime: " + isPrime(2));
PrimesBetween(1, 10)
console.log(getMonthName(2))
console.log(getLongestWord("AAA BBB ABCD EFGH ,,,,, LLLLL KKKKK"));
console.log(customTrimFn("     abc     "));