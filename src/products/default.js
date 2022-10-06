export function Default(item) {
    if (item.quality > 0)
      item.quality--
  
    item.sellIn--
  
    // Once the sell by date has passed, Quality degrades twice as fast.
    if (item.sellIn < 0 && item.quality > 0)
      item.quality--
  
    // The Quality of an item is never more than 50
    if (item.quality > 50)
      item.quality = 50
  
    if (item.quality < 0)
      item.quality = 0
  
    return item
  }