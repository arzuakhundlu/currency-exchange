let selectBtn = document.querySelector('.selectBtn');
let cardContainer = document.querySelector('.card_container');
let valyutaList = document.querySelector('.valyuta_select_list ul');
let addBtn = document.querySelectorAll('.addBtn')
let listTextAll = document.querySelectorAll('.listText')
let search = document.querySelector('.search_valyuta input')
let searchIcon = document.querySelector('.search_valyuta .sort')
let input = document.querySelectorAll('.inp')
let valyuta_select_list=document.querySelector(".valyuta_select_list")

let arr = [
    {name: 'AZN' ,placeholder:"",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Azerbaijan_Democtratic_Republic.PNG/800px-Flag_of_Azerbaijan_Democtratic_Republic.PNG"},
    {name: 'USD' ,placeholder:"",img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"},
    {name: 'EUR' ,placeholder:"",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/810px-Flag_of_Europe.svg.png"},
    {name: 'RUB' ,placeholder:"",img:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png"},
    {name: 'TRY' ,placeholder:"",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png?20210808085121"},
]

// toggle
let count1 = 0;
function categoriesToggle(){
    
    selectBtn.addEventListener('click', ()=>{
        // console.log(selectBtn.parentElement.parentElement.children[1]);
       if(count1 == 0){
        selectBtn.parentElement.parentElement.children[1].style.maxHeight = '490px'
        valyuta_select_list.style.display="block"
           count1++
        }
        else{
            selectBtn.parentElement.parentElement.children[1].style.maxHeight = null
            selectBtn.parentElement.parentElement.children[1].style.overflow  = "hidden"   
            count1 = 0 
       }
       
   })
}
categoriesToggle()


// sort
let count = 0;
searchIcon.addEventListener("click",()=>{
    let arrWord = []
    listTextAll.forEach(text=>{
        arrWord.push(text.innerText)
    })
    
    if(count === 0){
        arrWord.sort();
        arrWord.forEach((item,i)=>{
        listTextAll[i].innerText = item
        count++
        
    })
    }else{
        arrWord.reverse();
        arrWord.forEach((item,i)=>{
        listTextAll[i].innerText = item
    })
    count = 0
    }
})


// search
search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();

    for (let i = 0; i < valyutaList.children.length; i++) {
      x =  valyutaList.children[i].querySelectorAll('span')[0];
      if (x.innerText.toUpperCase().indexOf(filter) > -1) {
        valyutaList.children[i].style.display = ''
      } else {
        valyutaList.children[i].style.display = 'none'
      }
    }
  })



let showArr=[]
let exchange=[]


function addBtn1(valyuta){
    if(exchange.indexOf(valyuta.toUpperCase())==-1){
        exchange.push(valyuta.toUpperCase())
    }

    showImput()

    if(exchange.length>=5){
        valyuta_select_list.style.display="none"
        count1=0
    }
}

if(JSON.parse(localStorage.getItem("div"))){
    // cardContainer.innerHTML=JSON.parse(localStorage.getItem("div"))
    exchange=JSON.parse(localStorage.getItem("div"))
    showImput()
}

function showImput(){
    cardContainer.innerHTML=''
    for(let i=0;i<exchange.length;i++){
        let findValyuta=arr.find(a=>a.name==exchange[i])
        cardContainer.innerHTML+=`
         <div class="card">
             <div class="card_top">
             <div class="flag_val">
                <div class="flag">
                    <img src="${findValyuta.img}" alt="">
                    </div>
                    <h4>${exchange[i]}</h4>  
                </div>
             
             <button class="deleteBtn" onClick="deleteFunction(event)">×</button>
             </div>
             <input  class='inp' aria-label="${findValyuta.name}" onkeyup="getValue(event)" type="text" placeholder=0 value=${findValyuta.placeholder}>
         </div>
         `
         
    }

    // console.log(cardContainer.innerHTML);

    // localStorage.setItem("div",JSON.stringify(cardContainer.innerHTML))
    localStorage.setItem("div",JSON.stringify(exchange))
}

function fromAzn(value, el){
   
    const x = document.querySelectorAll('.inp');
    for(let i = 0; i<x.length; i++){
        if(el.ariaLabel=="AZN"){
            if(x[i] != el){
                if(x[i].ariaLabel == 'USD'){
                    x[i].value = value*0.59
                }else if(x[i].ariaLabel=="EUR"){
                    x[i].value = value*0.55
                }else if(x[i].ariaLabel=="RUB"){
                    x[i].value = value*47.09
                }else if(x[i].ariaLabel=="TRY"){
                    x[i].value = value*11.79
                }
            }
        }else if(el.ariaLabel=="USD"){
            if(x[i] != el){
                if(x[i].ariaLabel == 'AZN'){
                    x[i].value = value*1.7
                }else if(x[i].ariaLabel=="EUR"){
                    x[i].value = value*0.93
                }else if(x[i].ariaLabel=="RUB"){
                    x[i].value = value*79.90
                }else if(x[i].ariaLabel=="TRY"){
                    x[i].value = value*20.02
                }
            }
        }else if(el.ariaLabel=="EUR"){
            if(x[i] != el){
                if(x[i].ariaLabel == 'USD'){
                    x[i].value = value*1.07
                }else if(x[i].ariaLabel=="AZN"){
                    x[i].value = value*1.82
                }else if(x[i].ariaLabel=="RUB"){
                    x[i].value = value*85.73
                }else if(x[i].ariaLabel=="TRY"){
                    x[i].value = value*21.48
                }
            }
        }else if(el.ariaLabel=="RUB"){
            if(x[i] != el){
                if(x[i].ariaLabel == 'USD'){
                    x[i].value = value*0.013
                }else if(x[i].ariaLabel=="EUR"){
                    x[i].value = value*0.012
                }else if(x[i].ariaLabel=="AZN"){
                    x[i].value = value*0.021
                }else if(x[i].ariaLabel=="TRY"){
                    x[i].value = value*0.25
                }
            }
        }else if(el.ariaLabel=="TRY"){
            if(x[i] != el){
                if(x[i].ariaLabel == 'USD'){
                    x[i].value = value*0.05
                }else if(x[i].ariaLabel=="EUR"){
                    x[i].value = value*0.047
                }else if(x[i].ariaLabel=="RUB"){
                    x[i].value = value*3.99
                }else if(x[i].ariaLabel=="AZN"){
                    x[i].value = value*0.085
                }
            }
        }
        
    }
}

function getValue(e) {
    // console.log(e.target.value);
    fromAzn(e.target.value, e.target)
    
}

function deleteFunction(e){
    // console.log(e.target.parentElement.children[0].innerHTML);
    let dltElm=exchange.findIndex(a=>a==e.target.parentElement.children[0].innerHTML)
    exchange.splice(exchange.findIndex(a=>a==e.target.parentElement.children[0].innerHTML),1)
    showImput() 
}





