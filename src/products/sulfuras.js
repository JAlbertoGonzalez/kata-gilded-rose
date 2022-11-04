export function SulfurasUpdate(item) {
  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality.

  // The Quality of an item is never more than 50,
  // but "Sulfuras" is a legendary item and as such
  // its Quality is always 80 and it never alters.
  item.quality = 80
  return item
}
