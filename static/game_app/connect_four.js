var player_one = $("#playerone").text()
var player_two = $("#playertwo").text()
$("#playerone").text(player_one + " it is your turn, You are Yellow")
$("#playertwo").text(player_two + " it is your turn, You are Red")

$(".board").toggle(false)
$(".restart").toggle(false)
var count = 1
$("#playerone").toggle(count % 2 === 1)
$("#playertwo").toggle(count % 2 === 0)
var array = [[],[],[],[],[],[]]
var winningFour = [[],[],[],[]]
var yellowWon = 0
var redWon = 0

function if_won(){
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < 7; j++) {
      array[i][j] = $(".row" + (i+1)).eq(j).attr("class").split(" ")[3]
    }
  }
    if (rowCheck(array) == 1 || colCheck(array) == 1 || dia_check(array) == 1) {
      $("#playerone").text(player_one + " won in " + (count+1)/2 + " moves" ).css({"font-size": "50px","font-family": "Galada"})
      $("#id_player_name").val(player_one)
      $("#id_moves").val((count+1)/2)
      setInterval(function(){$("#playerone").css("color", getRandomColor())}, 300)
      $("h1").fadeOut(100)
      $("#lead").fadeOut(100)
      $(".restart").toggle(true)
      $(".board").toggle(true)
      return 1
    }else if (rowCheck(array) == 2 || colCheck(array) == 2 || dia_check(array) == 2) {
      $("#playertwo").text(player_two + " won in " + count/2 + " moves").css({"font-size": "50px", "color": "red","font-family": "Galada"})
      $("#id_player_name").val(player_two)
      $("#id_moves").val(count/2)
      setInterval(function(){$("#playertwo").css("color", getRandomColor())}, 300)
      $("h1").fadeOut(100)
      $("#lead").fadeOut(100)
      $(".restart").toggle(true)
      $(".board").toggle(true)
      return 1
    }
}


function rowCheck(array){
for (var i = 5; i >= 0; i--) {
  for (var j = 0; j < 4; j++) {
    if(array[i][0+j] == "turnRed" && array[i][1+j] == "turnRed" && array[i][2+j] == "turnRed" && array[i][3+j] == "turnRed"){
      winningFour = [[i,0+j], [i,1+j], [i,2+j], [i,3+j]]
      for (var k = 0; k < winningFour.length; k++) {
        winningFour[k][0]
        $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
      }
      return 2
    }else if (array[i][0+j] == "turnYellow" && array[i][1+j] == "turnYellow" && array[i][2+j] == "turnYellow" && array[i][3+j] == "turnYellow") {
      winningFour = [[i,0+j], [i,1+j], [i,2+j], [i,3+j]]
      for (var k = 0; k < winningFour.length; k++) {
        winningFour[k][0]
        $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
      }
      return 1
    }
  }
}
}

function colCheck(array){
  for (var j = 0; j < 7; j++) {
    for (var i = 0; i < 3; i++) {
      if(array[i+0][j] == "turnRed" && array[i+1][j] == "turnRed" && array[i+2][j] == "turnRed" && array[i+3][j] == "turnRed"){
        winningFour = [[i+0,j], [i+1,j], [i+2,j], [i+3,j]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
        }
        return 2
      }else if (array[i+0][j] == "turnYellow" && array[i+1][j] == "turnYellow" && array[i+2][j] == "turnYellow" && array[i+3][j] == "turnYellow") {
        winningFour = [[i+0,j], [i+1,j], [i+2,j], [i+3,j]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
        }
        return 1
      }
    }
  }
}

function dia_check(array){
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 3; i++) {
      if(array[i+0][j+0] == "turnRed" && array[i+1][j+1] == "turnRed" && array[i+2][j+2] == "turnRed" && array[i+3][j+3] == "turnRed"){
        winningFour = [[i+0,j+0], [i+1,j+1], [i+2,j+2], [i+3,j+3]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
        }
        return 2
      }else if (array[i+0][j+0] == "turnYellow" && array[i+1][j+1] == "turnYellow" && array[i+2][j+2] == "turnYellow" && array[i+3][j+3] == "turnYellow") {
        winningFour = [[i+0,j+0], [i+1,j+1], [i+2,j+2], [i+3,j+3]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")

      }
      return 1
    }
  }
}
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 3; i++) {
      if(array[i+3][j+0] == "turnRed" && array[i+2][j+1] == "turnRed" && array[i+1][j+2] == "turnRed" && array[i+0][j+3] == "turnRed"){
        winningFour = [[i+3,j+0], [i+2,j+1], [i+1,j+2], [i+0,j+3]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")}
        return 2
      }else if (array[i+3][j+0] == "turnYellow" && array[i+2][j+1] == "turnYellow" && array[i+1][j+2] == "turnYellow" && array[i+0][j+3] == "turnYellow") {
        winningFour = [[i+3,j+0], [i+2,j+1], [i+1,j+2], [i+0,j+3]]
        for (var k = 0; k < winningFour.length; k++) {
          winningFour[k][0]
          $(".row" + (winningFour[k][0]+1)).eq(winningFour[k][1]).css("border","10px #EC368E  solid")
        }
        return 1
      }
    }
  }
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}




