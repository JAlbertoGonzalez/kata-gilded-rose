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

export function Tafkal(item) {
  item.quality++
  // See revision number 2394 on SVN.
  if (item.sellIn < 11)
    item.quality++

  //Increases the Quality of Backstage Passes if the Quality is 6 or less.
  if (item.sellIn < 6)
    item.quality++

  item.sellIn--

  if (item.sellIn < 0)
    item.quality = 0

  if (item.quality > 50)
    item.quality = 50

  return item
}

export function Sulfuras(item) {
  // Inmutable item
  return item
}

export function Default(item) {
  if (item.quality > 0)
    item.quality--

  item.sellIn--

  if (item.sellIn < 0 && item.quality > 0)
    item.quality--

  if (item.quality > 50)
    item.quality = 50

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
