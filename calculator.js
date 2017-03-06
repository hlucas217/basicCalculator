number = 0;
storage = 0;
operator = "";

function pressKey(key) {

    number = number * 10;
    number = number + key;
    tempNumber = number;
    displayStuff();
};

function pressOperator(op) {
    operator = op;
    storage = number;
    displayStuff();
    number = 0;
};

function pressClear() {
    number = 0;
    storage = 0;
    displayStuff();
};

function pressEquals() {
    switch (operator) {
        case "+":
            number = storage + number;
            storage = 0;
            operator = "";
            break;

        case "-":
            number = storage - number;
            storage = 0;
            operator = ""
            break;

        case "*":
            number = storage * number;
            strorage = 0;
            operator = "";
            break;

        case "/":
            number = storage / number;
            storage = 0;
            operator = "";
            break;
        }

            displayStuff();
            number = 0;

};

function displayStuff() {
    document.getElementById('display').innerHTML = number;
    document.getElementById('pressOperator');
    document.getElementById('PressClear');	
};