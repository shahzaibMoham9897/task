function reversedString(str,n){
 let words=str.split(' ')
 let finalWord=''
 for(let i=0;i<words.length-1;i++){
   let word=words[i]
   let reverseWord=''
   reverseWord=reverseWord+word[0]+word[1]
   for(let j=word.length-1;j>=2;j--){
     
     reverseWord = reverseWord + word.charAt(j);
   }
   finalWord = finalWord + reverseWord + " ";
 }
 console.log(finalWord)
}


reversedString("heloo my name is ",2)