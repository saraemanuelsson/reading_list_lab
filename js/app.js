document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector("#reading-list");
  const newListItem = document.createElement("li");
  console.log(event);
  newListItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
  readingList.append(newListItem);
  
};