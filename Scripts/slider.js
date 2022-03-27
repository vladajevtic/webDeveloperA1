const photos = [
    {
        imgSrc:"./Assets/Image/Rectangle 79.png"
    },
    {
        imgSrc:"./Assets/Image/viz 1.png"
    }
];

let rightBtn= $('#right');
let leftBtn= $('#left');
let imgSrc = $('#slide')  //.attr('src');
let tekst1= $('.slider .dodaci .tekst1')
let tekst2= $('.slider .dodaci .tekst2')
console.log(imgSrc)

rightBtn.click(function(){
    $(this).css({'display':'none'});
    leftBtn.css({'display':'inline'});
    imgSrc.attr("src",`${photos[1].imgSrc}`)
    tekst1.css({'display':'none'})
    tekst2.css({'display':'block'})
})
leftBtn.click(function(){
    $(this).css({'display':'none'});
    rightBtn.css({'display':'inline'});
    imgSrc.attr("src",`${photos[0].imgSrc}`);
    tekst1.css({'display':'block'})
    tekst2.css({'display':'none'})
})