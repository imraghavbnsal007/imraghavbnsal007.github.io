console.log("site has loaded")


var menuObject = {
  "Burger": {
    "Cheese Heaven": [""],
    "Monster Burger": [""],
    "Trillion Dollar Burger": [""]    
  },
  "Pizza": {
    "Margherita": [""],
    "Vegetarian pizza": [""],
	"Chicken supreme": [""],
	"Beef Supreme Pizza": [""],
	"Pepperoni Pleasure": [""],
	"BBQ Delux":[""],
	"Four Season Pizza": [""],
	"Hawallian": [""]  
  },
    "Soft Drink": {
    "Coca Cola": [""],
    "Fanta": [""],
	"7UP": [""]
  },
  
}
window.onload = function() {
  var burgerSel = document.getElementById("burger");
  var pizzaSel = document.getElementById("pizza");

  for (var x in menuObject) {
    burgerSel.options[burgerSel.options.length] = new Option(x, x);
  }
  burgerSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
   pizzaSel.length = 1;
    //display correct values
    for (var y in menuObject[this.value]) {
      pizzaSel.options[pizzaSel.options.length] = new Option(y, y);
    } 
  }
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function myFunction1() {
  var checkBox = document.getElementById("myCheck1");
  var text = document.getElementById("text1");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
