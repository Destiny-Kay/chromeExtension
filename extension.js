const button = document.getElementById("input-btn")
let myLeads = []

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"))

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

button.addEventListener("click", clicked = ()=>{
    myLeads.push(inputEl.value) 
    renderLeads()
    inputEl.value = ""
    localStorage.setItem("Leads", JSON.stringify(myLeads))
})
function renderLeads(){
    let listItems = ""
    for(i = 0; i < myLeads.length; i++){
        // listItems += "<li><a href='"+ myLeads + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `  <li>
                        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                        </li>`
    }

    ulEl.innerHTML = listItems 
}
