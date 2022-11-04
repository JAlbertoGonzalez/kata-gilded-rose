import {
  ITEM_NAMES,
  AgedBrieUpdate,
  BackstagePassesUpdate,
  DefaultUpdate,
  SulfurasUpdate,
} from "./products"
const { BRIE, BACKSTAGE, SULFURAS } = ITEM_NAMES

export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    switch (this.name) {
      case BRIE:
        AgedBrieUpdate(this)
        break
      case BACKSTAGE:
        BackstagePassesUpdate(this)
        break
      case SULFURAS:
        SulfurasUpdate(this)
        break
      default:
        DefaultUpdate(this)
    }
  }
}
