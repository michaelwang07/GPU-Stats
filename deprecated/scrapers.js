const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.type("*[id='part_category_search']", '4090', { delay: 1000 });
  const [el] = await page.$x('//*[@id="category_content"]/tr[1]/td[10]');
  const txt = await el.getProperties('textContent');
  const rawTxt = await txt.jsonValue();

  console.log({rawTxt});

  //browser.close();
}

scrapeProduct('https://pcpartpicker.com/products/video-card/#sort=price&page=1');