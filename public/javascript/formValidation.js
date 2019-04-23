$("#add-burger-btn").on("click", function(event) {
    // event.preventDefault();
    event.stopPropagation();

    let addedInput = false;
    let inputObj = $("#newBurgerName").val().trim();

    if (inputObj === "") {
        addedInput;
        alert("Please add a burger!");
    }
    else {
        addedInput = true;
        console.log(inputObj);
        $("#newBurgerName").val("");
    }
    return addedInput;
});