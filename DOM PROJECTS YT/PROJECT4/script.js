var elem=document.querySelectorAll(".elem");
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        console.log("hello");
    });
});