let users=new Map();
users.set("archmage@gmail.com","password123");
users.set("boss@nepa.com","lightisback");
users.set("danielokoro4411@gmail.com","daniel4234");
users.set("newdanny@gmail.com","newDanny112");
let sign=document.getElementById("signUp");
sign.addEventListener("click",()=>{
        document.getElementById("signBox").style.display="block";
        document.querySelector(".box1").style.display="none";
})
let login=document.getElementById("logUp");
login.addEventListener("click",()=>{
        document.querySelector(".box1").style.display="block";
        document.getElementById("signBox").style.display="none";
})
let loader=document.querySelector(".loader");
let hero=document.querySelector(".hero-container");
function setBorder(border){
        document.querySelectorAll(".hope").forEach(color=>color.style.border=`2px solid ${border}`);
}
const loginForm=document.querySelector(".box1");
function LoGin(p){
        const email=document.getElementById("email").value;
        const password=document.querySelector(".password").value;
        const login=document.getElementById("login");
        p.preventDefault()
        if(!users.has(email)){
                login.innerHTML="Account doesn't exist";
                setBorder("red");
                return;
        }else{
                if(users.get(email)===password){
                        login.innerHTML="Login Successfully ✔ 🌊";
                        setBorder("aqua");
                        hero.style.display="none";
                        login.innerHTML="";
                        loader.style.display="flex";
                        setTimeout(()=>{
                                loader.style.display="none";
                                window.location.href="home.html"
                        },3000);
                }else{
                        login.innerHTML="Wrong email or password ❌";
                        setBorder("red");
                }
        }
}
loginForm.addEventListener("submit",LoGin);
const signForm=document.getElementById("signBox");
function signIn(s){
        s.preventDefault()
        const email=document.getElementById("email2").value;
        const password=document.getElementById("pw").value;
        const password2=document.getElementById("conFirmPassword").value;
        const label=document.getElementById("passkey");
        const login=document.getElementById("login");
        if(password !== password2){
                label.innerHTML="Password don't match";
                document.querySelector(".new").style.borderBottom="2px solid red";
                return;
        }else{
                label.innerHTML="";
                document.querySelector(".new").style.borderBottom="2px solid green";
        }
        if(password.length<8){
                label.innerHTML="Password must be atleast 8 characters";
                document.querySelector("#pw").style.borderBottom="2px solid red";
                return
        }else{
                label.innerHTML="";
                document.querySelector("#pw").style.borderBottom="2px solid green";
        }
        if(!/\d+/.test(password)){
                label.innerHTML="Password must contain numbers";
                document.querySelector("#pw").style.borderBottom="2px solid red";
                return;
        }else{
                label.innerHTML="";
                document.querySelector("#pw").style.borderBottom="2px solid green";
        }
        if(!/[/A-Z]+/.test(password)){
                label.innerHTML="Passowrd must contain capital letters";
                document.querySelector("#pw").style.borderBottom="2px solid red";
                return;
        }else{
                label.innerHTML="";
                document.querySelector("#pw").style.borderBottom="2px solid green";
        }
        if(!/[!@#$%^&*]/.test(password)){
                label.innerHTML="Password must contain symbols";
                document.querySelector("#pw").style.borderBottom="2px solid red";
                return;
        }else{
                label.innerHTML="";
                document.querySelector("#pw").style.borderBottom="2px solid green";
        }
        if(users.has(email)){
                login.innerHTML="Email has already been used!❌";
                setBorder("red");
                return;
        }else{
                users.set(email,password);
                login.innerHTML="Account successfully created ✔🌊";
                setBorder("aqua");
                hero.style.display="none";
                login.innerHTML="";
                loader.style.display="flex";
                setTimeout(()=>{
                        loader.style.display="none";
                        window.location.href="home.html"
                },3000);
        }
        localStorage.setItem(users,JSON.stringify([...users]));
}
signForm.addEventListener("submit",signIn);
function setToggle(){
        const password=document.querySelectorAll(".password");
        const toggle=document.querySelectorAll(".togglePassword");
        toggle.forEach((index,change)=>{
                index.addEventListener("click",()=>{
                      const input=password[change];
                      if(input.type==="password"){
                                input.type="text";
                                index.textContent="😎";
                      }else{
                                input.type="password";
                                index.textContent="👁";
                      }

                })
        })
        let passEye2=document.querySelector("#confirmToggle");
        let password2=document.querySelector("#conFirmPassword");
        passEye2.addEventListener('click',()=>{
                const change=password2.getAttribute("type")==="password" ?"text" :"password";
                password2.setAttribute("type",change);
                passEye2.textContent=change==="password"?"👁" :"😎";
        })
}
document.addEventListener('DOMContentLoaded', setToggle);
const logUP=document.querySelector(".logUP");
const signUP=document.querySelector(".signUP");
function showSign(){
        logUP.classList.add("hide");
        logUP.classList.remove("active");
        setTimeout(()=>signUP.classList.add("active"),10);
}
function showLogin(){
        signUP.classList.remove("active");
        setTimeout(()=>{
                logUP.classList.remove("hide");
                logUP.classList.add("active")
        },300);
}
const saved=localStorage.getItem(users);
if(saved){
    users=new Map(JSON.parse(saved))
}
