function RLE(str){
    let count = 1;
    let endResult=''
    for(let i = 0;i<str.length;i++){
        if(str[i]===str[i+1] && i<str.length-1){
            count++;
        }
        else{
            endResult+=count>1?str[i]+count:str[i];
            count=1;
        }
    }
    return endResult;
}

console.log(RLE('AAAABBBCCCCEEAA'))