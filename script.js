document.addEventListener("DOMContentLoaded", function () {
    function Menubar() {
        var x = document.getElementById("myMenu");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    }

    let mybutton = document.getElementById("myBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Add this line to attach topFunction to the button's click event
    mybutton.addEventListener("click", topFunction);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                500
            );
            Menubar(); // Close the mobile menu when a link is clicked
        }
    });
});
