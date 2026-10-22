const search=document.getElementById("search");
const products=document.querySelectorAll("#pName");
search.addEventListener("input",()=>{
    let product=search.value.toLowerCase();
    products.forEach(el=>{
        if(el.textContent.toLowerCase().includes(product)){
            el.style.display="";
        }else{
            el.style.display="none";
        }
    });
})
const price=document.querySelectorAll("#p1");
price.forEach(cost=>{
    let raw=cost.textContent.replace(/[^0-9]/g,"");
    cost.textContent=Number(raw).toLocaleString("en-NG",{
        style:"currency",
        currency:"NGN"
    })
});
const images=['hoodie.PNG','jacket.PNG','deckBoot2.PNG','collarLight.PNG','coverCap.PNG'];
let verify=0;
let timer;
function imageChange(){
    verify=(verify + 1) % images.length;
    document.getElementById("change").src=images[verify];
}
function interval(){
    if(!timer){
        let test=document.getElementById("change");
        test.addEventListener("mouseover",()=>{
            timer=setInterval(()=>imageChange(),1000)
        })
    }
}
interval();
function stopIt(){
    let test=document.getElementById("change");
    test.addEventListener("mouseout",()=>{
        clearInterval(timer);
    })
}
stopIt();


