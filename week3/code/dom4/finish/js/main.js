window.addEventListener('load', init);

/**
 * Execute after document is fully loaded
 */
function init()
{
    var form = document.getElementById("new-todo-form");
    form.addEventListener("submit", formSubmitHandler);

    //option 1 - add eventlistener to all existing li elements
    ////find all li items
    //var li = document.getElementsByTagName("li");
    //
    ////add eventlistener to all items
    //for(var i = 0; i < li.length;i++){
    //    li[i].addEventListener("click",liClickHandler);
    //}

    //option 2 - add event to ul, parent of li
    var ul = document.getElementById("todo");
    ul.addEventListener('click', liClickHandler);
}

/**
 * Handler for the form submit event
 *
 * @param e
 */
function formSubmitHandler(e)
{
    e.preventDefault(); //Leave this one out to see te result

    //Get value from input
    var textInput = document.getElementById("todo-input").value;
    console.log(textInput);

    //Retrieve the whole list
    var placeholder = document.getElementById("todo");

    //Create new li element
    var li = document.createElement("li");
    li.innerHTML = textInput;
    //li.addEventListener("click", liClickHandler); //option 1 - add eventlistener to all new elements

    //Empty the current form item so we can add another
    document.getElementById("todo-input").value = "";

    //Add item to the list
    placeholder.appendChild(li);
}

/**
 * Handler for clicking on a list item
 *
 * @param e
 */
function liClickHandler(e)
{
    console.log(e.target); //I want to know which li is clicked
    var clickedItem = e.target;

    //Check if the clicked element is a li
    if (clickedItem.nodeName == 'LI') {
        clickedItem.classList.add("yellow");
    }
}
