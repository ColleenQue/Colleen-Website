
(function ($) {
    //Let's start writing AJAX calls!
    //page load

    //corresponds to id

    var darkButton = $("#darkMode"),
    body =$("#main-body")

    function myFunction() {
        var element = document.body;

        //set dark = true if contains class dark-mode
        var x = document.getElementById("main-body").classList.contains("dark-mode")
        localStorage.setItem('dark', x);

        element.classList.toggle("dark-mode");
    }


    if(localStorage.getItem('dark')) {
        document.body.classList.add('dark-mode');
   }

    darkButton.click(function () {
        myFunction()
    })



})(window.jQuery);