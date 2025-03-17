const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
fetch("https://pixabay.com/api/")
  .then((response) => response.json())
  .then((json) => console.log(json));
  function render(items){
    const html = items.hits.map(item => `<li><img src = "${item.userImageURL}">${item.tags}</li>`).join("");
    list.innerHTML = html;
}
  button.addEventListener("click", ()=>{
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=cat&image_type=photo`)
    .then((response) => response.json())
    .then((json) => render(json));
});