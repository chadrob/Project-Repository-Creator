const puppeteer = require('puppeteer');
const newFile = process.argv[2];

// go to GitHub and create new repository
(async () => {
    // launch browser
    const browser = await puppeteer.launch();
    // load page
    const page = await browser.newPage();
    // go to GitHub
    await page.goto('https://github.com/');
    // click on sign in
    await Promise.all([
        page.waitForNavigation(),
        page.evaluate(() => {
            document.querySelector("body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3").click();
        })
      ]);   
    // take screenshot
    await page.screenshot({path: '/Users/Chad/Documents/myProjects/projectCreator/screenshot.png'});

    // close browser
    await browser.close();
})();

