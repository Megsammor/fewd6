function generateListItemHTML(inputValue) {
	var html = '<li>' + inputValue + '</li>';


	return html;  
}
function addToList() {

	var todo = $('#todo-item-input').val();
	var listItem = generateListItemHTML(todo);
	var todoList = $('#todo-list');

}

function clearList() {
  
}
function removeItem() {
  
}
function completeItem(){
  
}
function clearCompleted() {
  
}
function editListItem() {
  
}
$('#todo-item-submit').click(addToList);



