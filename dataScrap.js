const puppeteer = require('puppeteer');

(async()=> {
    let specificUrl = 'https://www.imdb.com/title/tt0137523/?ref_=tt_sims_tti';

    let browser = await puppeteer.launch({headless:false});

    let newPage = await browser.newPage();
    await newPage.goto(specificUrl, {waitUntil:'networkidle2'});

   let data = await newPage.evaluate(()=> {
        let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
        let ratingNote = document.querySelector('span[itemprop="ratingValue"]').innerText;
        let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;

    return {
        title,
        ratingNote,
        ratingCount
    }
    })
    console.log(data)

    debugger;

    await browser.close();
})();