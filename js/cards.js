export function GetGalleryCard(item) {
  let CardBlock = document.createElement("div");
  CardBlock.classList = "card-block";

  let CardImg = document.createElement("img");
  CardImg.src = item.picture;
  CardImg.classList = "card-block__img";
  CardBlock.appendChild(CardImg);

  let CardTitle = document.createElement("p");
  CardTitle.textContent = item.title;
  CardTitle.classList = "card-block__title";
  CardBlock.appendChild(CardTitle);

  return CardBlock;
}
