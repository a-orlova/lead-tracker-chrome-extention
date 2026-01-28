import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js"
<<<<<<< HEAD
import { getDatabase, 
         ref,
         push,
         onValue,
         remove
 } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js"
=======
import { getDataBase } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js"
>>>>>>> c8256abfe8ab2639afe67100f58f4ab802ac7818

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-b5d9b-default-rtdb.europe-west1.firebasedatabase.app/"
}

<<<<<<< HEAD
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, 'leads')
=======
const app = initializeApp(firebaseConfig);
const database = getDataBase(app)

let myLeads = []
>>>>>>> c8256abfe8ab2639afe67100f58f4ab802ac7818

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

onValue(referenceInDB, (snapshot) => {

    const snapshotDoesExists = snapshot.exists()
    if (snapshotDoesExists) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }

})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ''
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})