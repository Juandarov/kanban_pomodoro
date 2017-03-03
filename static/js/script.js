$(document).ready(function() {
    // $(function() {
    //     $("#hms_timer").countdowntimer({
    //         minutes: 00,
    //         seconds: 00,
    //         size: "lg",
    //         timeUp: timeisUp
    //     });
    // });

    var working = false;
    $("#btnClicker").on("click", function() {
        $('ul').append('<li>' + '<div class="taches">' + '<p id="myDiv">' + '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>' + $('#newtache').val() + '</p>' + '<div class="triangle_right"></div>' + '</div>' + '</li>');

        // TO CLEAR A TACHE
        $(".glyphicon-remove-sign").click(function() {
            $(this).parent().parent().parent().remove();
        });

        // MOVE TACHE TO EN COURS
        $(".taches").on("click", function() {
            if(working == false) {
                working = true;

                $(this).remove();
                $(this).appendTo("#encours");
                $(this).addClass("tachesquest");
                $("h3").remove();

                $("#hms_timer").countdowntimer({
                    minutes: 00,
                    seconds: 05,
                    size: "lg",
                    pauseButton: "pauseBtnhms",
                    stopButton: "stopBtnhms",
                    timeUp: timeisUp
                });

                $(".btn-danger").click(function() {
                    $("#hms_timer").countdowntimer({
                            minutes: 00,
                            seconds: 00,
                            size: "lg",
                            timeUp: timeisUp
                    });
                    working = false;
                });



                function timeisUp() {
                    $("#encours").append(
                        '<div class="finishquest">' +
                        '<button type="button" class="btn btn-warning">Restart</button>' +
                        '<p>FINISH?</p>' +
                        '<button type="button" class="btn btn-success">Success</button>' +
                        '</div>');

                        $(".btn-success").click(function() {
                            working = false;
                            $(".finishquest").remove();
                            $(".tachesquest").appendTo("#fait");
                            // $('#hms_timer').val();
                            //
                            // console.log($('#hms_timer').val());
                        });

                        $(".btn-warning").click(function() {

                            $(".finishquest").remove();
                            $("#hms_timer").countdowntimer({
                                minutes: 00,
                                seconds: 05,
                                size: "lg",
                                pauseButton: "pauseBtnhms",
                                stopButton: "stopBtnhms",
                                timeUp: timeisUp
                            });

                        });

                    }
            }
        });
    });

});
