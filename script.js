var arr = [
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://media.istockphoto.com/id/909135686/photo/female-model.jpg?s=1024x1024&w=is&k=20&c=ZS600cl0EdUDivK4Chyf2vPtXz79mJHG7EN1yCr6-Fg="},
    {dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1673757117975-10360fc39efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1535207010348-71e47296838a?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]
var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function(elem,idx) {
    clutter +=  `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
    
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});

var con = document.querySelector(".model");
var love = document.querySelector("#heart2");
var heart = document.querySelector("#heart");
var flag = 0;

con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8
    love.style.color = "red"
    heart.style.color = "red"

    setTimeout(function(){
        love.style.opacity = 0;
    },1000)
});

heart.addEventListener("click",function(){
    if (flag==0){
        heart.style.color = "red";
        flag =1;
    }
    else {
        heart.style.color = "white";
        flag =0;
    }
});

