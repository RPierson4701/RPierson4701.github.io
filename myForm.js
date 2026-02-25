    alert("Hello World!");

    const button = document.querySelector("#toBeClicked");

    function buttonPressed(){
        alert("Successfully Pressed Button");
    }

    button.addEventListener("click", buttonPressed);

    const buttonA = document.querySelector("#buttonA");
    const headingA = document.getElementById("headingA");

    buttonA.addEventListener("click", function() {
        const name = prompt("What is your name?");
        alert(`Hello ${name}, nice to see you!`);
        headingA.textContent = `Welcome, ${name}`;
    })


    const txtBox = document.querySelector("#textBox");
    const output = document.querySelector("#output");

    txtBox.addEventListener("keydown", (event) => {
        output.textContent = `You pressed  "${event.key}".`;
    });


    const message = document.querySelector("#message");
    const chgTxtBtn = document.querySelector("#changeText");

    function infoReveal(){
        if (message.textContent == "Hello, JavaScript!"){
            message.textContent = "Critical Information to Be Revealed";
        }
        else {
            message.textContent = "Hello, JavaScript!"
        }
    }

    chgTxtBtn.addEventListener("click", infoReveal);

    const box = document.querySelector("#box");



    box.addEventListener("click", function() {
        let firstNum = Math.floor(Math.random() * 256);
        let secondNum = Math.floor(Math.random() * 256);
        let thirdNum = Math.floor(Math.random() * 256);
        
        this.style.backgroundColor = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
    });

    const textInput = document.querySelector("#textInput");

    textInput.addEventListener("input", function(event) {
        console.log(event.target.value);
    }
    )

    const listCoffee = document.querySelectorAll(".item");
    for (let coffee in listCoffee) {
        console.log(coffee.textContent);
    }

    const contentChange = document.querySelector("#content");

    contentChange.textContent = "New Content"

    const randomButton = document.querySelector("#randomButton");
    const randomOutput = document.querySelector("#randomOutput");
    randomButton.addEventListener("click", function() {
        randomOutput.textContent = Math.floor(Math.random() * 10) + 1;
    });

    const itemList = document.querySelector("#itemList");
    const addBtn = document.querySelector("#addItem");

    addBtn.addEventListener("click", function(){
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        itemList.appendChild(newItem);
    })

    

    /*
    const buttons = document.querySelectorAll("button")
    for (const button of buttons){
        button.addEventListener("click", function() {
            console.log(this);
        })
    }
    */