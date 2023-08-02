const puppeteer = require("puppeteer");

const url = "https://orteil.dashnet.org/cookieclicker/";
const cookieBtnId = "#bigCookie";

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
  });
  const page = await browser.newPage();
  // const navigationPromise = page.waitForNavigation();

  await page.goto(`${url}`);

  // await navigationPromise;

  await page.waitForSelector("#langSelect-EN");
  await page.click("#langSelect-EN");

  await page.waitForSelector(cookieBtnId);

  let i = -1;
  while (i < 0) {
    await page.click(cookieBtnId);
  }
})();
