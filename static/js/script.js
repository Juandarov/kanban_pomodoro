$(document).ready(function() {
    // $(function() {
    //     $("#hms_timer").countdowntimer({
    //         minutes: 00,
    //         seconds: 05,
    //         size: "lg",
    //         pauseButton: "pauseBtnhms",
    //         stopButton: "stopBtnhms",
    //         timeUp: timeisUp
    //     });
    // });

    $("#btnClicker").on("click", function() {
        $('ul').append('<li>' + '<div class="taches">' + '<p id="myDiv">' + '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>' + $('#newtache').val() + '</p>' + '<div class="triangle_right"></div>' + '</div>' + '</li>');

        // TO CLEAR A TACHE
        $(".glyphicon-remove-sign").click(function() {
            $(this).parent().parent().parent().remove();
        });

        // MOVE TACHE TO EN COURS
        $(".taches").click(function() {
            $(this).remove();
            $(this).appendTo("#encours");
            $(function() {
                $("#hms_timer").countdowntimer({
                    minutes: 25,
                    seconds: 00,
                    size: "lg",
                    pauseButton: "pauseBtnhms",
                    stopButton: "stopBtnhms"
                    // $(this).remove();
                });

            })
        });
    });

    function timeisUp() {
        // alert("yolo")
    }


});
