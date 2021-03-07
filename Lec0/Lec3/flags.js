let fs=require("fs");
let f1data=fs.readFileSync("./f1.txt");
f1data=f1data+"";
let data=f1data.split("\n\r");
let ans="";
for(let i=0;i<data.length;i++){
    if(data[i]!=''){
        ans+=data[i]+'\n';
    }else if(data[i]!='' && data.length-1==i){
        
        ans+=data[i];
    }
}
// console.log(data);
ans=ans.split('/n');
console.log(ans[0]);

