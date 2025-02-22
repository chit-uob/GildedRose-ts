import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('given foo is in inventory, when 10 days passes, then sellIn decreases by 10', () => {
    const gildedRose = new GildedRose([new Item('foo', 15, 0)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(5);
  })

  it('given foo is in inventory, when 10 days passes, then quality decreases by 10', () => {
    const gildedRose = new GildedRose([new Item('foo', 15, 15)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(5);
  })

  it('given foo is in inventory and sellIn is negative, when 10 days passes, then quality decreases by 20', () => {
    const gildedRose = new GildedRose([new Item('foo', -5, 30)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(10);
  })

  it('given foo is in inventory and sellIn is 5, when 10 days passes, then quality decreases by 15', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 30)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(15);
  })

  it('given foo is in inventory and quality is 5, when 10 days passes, then quality is 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 15, 5)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  })

  it('given Aged Brie is in inventory, when 10 days passes, then quality increase by 10', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 20, 10)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(20);
  })

  it('given Aged Brie is in inventory and sellIn is negative, when 10 days passes, then quality increase by 20', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -10, 10)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(30);
  })

  it('given Aged Brie is in inventory, when 100 days passes, then quality is 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 20, 10)]);

    let items;
    for (let i = 0; i < 100; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  })

  it('given Sulfuras is in inventory, when 10 days passes, then quality is 80', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 20, 80)]);

    let items;
    for (let i = 0; i < 100; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  })

  it('given Sulfuras is in inventory and sellIn is negative, when 10 days passes, then quality is 80', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -20, 80)]);

    let items;
    for (let i = 0; i < 100; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  })

  it('given Backstage passes is in inventory and sellIn 20 days, when 1 days passes, then quality increase by 1', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 5)]);

    let items;
    for (let i = 0; i < 1; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
  })

  it('given Backstage passes is in inventory and sellIn 10 days, when 1 days passes, then quality increase by 2', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);

    let items;
    for (let i = 0; i < 1; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(7);
  })

  it('given Backstage passes is in inventory and sellIn 5 days, when 1 days passes, then quality increase by 3', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);

    let items;
    for (let i = 0; i < 1; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
  })

  it('given Backstage passes is in inventory and sellIn 0 days, when 1 days passes, then quality becomes 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);

    let items;
    for (let i = 0; i < 1; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  })

  it('given Conjured Mana Cake is in inventory, when 10 days passes, then quality decreases by 20', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 15, 30)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(10);
  })

  it('given Conjured Mana Cake is in inventory and sellIn is negative, when 5 days passes, then quality decreases by 20', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -5, 30)]);

    let items;
    for (let i = 0; i < 5; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(10);
  })

  it('given Conjured Mana Cake is in inventory and sellIn is 5, when 10 days passes, then quality decreases by 30', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 40)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(10);
  })

  it('given Conjured Mana Cake is in inventory and quality is 5, when 10 days passes, then quality is 0', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 15, 5)]);

    let items;
    for (let i = 0; i < 10; i++) items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  })


  // kevin test cases

  it('Normal items degrade by 1 unit per day before expiring', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Normal Item', 1, 10)]);

    // When
    const items = gildedRose.updateQuality();

    // Then
    expect(items[0].quality).toBe(9);
  });

  it('Normal items degrade by 2 unit per day after expiring', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Normal Item', 0, 10)]);

    // When
    const items = gildedRose.updateQuality();

    // Then
    expect(items[0].quality).toBe(8);
  });

  it('Normal items degrade by 1 unit before expiring, then expires and degrades by 2 units', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Normal Item', 1, 10)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(7);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Aged Brie increases quality instead of decrease', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 10)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Sulfuras stay at quality = 80 and sellIn doesnt change', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(1);
  });

  it('Backstage ticket increases in quality by 1 unit when more than 10 days left', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 30)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(32);
  });

  it('Backstage ticket increases in quality by 2 units when 6 to 10 days left', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 30)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(34);
  });

  it('Backstage ticket increases in quality by 3 units when less than 6 days left', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(36);
  });

  it('Backstage ticket changes to quality = 0 after concert happens', () => {
    // Given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30)]);

    // When
    const items = new GildedRose(gildedRose.updateQuality()).updateQuality();

    // Then
    expect(items[0].quality).toBe(0);
  });

});

