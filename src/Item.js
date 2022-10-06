import { ITEM_NAMES, AgedBrie, Default, Sulfuras, BackstagePasses } from './products'

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
      case ITEM_NAMES.BACKSTAGE:
        BackstagePasses(this)
        break
      case ITEM_NAMES.SULFURAS:
        Sulfuras(this)
        break
      default:
        Default(this)
    }
  }
}