$(".col1, .col2, .col3, .col4, .col5, .col6, .col7").click(function(){
  $("." + this.className.split(" ")[3]).eq(-1).toggleClass("turnYellow", count % 2 === 1)
  $("." + this.className.split(" ")[3]).eq(-1).toggleClass("turnRed", count % 2 === 0)
  $("." + this.className.split(" ")[3]).eq(-1).removeClass(this.className.split(" ")[3])
  var won = if_won()
  if (won != 1) {
    count++
    $("#playerone").toggle(count % 2 === 1)
    $("#playertwo").toggle(count % 2 === 0)
    if(count === 42){
      $("#playerone").text("Out of Chips!")
      $("#playertwo").toggle(true)
    }
  }

})
































// $(".col2").click(function(){
//   $(".col2").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col2").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col2").eq(-1).removeClass("col2")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
// $(".col3").click(function(){
//   $(".col3").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col3").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col3").eq(-1).removeClass("col3")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
// $(".col4").click(function(){
//   $(".col4").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col4").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col4").eq(-1).removeClass("col4")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
//
// $(".col5").click(function(){
//   $(".col5").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col5").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col5").eq(-1).removeClass("col5")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
// $(".col6").click(function(){
//   $(".col6").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col6").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col6").eq(-1).removeClass("col6")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
// $(".col7").click(function(){
//   $(".col7").eq(-1).toggleClass("turnBlue", count % 2 === 1)
//   $(".col7").eq(-1).toggleClass("turnRed", count % 2 === 0)
//   $(".col7").eq(-1).removeClass("col7")
//   count++
//   $("#playerone").toggle(count % 2 === 1)
//   $("#playertwo").toggle(count % 2 === 0)
// })
//





// i++
// $(".col" + i).click(function(){
// $(".col" + i).eq(-1).toggleClass("turnBlue", count % 2 === 1)
// $(".col" + i).eq(-1).toggleClass("turnRed", count % 2 === 0)
// $(".col" + i).eq(-1).removeClass("col" + i)
// count++
// $("#playerone").toggle(count % 2 === 1)
// $("#playertwo").toggle(count % 2 === 0)
// })













// while (turn < 42) {

  // if (turn % 2 === 0) {
    // $("#player").text(player_one + "'s turn, You are Blue")
    // $(".col1").click(function(){
    //   $(".col1").eq(-1).addClass("turnBlue")
    //   $(".col1").eq(-1).removeClass("col1")
    // })
    // $(".col2").click(function(){
    //   $(".col2").eq(-1).addClass("turnBlue")
    //   $(".col2").eq(-1).removeClass("col2")
    // })
    // $(".col3").click(function(){
    //   $(".col3").eq(-1).addClass("turnBlue")
    //   $(".col3").eq(-1).removeClass("col3")
    // })
    // $(".col4").click(function(){
    //   $(".col4").eq(-1).addClass("turnBlue")
    //   $(".col4").eq(-1).removeClass("col4")
    // })
    // $(".col5").click(function(){
    //   $(".col5").eq(-1).addClass("turnBlue")
    //   $(".col5").eq(-1).removeClass("col5")
    // })
    // $(".col6").click(function(){
    //   $(".col6").eq(-1).addClass("turnBlue")
    //   $(".col6").eq(-1).removeClass("col6")
    // })
    // $(".col7").click(function(){
    //   $(".col7").eq(-1).addClass("turnBlue")
    //   $(".col7").eq(-1).removeClass("col7")
    // })

    // }
  // else if (turn % 2 === 1) {
  //   $("#player").text(player_two + "'s turn, You are Red")
  //   turn += 1
  // }
  // turn += 1
// }


//
//
// function player_one_turn() {
//
//     $(".col1").click(function(){
//       $(".col1").eq(-1).addClass("turnBlue")
//       $(".col1").eq(-1).removeClass("col1")
//     })
//     $(".col2").click(function(){
//       $(".col2").eq(-1).addClass("turnBlue")
//       $(".col2").eq(-1).removeClass("col2")
//     })
//     $(".col3").click(function(){
//       $(".col3").eq(-1).addClass("turnBlue")
//       $(".col3").eq(-1).removeClass("col3")
//     })
//     $(".col4").click(function(){
//       $(".col4").eq(-1).addClass("turnBlue")
//       $(".col4").eq(-1).removeClass("col4")
//     })
//     $(".col5").click(function(){
//       $(".col5").eq(-1).addClass("turnBlue")
//       $(".col5").eq(-1).removeClass("col5")
//     })
//     $(".col6").click(function(){
//       $(".col6").eq(-1).addClass("turnBlue")
//       $(".col6").eq(-1).removeClass("col6")
//     })
//     $(".col7").click(function(){
//       $(".col7").eq(-1).addClass("turnBlue")
//       $(".col7").eq(-1).removeClass("col7")
//     })
//   }



//
// $(".col1").click(function(){
//   $(".col1").eq(-1).addClass("turnRed")
//   $(".col1").eq(-1).removeClass("col1")
// })
// $(".col2").click(function(){
//   $(".col2").eq(-1).addClass("turnRed")
//   $(".col2").eq(-1).removeClass("col2")
// })
// $(".col3").click(function(){
//   $(".col3").eq(-1).addClass("turnRed")
//   $(".col3").eq(-1).removeClass("col3")
// })
// $(".col4").click(function(){
//   $(".col4").eq(-1).addClass("turnRed")
//   $(".col4").eq(-1).removeClass("col4")
// })
// $(".col5").click(function(){
//   $(".col5").eq(-1).addClass("turnRed")
//   $(".col5").eq(-1).removeClass("col5")
// })
// $(".col6").click(function(){
//   $(".col6").eq(-1).addClass("turnRed")
//   $(".col6").eq(-1).removeClass("col6")
// })
