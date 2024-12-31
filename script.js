const temp=document.querySelector(".container")
const gridsize=100;
const containersize=500;
temp.style.width=`${containersize}px`
temp.style.height=`${containersize}px`

const size=500/gridsize;

for(let i=0;i<gridsize*gridsize;i++){
        const div=document.createElement("div")
        div.classList.add("grid")
        div.style.width=`${size}px`;
        div.style.height=`${size}px`;
        div.addEventListener("mouseover",()=>{
                div.style.backgroundColor="black"
        });
        temp.appendChild(div)
        
}
