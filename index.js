const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.letuska.cz/vseobecne-obchodni-podminky');
  // await page.goto('https://www.letuska.cz/');

  // Get a screenshot of the page
  // await page.screenshot({ path: 'podminky.png', fullPage: true });

  // Get a PDF of the page
  await page.pdf({ path: 'podminky.pdf', format: 'A4' });

  // Get all links
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('a'), (e) => e.href)
  // );
  // console.log(links);

  await browser.close();
}

run();
