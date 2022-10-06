import Item from './Item'

const itemNames = {
  VEST: '+5 Dexterity Vest',
  BRIE: 'Aged Brie',
  MONGOOSE: 'Elixir of the Mongoose',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  TAFKAL80ETC: 'Backstage passes to a TAFKAL80ETC concert',
  CONJURED: 'Conjured Mana Cake'
}

const GildedRose = function () {
  var items = []
  items.push(new Item(itemNames.VEST, 10, 20))
  items.push(new Item(itemNames.BRIE, 2, 0))
  items.push(new Item(itemNames.MONGOOSE, 5, 7))
  items.push(new Item(itemNames.SULFURAS, 0, 80))
  items.push(new Item(itemNames.TAFKAL80ETC, 15, 20))
  items.push(new Item(itemNames.CONJURED, 3, 6))
  GildedRose.updateQuality(items)
}

GildedRose.updateQuality = function (items) {
  for (const item of items) {
    if (itemNames.BRIE !== item.name && itemNames.TAFKAL80ETC !== item.name) {
      //TODO: Improve this code.
      if (item.quality > 0 && itemNames.SULFURAS !== item.name)
        item.quality--

    } else {
      if (item.quality < 50) {
        item.quality++
        if (itemNames.BRIE === item.name) {
          if (item.sellIn < 6)
            item.quality++


          //Increases the Quality of the stinky cheese if its 11 days to due date.
          if (item.sellIn < 11)
            item.quality++

        }
        if (itemNames.TAFKAL80ETC === item.name && item.quality < 50) {
          // See revision number 2394 on SVN.
          if (item.sellIn < 11)
            item.quality++

          //Increases the Quality of Backstage Passes if the Quality is 6 or less.
          if (item.sellIn < 6)
            item.quality++

        }
      }
    }
    if (itemNames.SULFURAS !== item.name)
      item.sellIn--

    if (item.sellIn < 0) {
      if (itemNames.BRIE !== item.name) {
        if (itemNames.TAFKAL80ETC !== item.name) {
          if (item.quality > 0 && itemNames.SULFURAS !== item.name)
            item.quality--

        } else {
          //TODO: Fix this.
          item.quality = 0
        }
      } else {
        if (item.quality < 50)
          item.quality++ // Not covered by tests

        if (itemNames.BRIE === item.name && item.sellIn <= 0)
          item.quality = 0
      }
    }
    if (itemNames.SULFURAS !== item.name && item.quality > 50)
      item.quality = 50
  }
  return items
};

export default GildedRose