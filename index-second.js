document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".list");
  const btn = document.querySelector(".btn");
  const apiKey = "49388392-02e817ef61ae4618fbf814ce7";
  function render(items) {
      const html = items.hits.map(item => `
          <li>
              <img src="${item.webformatURL}" alt="${item.tags}">
              <p>${item.tags}</p>
          </li>
      `).join("");
      list.innerHTML = html;
  }
  btn.addEventListener("click", () => {
      const url = `https://pixabay.com/api/?key=${apiKey}&q=cat&image_type=photo`;
      console.log("Відправляємо запит на:", url);

      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP помилка! Статус: ${response.status}`);
              }
              return response.json();
          })
          .then(json => {
              console.log("Отримано дані:", json);
              if (json.hits.length === 0) {
                  console.warn("⚠ Немає результатів! Переконайтеся, що API-ключ правильний і не вичерпав ліміт.");
              }
              render(json);
          })
          .catch(error => console.error("Помилка при отриманні даних:", error));
  });
});

