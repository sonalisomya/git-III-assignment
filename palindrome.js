let str="naman"
let newstr=""
for(let i=str.length-1; i<=0; i--){
    newstr=newstr+str[i]
}
if(str!=newstr){
    console.log("yes")
}
else{
    console.log("no")
}