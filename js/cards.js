export function GetGalleryCard(item) {
  const CardBlock = document.createElement("div");
  CardBlock.classList = "card-block";

  const ItemsCardBlock = document.createElement("div");
  ItemsCardBlock.classList = "card-block__item";

  if (item.type === "image") {
    const CardImg = document.createElement("img");
    CardImg.src = item.resourse;
    CardImg.classList = "card-block__img";

    ItemsCardBlock.appendChild(CardImg);
  } else {
    const CardAudio = document.createElement("audio");
    CardAudio.classList = "card-block__audio";
    CardAudio.src = item.resourse;
    CardAudio.controls = true;

    ItemsCardBlock.appendChild(CardAudio);
  }

  const CardTitle = document.createElement("p");
  CardTitle.textContent = item.title;
  CardTitle.classList = "card-block__title";

  CardBlock.appendChild(ItemsCardBlock);
  CardBlock.appendChild(CardTitle);

  return CardBlock;
}
