import("../style/style.sass");

import { GetGalleryCard } from "./cards";
import items from "./items";

const GalleryCard = document.getElementById("gallery");

items.map((item) => GalleryCard.appendChild(GetGalleryCard(item)));
