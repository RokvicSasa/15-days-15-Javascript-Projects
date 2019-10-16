this.onload = function () {
  var input = document.querySelector("#input");
  var addBtn = document.querySelector("#input-btn");
  var article = document.querySelector(".article");

  //add task
  addBtn.addEventListener("click", function () {
    var task = document.createElement("div");
    task.className = 'task';
    var inputText = document.createTextNode(input.value);
    var element = document.createElement("h2");
    var removeBtn = document.createElement("button");
    var btnName = document.createTextNode("Remove");
    removeBtn.appendChild(btnName);
    removeBtn.setAttribute("id", "remove-btn");

    element.appendChild(inputText);
    task.appendChild(element);
    task.appendChild(removeBtn);
    article.appendChild(task);

    input.value = "";


    //remove task

    removeBtn.addEventListener("click", function () {
      event.currentTarget.parentElement.remove();

    })
  });











  //End of Code
};