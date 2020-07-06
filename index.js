const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true})

// nightmare   .goto('https://duckduckgo.com')
// .type('#search_form_input_homepage', 'github nightmare')
// .click('#search_button_homepage')   .wait('#r1-0 a.result__a')   .evaluate(()
// => document.querySelector('#r1-0 a.result__a').href)   .end()
// .then(console.log)   .catch(error => {     console.error('Search failed:',
// error)   })

nightmare
    .goto("https://www.yna.co.kr/news?site=navi_news")
    .evaluate(
        () => document.querySelector('#container > div > div > div.section01 > section > div.list-type038').outerText
    )
    .end()
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.error(e);
    });