
// Q1
const reverse = (num) => {
    let rev = 0;
    while (num != 0) {
        let temp = num % 10;
        rev = rev * 10 + temp;

        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverse(32243));

// Q2
const ideal = (str) => {
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}
console.log(ideal("the quick brown fox"));

// Q3
const count_vowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "I" || ch == "U") {
            count++;
        }
    }
    return count;
}

console.log(count_vowels("the quick brown fox"));

// Q4
const genrate_substring = (str) => {
    let ptr1 =0;
    let ptr2 =0;
    let str2 = "";
    while(ptr2 < str.length){
        if(ptr1 == str.length) {
            ptr2 ++;
            ptr1 = ptr2;
            str2 = "";
        }
        else 
        {
            str2 = str2 + str[ptr1];
            console.log(str2);
            ptr1++;
        } 
    }
}
genrate_substring("dog");