function toggleDarkMode(){
    const el=document.querySelector("body");
    el.classList.add("darkMode");
}

function gridView(){
    const el=document.querySelector("div");
    el.classList.add("grid");
}

function colView(){
    const el=document.querySelector("div");
    el.classList.remove("grid");
}
