
console.log("Never Gonna Give You Up.");

var taskCount=2;

document.querySelectorAll(".item1")[1].addEventListener("click",()=>{
    $(".item1").fadeOut();
})
document.querySelectorAll(".item2")[1].addEventListener("click",()=>{
    $(".item2").fadeOut();
})
// $(".mark-done.item1").click(()=>{$(".item1").fadeOut();})
// $(".mark-done.item2").click(()=>{$(".item2").fadeOut();})

$(".task-input").click(function(){   
    var g=document.querySelector("input").value;
    document.querySelector("input").value=null;
    console.log(g);
    if(g!=''){
    taskCount++;
    document.querySelector(".container").innerHTML+=" <div class=\"item bg-info text-dark item"+taskCount+"\"><span class=\"task-index\">-> </span>"+g+"</div><div class=\"mark-done btn-outline-success item"+taskCount+"\">Done</div>";
    }
    addListen();    
    console.log(taskCount);
});



$(".clear").click(function(){
    $(".container").text("");
    taskCount=0;
})



function addListen(){
    if(taskCount>0){
    document.querySelectorAll(".item1")[1].addEventListener("click",()=>{
        $(".item1").fadeOut();
    })
    }
    if(taskCount>1){
    document.querySelectorAll(".item2")[1].addEventListener("click",()=>{
        $(".item2").fadeOut();
    })
}
    // for(var i=0;i<document.querySelectorAll(".item").length;i++){
    //     document.querySelectorAll(".mark-done")[i].addEventListener("click",function(){
    //         $(this).fadeOut();
    //         $(this.previousSibling).fadeOut();
    //     })
    // }
    for(var i=0;i<taskCount;i++){
        document.querySelectorAll(".mark-done")[i].addEventListener("click",function(){
            $(this).fadeOut();
            $(this.previousSibling).fadeOut();
        })
    }
}








function showEmpty(){//ded
}