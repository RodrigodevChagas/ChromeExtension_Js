const capturaClick = document.getElementById("save-btn")
const btnDeleta = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el") 
let myLeads = [ ]
let listItems = ""
let i = 0

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
}
capturaClick.addEventListener("click", function(){
    
    if(inputEl.value != "")
    {
        listItems = ""
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value = ""
        console.log("Tudo dando certo!")
    }
    
})

btnDeleta.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render (leads) {
    
    for(let j = 0; j < leads.length; j++){

        listItems +=`
        <li>
            <a target='_blank' href="${leads[j]}">
            ${leads[j]} \n
            </a>
        </li>`
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
    i++
} 

