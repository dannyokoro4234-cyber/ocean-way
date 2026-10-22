const icon=document.querySelector(".icon");
const cartList=document.querySelector("#cartItems");
const count=document.querySelector("#cartCount");
const total=document.querySelector("#cartTotal");
const emptyMsg=document.querySelector("#msg");
const glow=document.querySelector(".popping");
const check=document.querySelector(".checkBtn");
let cart;
try{
    cart=JSON.parse(localStorage.getItem("cartIcoN")) || [];
}catch(err){
    cart=[];
    localStorage.removeItem("cartIcoN");
}
if(icon){
    icon.addEventListener("click", ()=>{
        renderCart();
    })
}
function saveCart(){
    localStorage.setItem("cartIcoN", JSON.stringify(cart));
}
function format(amount){
    return Number(amount).toLocaleString("en-NG", {style:"currency", currency:"NGN"});
}
function renderCart(){
    if(cart.length > 0){
        emptyMsg.style.display="none";
        glow.style.background="black";
        check.style.display="block"; 
    }else{
        emptyMsg.style.display="block";
        glow.style.background="";
        count.textContent=0;
        total.textContent=format("0");
        cartList.innerHTML="";
        check.style.display="none";
        saveCart();
    }
    cartList.innerHTML="";
    let sum=0;
    cart.forEach((item,index)=>{
        sum+=item.price * item.qty;
        cartList.innerHTML+=`
            <div>
                <p>${item.name} - ${format(item.price)} x ${item.qty}</p>
                <button onclick="changeQty(${index}, 1)" style="margin:0 1rem; padding:.3rem; font-size:1.3rem; font-weight:bold; color:aqua; cursor:pointer;">+</button>
                <button onclick="changeQty(${index}, -1)"  style="margin:0 1rem; padding:.3rem; font-size:1.3rem; font-weight:bold;
                cursor:pointer;">-</button>
            </div>
        `;
    });
    total.textContent=format(sum);
    const add=cart.reduce((sum,index)=>sum + index.qty,0);
    if(count){
        count.textContent=add;
    }
    saveCart();
}
function addCart(name,price){
    let found=cart.find(i=>i.name === name);
    if(found){
        found.qty++;
    }else{
        cart.push({name,price,qty:1});
    }
    renderCart();
}
function changeQty(i,d){
    cart[i].qty+=d;
    if(cart[i].qty <=0)cart.splice(i,1);
    renderCart();
}