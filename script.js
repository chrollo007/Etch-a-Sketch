const temp=document.querySelector(".container")

for(let i=1;i<16*16;i++){
        const div=document.createElement("div")
        div.classList.add("grid")
        temp.appendChild(div)
}
