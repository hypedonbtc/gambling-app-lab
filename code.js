var Username;
var Password;
var loginu; // dont worry about this var
var loginp; // dont worry about this var either 
var money = 0;
var percent;
var betmoney = 0;
var spamNumber = 0;
var countdown = 100;
var jackpot = 1000000;

// all the functions for the bet system
function hugewin() {
  money = betmoney + jackpot;
  setText("moneyAmmnt", "Money : " + money);
}
function win() {
  betmoney = betmoney*2;
  money = money + betmoney;
  setText("moneyAmmnt", "Money : " + money);
}
function lost() {
  betmoney = betmoney*2;
  money = money - betmoney;
  setText("moneyAmmnt", "Money : " + money);
}
function bet() {
  betmoney = getText("dollarbet");
  timedLoop(10, function() {
    setProperty("betPercent", "font-size", 130);
    spamNumber = randomNumber(1, 100);
    setText("betPercent", spamNumber);
    countdown = countdown - 1;
    countdown = countdown;
    if(countdown == 1) {
    stopTimedLoop();
    countdown = 100;
    percent = randomNumber(1, 100);
    if (percent == 50) {
    hugewin();
    }
    setText("betPercent", percent);
    }
  });
}






// all the functions for the login system
onEvent("redir", "click", function() {
  setScreen("main");
});
function login() {
  Username = getText("createUser");
  Password = getText("createPass");
}
onEvent("createAcc", "click", function() {
  login();
  setScreen("loginScreen");
  
});
onEvent("loginButton", "click", function() {
  loginu = getText("usernameLogin");
  loginp = getText("text_input4");
  if (loginu == Username && loginp == Password) {
    setText("errorLabel", "login success");
    setScreen("conditions");
    setText("welcome", "welcome, " + Username);
    
  } else {
    setText("errorLabel", "Login failed.");
  }
});



// add the money function that also restricts the user having over $10
onEvent("addMoney", "click", function() {
  money = money + 1;
  setText("moneyAmmnt", "Money : $" + money);
  if (money >10) {
    money = money - 1;
    setText("moneyAmmnt", "Money : $" + money);
  }
});



// main bet interface that also uses the main funtions used above
onEvent("under50", "click", function() {
  bet();
  
  if (percent <50) {
    win();
  } else {
    lost();
  }
  
});
onEvent("over50", "click", function() {
  bet();
  if (percent>50) {
    win();
  } else {
    lost();

  }
});


