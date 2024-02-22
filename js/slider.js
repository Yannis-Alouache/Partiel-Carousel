
let sliderCount = 0
let numberOfImage = $(".slider").children("div").length
let carouselEnCours = false;
let intervalID;


$("#toolbar-toggle").click(function(){
    if ($('.toolbar').css('display') == 'none') $(".toolbar").show();
    else $(".toolbar").hide()
});



$('#slider > div').each(function () {
    if (!$(this).data("active")) {
        $(this).hide()
    }
});



$("#slider-next").click(function(){
    let $elementActif = $(".slider").children("div[data-active='true']");
    $elementActif.attr("data-active", false);

    let $elementSuivant = $elementActif.next();

    if ($elementSuivant.length === 0) {
        $elementSuivant = $(".slider").children("div").first();
    }

    $elementSuivant.attr("data-active", true);

    $elementActif.hide();
    $elementSuivant.show();
})

$("#slider-previous").click(function(){
    let $elementActif = $(".slider").children("div[data-active='true']");
    $elementActif.attr("data-active", false);

    let $elementPrecedent = $elementActif.prev();

    if ($elementPrecedent.length === 0) {
        $elementPrecedent = $(".slider").children("div").last();
    }

    $elementPrecedent.attr("data-active", true);
    $elementActif.hide();
    $elementPrecedent.show();
});

$("#slider-random").click(function(){
    let indexAleatoire = Math.floor(Math.random() * numberOfImage);
    let $elementAleatoire = $(".slider").children("div").eq(indexAleatoire);
    
    $(".slider").children("div[data-active='true']").hide();
    
    $elementAleatoire.attr("data-active", true);
    
    $elementAleatoire.show();
});

function demarrerCarousel() {
    intervalID = setInterval(function() {
        let $elementActif = $(".slider").children("div[data-active='true']");
        
        $elementActif.attr("data-active", false);

        let $elementSuivant = $elementActif.next();

        if ($elementSuivant.length === 0) {
            $elementSuivant = $(".slider").children("div").first();
        }

        $elementSuivant.attr("data-active", true);

        $elementActif.hide();

        $elementSuivant.show();
    }, 2000);
}

function arreterCarousel() {
    clearInterval(intervalID);
}

$("#slider-toggle").click(function(){
    if (carouselEnCours) {
        arreterCarousel();
        carouselEnCours = false;
    } else {
        demarrerCarousel();
        carouselEnCours = true;
    }
});
