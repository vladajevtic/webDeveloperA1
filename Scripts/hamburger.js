let hamburger = $('#hamburger button');
console.log(hamburger);

hamburger.click(function(){   
    $('.container header .navbar .navbar-list #firstlist ul').toggle();   
})