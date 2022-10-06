import Item from './Item'
import { ITEM_NAMES } from './products'

const GildedRose = function () {
  var items = []
  items.push(new Item(ITEM_NAMES.VEST, 10, 20))
  items.push(new Item(ITEM_NAMES.BRIE, 2, 0))
  items.push(new Item(ITEM_NAMES.MONGOOSE, 5, 7))
  items.push(new Item(ITEM_NAMES.SULFURAS, 0, 80))
  items.push(new Item(ITEM_NAMES.TAFKAL80ETC, 15, 20))
  items.push(new Item(ITEM_NAMES.CONJURED, 3, 6))
  GildedRose.updateQuality(items)
}

GildedRose.updateQuality = function (items) {
  for (const item of items) {
    item.updateQuality()
  }
  return items
};

export default GildedRose