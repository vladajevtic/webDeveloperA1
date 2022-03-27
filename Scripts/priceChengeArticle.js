let su = $('#su');
let bu = $('#bu');
let topPrice= $('#setTopPrice');
let middlePrice= $('#setMiddlePrice')
let lowerPrice = $('#setLowerPrice');
let offerCard = $('article .offers-cards .offer-card');
let changeHover = $('article .offers-cards .offer-card .footer .changeHover')
offerCard.mouseenter(function(){
    changeHover.css({"background-color": "#F2F2F2",'color': '#DA2A1C'})
})
su.click(function(){
    $(this).css({"font-weight": "900","border-bottom": "2px solid red"});
    bu.css({"font-weight": "600","border-bottom": "2px solid grey" });
    topPrice.text('2.399');
    middlePrice.text('2.099');
    lowerPrice.text('1.799');
});

bu.click(function(){
    $(this).css({"font-weight": "900","border-bottom": "2px solid red"});
    su.css({"font-weight": "600","border-bottom": "2px solid grey" });
    topPrice.text('1.499');
    middlePrice.text('1.599');
    lowerPrice.text('1.299');
});