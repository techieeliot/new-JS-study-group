let countChar = str => {
    let count = 0;
    for(let i = 0, {length} = str; i < length; i++) {
        count+=1;
    }
    return count;
}  
console.log(countChar("Hello woooorld!"));

//comment

