const listsContainer = document.querySelector('[data-lists]') //lists container
const newListForm = document.querySelector('[data-new-list-form]') //lists form to create new list
const newListInput = document.querySelector('[data-new-list-input]') // element to select the button of our form to create a new list
const deleteListButton = document.querySelector('[data-delete-list-button]') // this is the data attribute that si gonna allow us to manipulate our delete button element in the code above 
const listDisplayContainer = document.querySelector('[data-list-display-container]') // this is the data atribute that is gonna allow us to select the whole task container for later we use it in the code
const listTitleElement = document.querySelector('[data-list-title]') // this is the data selector that we are gonna use to be able to manipulate our title inside our whole tasks container 
const listCountElement = document.querySelector('[data-list-count]') // and this is the data atribute that we are gonna use to make functional our task counter inside our tasks container
const tasksContainer  = document.querySelector('[data-tasks]') // and this is the data atribute that we are gonna use to manipulate our tasks inside our whole container 
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists' // here we are defining the keys that we are gonna use in this app to store the data that we want to be stored in our local storage 
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [] //list of lists that we can get from our local storage by using the keys that we did set above and also we are parsing it into an object 
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

// ------------------ Here we are defining the function that is gonna make our selected list to be marked as selected and allow us to erase it later or to work on that list 
listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') { // here we are telling the brwoser that if the clicked elemtn is an li we want to to the followed above
    selectedListId = e.target.dataset.listId  // and what we are doing here is telling the browser which id we are selecting which in this case is the list that is being clicked 
    saveAndRender() // and here we are saving and re rendering our page with the new selected id which is gonna be the selected list
  }
})

tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedList = lists.find(list => list.id === selectedListId)
      const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
      selectedTask.complete = e.target.checked
      save()
      renderTaskCount(selectedList)
    }
})

clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})
//------------------ this is the function that will allow us to make functional our delete list button
deleteListButton.addEventListener('click', e => { // in this function we are adding an Event listener to our delete list button for us to do the following whenever we click on it and want we want to do is explained above
  lists = lists.filter(list => list.id !== selectedListId) // in this line what we are doing is asking for a new list excluding the list with the id selected so in that case we are gonna erase it 
  selectedListId = null // and after areasing the selected list of course we are not gonna have any selected list anymore and that is why we are setting the selected list id as null
  saveAndRender() // and finally after removing the selected list we are calling our function to re render the page with the new content or better, without the erased elements 
})

newListForm.addEventListener('submit', e => { //The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
    e.preventDefault() // here we are writting this line beacuse by default everytime that we submit a new list tha page will be refreshed and we dont wnat that to happen thats why we set the prevent default 
    const listName = newListInput.value // in this line we are getting the name that was wrote in our new list form by using the Object.values() method
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null // in this line we are clearing out the input for the user to be able to write another name everytime he submits a new list name
    lists.push(list) // in this line we are pushing our created list to our existing lists
    saveAndRender() // and finally we are calling the saveAndRender function
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
    saveAndRender()
})

function createList(name) { // in this function we are creating a unique id identifier for our new list, and also we are setting some more data to that list which is the name, and also the tasks that are asociated with that list
    return { id: Date.now().toString(), name: name, tasks: []}
}

function createTask(name) {
    return { id: Date.now().toString(), name: name, complete: false}
}

function saveAndRender(){
    save()
    render()
}

function save(){ // in this function we are setting the elements that we want to save in our local storgae by using the local storage set item method saving them with the correspondents keys and values 
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists)) // here we are defining the values that we want to be stored in our local storage and those are gonna be stored as strings using the stringfy method and this works by using the key that we defined before and the value of that key
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId) // here we are saving our selected list id as well so the app can recognize which list is being selected even if the user refresh the page
}

function render() {
    clearElement(listsContainer)
    renderLists()

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
      listDisplayContainer.style.display = 'none'
    } else {
      listDisplayContainer.style.display = ''
      listTitleElement.innerText = selectedList.name
      renderTaskCount(selectedList)
      clearElement(tasksContainer)
      renderTasks(selectedList)
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
     const taskElement = document.importNode(taskTemplate.content, true)
     const checkbox = taskElement.querySelector('input')
     checkbox.id = task.id
     checkbox.check = task.complete
     const label = taskElement.querySelector('label')
     label.htmlFor = task.id
     label.append(task.name)
     tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
  const taskString = incompleteTaskCount === 1 ? "task" :  "tasks"
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li') // here we are telling the browser that for each of our elements in our list of lists we want a type of element "li" to be created
    listElement.dataset.listId = list.id // and he we are adding an id to our lists in order for later use that id 
    listElement.classList.add("list-name") // here we are adding a classname to the element "li" that prevouisly we created 
    listElement.innerHTML = list.name // and he are actually setting the textinside our element  with the innerHTML property
    if (list.id === selectedListId) {
      listElement.classList.add('active-list') //The add() method appends a new element with a specified value to the end of a Set object, and in this case this line is telling the DOM to add the class 'active-list' to our selected element by checking if the Id of our list is equal to the one that is selected 
    }
      listsContainer.appendChild(listElement) // and here we are appending the new list element to our lists container 
    })
}

function clearElement(element) { // in this function we are telling the browser that while the element has any child initially we want it to be deleted 
    while (element.firstChild) {
        element.removeChild(element.firstChild )
    }
}

render()