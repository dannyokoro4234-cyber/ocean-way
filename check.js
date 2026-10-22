let Cart=JSON.parse(localStorage.getItem("cartIcoN")) || [];
let Total=0;

Cart.forEach(i=>Total+=i.price * i.qty);
document.getElementById("checkoutSummary").innerHTML=`
    ${Cart.map(i=>`<p>${i.name} x ${i.qty} - ${form(i.price * i.qty)} </p>`).join(" ")}
    <hr>
    <h3 style="text-shadow:0 0 2rem aqua; color:aqua;"> Total: ${form(Total)} </h3>
    
`

function form(amount){
    return Number(amount).toLocaleString("en-NG", {style:"currency", currency:"NGN"});
}
 const confirmBtn=document.getElementById("confirmOrder");
 confirmBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const address=document.getElementById("address").value.trim();
    const select=document.getElementById("select");
    if(select.value === "Choose Payment Method" || select.selectedIndex === 0){
        alert('Abeg Add Payment method u Criminal');
        select.style.border="2px solid red";
        select.focus();
        return;
    }else{
        select.style.border="";
        console.log(" Payment na:", select.value)
    }
    if(name && address && Cart.length > 0){
        document.querySelector(".summary").style.display="none";
        document.querySelector(".header").style.display="none";
        document.getElementById("form").style.display="none";
        document.getElementById("receiptName").textContent=`Thanks ${name}!`;
        document.getElementById("receiptAddress").textContent=`Deliver to: ${address}`;
        document.getElementById("receiptTotal").textContent=form(Total);
        document.getElementById("successReceipt").style.display="block";
        Cart=[];
        localStorage.setItem("cartIcoN",JSON.stringify(Cart));
        setTimeout(() => {
            document.getElementById("successReceipt").style.display="none";
            window.location.href="home.html";
        }, 4000);
    }else{
        document.getElementById("successReceipt").style.display="none";
    }
 })