$(document).ready(function() {
  $("form.quiz").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($('input:radio[name=question1]:checked').val());
    // console.log("Answer 1 is: " + answer1);
    var answer2 = parseInt($('input:radio[name=question2]:checked').val());
    // console.log("Answer 2 is: " + answer2)
    var answer3 = parseInt($('input:radio[name=question3]:checked').val());
    // console.log("Answer 3 is: " + answer3)
    var answer4 = parseInt($('input:radio[name=question4]:checked').val());
    // console.log("Answer 4 is: " + answer4)
    var answer5 = parseInt($('input:radio[name=question5]:checked').val());
    // console.log("Answer 5 is: " + answer5)
    var answer6 = parseInt($('input:radio[name=question6]:checked').val());
    // console.log("Answer 5 is: " + answer6)
    var userScore = (answer1 + answer2 + answer3 + answer4 + answer5 + answer6)
    var firstNameInput = $("input#firstName").val();

    $('.firstName').text(firstNameInput);

    $("#quiz").fadeOut();

    $("#result").show();

    if (userScore <= 10) {
        $("#borabora").show();

    }  else if (userScore <= 14) {
        $("#norway").show();

    }  else if (userScore <= 18) {
        $("#newyork").show();

    }
  });
});
