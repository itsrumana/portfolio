function showSideBar(){
    const sideBar=document.querySelector(".menu-bar")
    sideBar.style.display='flex'
}

function hideSideBar(){
    const sideBar=document.querySelector(".menu-bar")
    sideBar.style.display='none'
}

var typed= new Typed(".auto-typed",{
    strings:["My name is Rumana Begum.","I am a programmer.","Also enthusiast learner.","You can call me Rumana.","I am a Developer.","I am a Designer.","My mom calls me Ruma."],
    typeSpeed:120,
    backSpeed:50,
    loop:true
})