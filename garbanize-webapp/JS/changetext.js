const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "XLM PRICE UPDATES"){
        btn.innerText = "COMING SOON";
    }else{
        btn.innerText= "YES SOON!";
    }
});