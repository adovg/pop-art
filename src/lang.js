function loadLanguage(lang) {
  console.log("first");
  fetch(`/lang/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Заменяем тексты по data-i18n
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.textContent = data[key];
        }
      });

      // Обновляем ссылку на статью
      const articleLink = document.getElementById("articleLink");
      if (data.articleLink) {
        articleLink.setAttribute("href", data.articleLink);
      }
    })
    .catch((err) => console.error("Ошибка загрузки языка:", err));
}

function switchLanguage(lang) {
  loadLanguage(lang);
}
