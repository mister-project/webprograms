console.log("скрипт mobile_table.js в работе");

// Преобразование таблиц в мобильный вид Начало
try {
  const bigContainer = document.querySelector("#projects");
  const big = document.querySelector(".project_table");

  const container = document.createElement("mobileBlocks");
  container.style.className = "mobile-blocks";
  const headers = Array.from(big.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim(),
  );

  // Строки исходной таблицы
  const rows = Array.from(big.querySelectorAll("tbody tr"));
  const fragment = document.createDocumentFragment();

  rows.forEach((tr, rowIndex) => {
    // Блок для одной исходной строки
    const block = document.createElement("div");
    block.className = "str";
    console.log(block);

    // Внутри блока создаём пару строк по формату: одна "строка" с двумя ячейками: head и value
    // Но чтобы соответствовать вашему примеру, добавляем внутри каждую пару как отдельное "tr" с двумя "td".
    headers.forEach((header, idx) => {
      const trInner = document.createElement("table");
      // имитация строки как в примере: одну пару заголовок-значение
      trInner.style.width = "100%";
      const row1 = document.createElement("tr");
      const thCell = document.createElement("td");
      thCell.className = "head";
      thCell.textContent = header;
      const valCell = document.createElement("td");
      console.dir(tr.cells[idx]);

      valCell.innerHTML = tr.cells[idx] ? tr.cells[idx].innerHTML.trim() : "";

      row1.appendChild(thCell);
      row1.appendChild(valCell);
      trInner.appendChild(row1);

      // добавляем как часть блока
      block.appendChild(trInner);

      // затем добавим разделение между парами, чтобы соответствовать примеру
      // (в вашем примере каждая пара повторяется в новой строке; здесь мы уже добавляем через tables)
    });

    fragment.appendChild(block);
  });
  container.appendChild(fragment);
  bigContainer.appendChild(container);
  console.log(container);
} catch (error) {
  console.log("Таблицы для преобразования в мобильный вид не найдены");
}
// Преобразование таблиц в мобильный вид Окончание
