document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.createElement("button");
  deleteAllButton.textContent = "Delete All";
  form.appendChild(deleteAllButton);
  deleteAllButton.addEventListener('click', handleDeleteAll);

})

const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector("#reading-list");
  const newListItem = document.createElement("li");
  newListItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
  readingList.append(newListItem);
  resetForm();
};

const resetForm = function() {
  document.querySelector('#new-item-form').reset();
}

const handleDeleteAll = function(event) {
  document.querySelectorAll("li").forEach(book => book.remove());
};

