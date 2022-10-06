export const ITEM_NAMES = {
  VEST: '+5 Dexterity Vest',
  BRIE: 'Aged Brie',
  MONGOOSE: 'Elixir of the Mongoose',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  TAFKAL80ETC: 'Backstage passes to a TAFKAL80ETC concert',
  CONJURED: 'Conjured Mana Cake'
}

export function AgedBrie(item) {
  if (item.quality < 50) {
    item.quality++;

    // Quality increases by 3 when there are 5 days or less
    if (item.sellIn < 6)
      item.quality++

  }

  // Quality increases by 2 when there are 10 days or less
  if (item.sellIn < 11)
    item.quality++


  item.sellIn--;

  // Quality drops to 0 after the concert.
  if (item.sellIn < 0)
    item.quality = 0

  // The Quality of an item is never more than 50
  if (item.quality > 50)
    item.quality = 50

  return item
}

export function Tafkal(item) {
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

export function Sulfuras(item) {
  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality.

  // The Quality of an item is never more than 50,
  // but "Sulfuras" is a legendary item and as such
  // its Quality is always 80 and it never alters.
  item.quality = 80
  return item
}

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

export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    switch (this.name) {
      case ITEM_NAMES.BRIE:
        AgedBrie(this)
        break
      case ITEM_NAMES.TAFKAL80ETC:
        Tafkal(this)
        break
      case ITEM_NAMES.SULFURAS:
        Sulfuras(this)
        break
      default:
        Default(this)
    }
  }
}
