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
        colors("orange")
        function colors(color){
        div.addEventListener("mouseover",()=>{
                div.style.backgroundColor=color
        });
       }
        const ers=document.querySelector(".btn")
                ers.addEventListener("click",()=>{
                        colors("white");
                })
        
        const btn=document.querySelector(".btn.reset")
        btn.addEventListener("click",()=>{
                div.style.backgroundColor="white";
        })
        temp.appendChild(div)

        
        
}
