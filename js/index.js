const btnElement =document.querySelectorAll(".btn");
const itemEls =document.querySelectorAll(".item");

var tempActive = document.querySelector(".active");

btnElement.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        //Active status nav menu
        tempActive.classList.remove("active")
        btn.classList.add("active")
        tempActive = btn;

        const name = e.target.dataset.name;
        itemEls.forEach((itemEl)=>{
            if(name==="all"){
                itemEl.style.display = "block"
            }else{
                if(itemEl.classList.contains(name)){
                    itemEl.style.display = "block"
                }else{
                    itemEl.style.display = "none";
                }
            }
        })
    })
})