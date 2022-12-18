const capturaClick = document.getElementById("save-btn")
const btnDeleta = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("saveTab-btn") 
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el") 
const tabs = [{url: "https://www.youtube.com"}, {url: "https://www.google.com"}]
let myLeads = [ ]
let listItems = ""
let i = 0
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

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
    }})


btnDeleta.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    listItems = ""
    render(myLeads)
})


// tabBtn.addEventListener("click", function(){

//     localStorage.getItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         var activeTab = tabs[0]
//         var activeTabId = activeTab.id;
//     })
// })


function render (leads) {
    
    for(let j = 0; j < leads.length; j++){

        listItems +=`
        <li>
            <a target='_blank' href="${leads[j]}">
            ${leads[j]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
    i++
} 

