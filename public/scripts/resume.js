
// {{#if dark}}
// <img id = "resume-img" src="/public/img/image.png" alt="Resume" >
// {{else}}
// <img id = "resume-img" src="/public/img/Resume.png" alt="Resume" >
// {{/if}}


(function ($) {
    //Let's start writing AJAX calls!
    //page load

    //corresponds to id

    let dark = false;
    var img = $("#resume-img")

    if (localStorage.getItem('dark')==="true") {
        
        img.attr("src","/public/img/Resume.png");
    }

    else{
        img.attr("src","/public/img/Resume.png");
    }



})(window.jQuery);