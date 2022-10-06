import Item, { ITEM_NAMES } from './Item'

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

function AgedBrie(item) {
  if (item.quality < 50) {
    item.quality++;

    if (item.sellIn < 6)
      item.quality++

  }

  if (item.sellIn < 11)
    item.quality++


  item.sellIn--;

  if (item.sellIn < 0)
    item.quality = 0


  if (item.quality > 50)
    item.quality = 50

  return item
}

function Tafkal(item) {
  item.quality++
  if (item.quality < 50) {
    // See revision number 2394 on SVN.
    if (item.sellIn < 11)
      item.quality++

    //Increases the Quality of Backstage Passes if the Quality is 6 or less.
    if (item.sellIn < 6)
      item.quality++

    item.sellIn--

    if (item.sellIn < 0)
      item.quality = 0
  }

  return item
}

function Sulfuras(item) {
  // Inmutable item
  return item
}

function Default(item) {
  if (item.quality > 0)
    item.quality--

  item.sellIn--

  if (item.sellIn < 0 && item.quality > 0)
    item.quality--

  if (item.quality > 50)
    item.quality = 50

  return item
}

GildedRose.updateQuality = function (items) {
  for (const item of items) {
    switch (item.name) {
      case ITEM_NAMES.BRIE:
        AgedBrie(item)
        break
      case ITEM_NAMES.TAFKAL80ETC:
        Tafkal(item)
        break
      case ITEM_NAMES.SULFURAS:
        Sulfuras(item)
        break
      default:
        Default(item)
    }
  }
  return items
};

export default GildedRose