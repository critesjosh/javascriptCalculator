var operationsString = "";
var binary = false;
var decimal = true;
var hexadecimal = false;
var firstNum;
var firstLength;
var secondNum;
var operator;
var result;

$(document).ready(function() {
  $(".decimal").show();
  $(".hexadecimal").hide();
  $(".binary").hide();

  $("#binary").click( function() {
    console.log("binary");
    $(".decimal").hide();
    $(".hexadecimal").hide();
    $(".binary").show();
    decimal = false;
    hexadecimal = false;
    binary = true;
    });

  $("#decimal").click( function() {
    console.log("decimal");
    $(".decimal").show();
    $(".hexadecimal").hide();
    $(".binary").hide();
    binary = false;
    hexadecimal = false;
    decimal = true;
    });

  $("#hexadecimal").click( function() {
    console.log("hex");
    $(".decimal").hide();
    $(".hexadecimal").show();
    $(".binary").hide();
    binary = false;
    decimal = false;
    hexadecimal = true;
    });

  $("#AC").click( function() {
    console.log("clear all");
    operationsString = 0;
    result = 0;
    $("#resultDislay").html(result);
    $("#operationsDisplay").html(operationsString);
    operationsString = "";
    result = 0;
    firstNum = 0;
    secondNum = 0;
    });

  $("#CE").click( function() {
    console.log("clear entry");
    var value = operationsString.length;
    operationsString = operationsString.substring(0, value - 1);
    $("#operationsDisplay").html(operationsString);
    });

  $(".a").click( function() {
    console.log("A");
    operationsString = operationsString + "A";
    $("#operationsDisplay").html(operationsString);
    });

  $(".b").click( function() {
    console.log("B");
    operationsString = operationsString + "B";
    $("#operationsDisplay").html(operationsString);
    });

  $(".c").click( function() {
    console.log("C");
    operationsString = operationsString + "C";
    $("#operationsDisplay").html(operationsString);
    });

  $(".d").click( function() {
    console.log("D");
    operationsString = operationsString + "D";
    $("#operationsDisplay").html(operationsString);
    });

  $(".e").click( function() {
    console.log("E");
    operationsString = operationsString + "E";
    $("#operationsDisplay").html(operationsString);
    });

  $(".f").click( function() {
    console.log("F");
    operationsString = operationsString + "F";
    $("#operationsDisplay").html(operationsString);
    });

  $(".7").click( function() {
    console.log("7");
    operationsString = operationsString + "7";
    $("#operationsDisplay").html(operationsString);
    });

  $(".8").click( function() {
    console.log("8");
    operationsString = operationsString + "8";
    $("#operationsDisplay").html(operationsString);
  });

  $(".9").click( function() {
    console.log("9");
    operationsString = operationsString + "9";
    $("#operationsDisplay").html(operationsString);
  });

  $(".4").click( function() {
    console.log("4");
    operationsString = operationsString + "4";
    $("#operationsDisplay").html(operationsString);
  });

  $(".5").click( function() {
    console.log("5");
    operationsString = operationsString + "5";
    $("#operationsDisplay").html(operationsString);
  });

  $(".6").click( function() {
    console.log("6");
    operationsString = operationsString + "6";
    $("#operationsDisplay").html(operationsString);
  });

  $(".1").click( function() {
    console.log("1");
    operationsString = operationsString + "1";
    $("#operationsDisplay").html(operationsString);
  });

  $(".2").click( function() {
    console.log("2");
    operationsString = operationsString + "2";
    $("#operationsDisplay").html(operationsString);
  });

  $(".3").click( function() {
    console.log("3");
    operationsString = operationsString + "3";
    $("#operationsDisplay").html(operationsString);
  });

  $(".0").click( function() {
    console.log("0");
    operationsString = operationsString + "0";
    $("#operationsDisplay").html(operationsString);
  });

  $(".point").click( function() {
    console.log(".");
    operationsString = operationsString + ".";
    $("#operationsDisplay").html(operationsString);
  });

  $("#minus").click( function() {
    console.log("-");
    if (!firstNum) {
      defineFirstNum();
    }
    if (binary){
      firstNum = parseInt(firstNum, 2);
      console.log(firstNum);
    }
    if (hexadecimal){
      firstNum = parseInt(firstNum, 16);
    }
    operator = "-";
    console.log(firstNum);
    operationsString = operationsString + "-";
    $("#operationsDisplay").html(operationsString);
  });

  $("#plus").click( function() {
    console.log("+");
    if (!firstNum) {
      defineFirstNum();
    }
    if (binary){
      firstNum = parseInt(firstNum, 2);
      console.log(firstNum);
    }
    if (hexadecimal){
      firstNum = parseInt(firstNum, 16);
    }
    console.log(firstNum);
    operator = "+";
    operationsString = operationsString + "+";
    $("#operationsDisplay").html(operationsString);
  });

  $("#divide").click( function() {
    console.log("/");
    if (!firstNum) {
      defineFirstNum();
    }
    if (binary){
      firstNum = parseInt(firstNum, 2);
      console.log(firstNum);
    }
    if (hexadecimal){
      firstNum = parseInt(firstNum, 16);
    }
    console.log(firstNum);
    operator = "/";
    operationsString = operationsString + "/";
    $("#operationsDisplay").html(operationsString);
    });

  $("#x").click( function() {
    console.log("x");
    if (!firstNum) {
      defineFirstNum();
    }
    if (binary){
      firstNum = parseInt(firstNum, 2);
      console.log(firstNum);
    }
    if (hexadecimal){
      firstNum = parseInt(firstNum, 16);
    }
    console.log(firstNum);
    operator = "*";
    operationsString = operationsString + "*";
    $("#operationsDisplay").html(operationsString);
  });

  $("#equals").click( function() {
    console.log("=");
    if (firstNum) {
      defineSecondNum();
    }
    if (binary) {
      secondNum = parseInt(secondNum, 2);
      result = eval(firstNum + operator + secondNum);
      resultBinary = result.toString(2);
      $("#resultDislay").html(resultBinary);
    } else if (hexadecimal){
      secondNum = parseInt(secondNum, 16);
      console.log(firstNum);
      console.log(secondNum);
      result = eval(firstNum + operator + secondNum);
      resultHex = result.toString(16);
      $("#resultDislay").html(resultHex);
    } else {
      result = eval(operationsString);
      $("#resultDislay").html(result);
    }
  });

  $("#test").click( function() {
    console.log(operationsString);
    $("#operationsDisplay").html(operationsString);
  });

});

var defineFirstNum = function() {
  firstLength = operationsString.length;
  firstNum = operationsString;
};

var defineSecondNum = function() {
  secondNum = operationsString.substring(firstLength + 1, operationsString.length);
};

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
      if (event.results.length > 0) {
        q.value = event.results[0][0].transcript;
        q.form.submit();
      }
    };
  }
