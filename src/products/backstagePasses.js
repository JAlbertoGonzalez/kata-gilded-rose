export function BackstagePasses(item) {
    item.quality++
    // Quality increases by 2 when there are 10 days or less
    if (item.sellIn < 11)
      item.quality++
  
    // Quality increases by 3 when there are 5 days or less
    if (item.sellIn < 6)
      item.quality++
  
    item.sellIn--
  
    // Quality drops to 0 after the concert.
    if (item.sellIn < 0)
      item.quality = 0
  
    // The Quality of an item is never more than 50
    if (item.quality > 50)
      item.quality = 50
  
    return item
  }