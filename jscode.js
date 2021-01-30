let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 12) {
        $this.css({ "font-size": "12px" });   
    }
});