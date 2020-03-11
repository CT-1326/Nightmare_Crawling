const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
    .goto('https://sports.news.naver.com/news.nhn?oid=144&aid=0000661244')
    .evaluate(() => {
        return document
            .querySelector("#ranking1")
            .innerHTML;
    })
    .end()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('err : ', err);
    })