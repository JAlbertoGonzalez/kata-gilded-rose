export const ITEM_NAMES = {
  VEST: '+5 Dexterity Vest',
  BRIE: 'Aged Brie',
  MONGOOSE: 'Elixir of the Mongoose',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  TAFKAL80ETC: 'Backstage passes to a TAFKAL80ETC concert',
  CONJURED: 'Conjured Mana Cake'
}

export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}
