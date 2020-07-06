const Nightmare = require('nightmare')
const nightmare = Nightmare({});

function test() {
  return new Promise(req=>{
    nightmare
    .goto('https://www.sungkyul.ac.kr/mbs/skukr/subview.jsp?id=skukr_010802000000')
    .evaluate(()=>document.querySelector("#con-wrap > div.content > dl:nth-child(6) > dd").textContent)
    .end()
    .then((res)=>{
      req(res);
    })
    .catch((e)=>{
      console.error(e)
    });
  }); 
}

test().then(res=>{
  console.log(res);
  console.log(typeof(res));  
})