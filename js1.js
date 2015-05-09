
var npress=0;
var fword='';
var fguess=[];


function getword()
{
var word=prompt('Enter a word');
var l=word.length;
var wordarray=[];
for(var i=0;i<l;i++)
{wordarray[i]="-";
 //wordarray=wordarray.slice(1);
}
document.getElementById("w1").value=wordarray;
  fword=word;
    fguess=wordarray;
}


function guessword()
{var l=fword.length;
 var tem=document.getElementById("w2").value;
 if(tem.length==1){
 for (var n=0; n<l;n++)
 {if(fword[n]==tem)
 {fguess[n]=tem;}}
  document.getElementById("w1").value=fguess;
 }
 else
 {var c=fword.localeCompare(tem);
     if(c==0)
 {document.getElementById("w1").value="you are right!";}
  else{document.getElementById("w1").value="Guess is wrong!";}}
}
  