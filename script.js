let body=document.querySelector("body");
let lune=document.getElementById("lune");

let like=document.getElementById("like");
let dislike=document.getElementById("dislike");
let likecount=document.getElementById("like_count");
let dislikecount=document.getElementById("dislike_count");
// let count1=0;
let count1=localStorage.getItem("like")==null ? 0:localStorage.getItem("like");
// let count2=0;
let count2=localStorage.getItem("dislike")==null ? 0:localStorage.getItem("dislike");
likecount.textContent=count1;
dislikecount.textContent=count2;
function dark(){
   
    body.classList.toggle("dark");
    lune.classList.toggle("white");
    if(body.classList.contains("dark") && lune.classList.contains("white")){
        lune.classList.replace("fa-moon","fa-sun");
    }else{
        lune.classList.replace("fa-sun","fa-moon");
    }
    
}
like.addEventListener("click", function(){
    like.style.color="red";
    likecount.textContent=++count1;
    localStorage.setItem("like",count1);
    
})

dislike.addEventListener("click", function(){
    like.style.color="red";
     dislikecount.textContent=++count2;
     localStorage.setItem("dislike",count2);
     
})