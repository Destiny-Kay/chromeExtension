const button = document.getElementById("input-btn")
let myLeads = []

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"))

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))   
        render(myLeads)

    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(i = 0; i < leads.length; i++){
        listItems += `  <li>
                        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
                        </li>`
    }

    ulEl.innerHTML = listItems 
}


button.addEventListener("click", clicked = ()=>{
    myLeads.push(inputEl.value) 
    render(myLeads)
    inputEl.value = ""
    localStorage.setItem("Leads", JSON.stringify(myLeads))
})
