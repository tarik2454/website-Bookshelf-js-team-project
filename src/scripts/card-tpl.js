export function createCardTpl(card) {
  const { book_image, title, author, _id } = card;
  return `
    <li class="cards-item">
      <a class="cards-link" href="#" data-id="${_id}">
        <div class="cards-header">
          <img class="cards-img" src="${book_image}" alt="${title}" loading="lazy" data-id="${_id} />
        </div>
        <div class="cards-content">
          <h2 class="cards-title" data-id="${_id}>${title}</h2>
          <p class="cards-author">${author}</p>
        </div>
      </a>
    </li>`;
}
