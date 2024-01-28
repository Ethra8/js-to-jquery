$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream1_btn").on("mouseover", function() {
     $(".stream1").removeClass('highlight_stream');
     $(".stream2").removeClass('highlight_stream');
     $(".stream3").removeClass('highlight_stream');
     $(".stream1").addClass('highlight_stream');
   });
   $("#stream1_btn").on("mouseout", function() {
     $(".stream1").removeClass('highlight_stream');
     $(".stream2").removeClass('highlight_stream');
     $(".stream3").removeClass('highlight_stream');
     $(".stream1").removeClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   // same as on("click", function(){}) ===> .click(function(){})
   $("#stream3_btn").click( function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 