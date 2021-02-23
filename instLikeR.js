function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function instagrammbot(){
    let count = 0;
    setInterval(async function(){
        var like = document.querySelector('.ltpMr  .wpO6b');
        var next = document.querySelector('a.coreSpriteRightPaginationArrow');
        if(like){
            count++;
            like.click();
            console.log(count);
            await sleep(1000);
        }
        next.click();
    },5000);
}
instagrammbot();