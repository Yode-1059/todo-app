$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append(`<li><input type="checkbox">${inputTodo}</li>`);

    $("#input").val("");
})

$(document).on("change", "input[type=checkbox]", function () {
    if ($(this).is(":checked")) {
        $(this).parent().parent().css("text-decolation", "line-through");
        $(this).parent().parent().css("background-color", "red");
    } else {
        $(this).parent().parent().css("text-decolation", "none");
        $(this).parent().parent().css("background-color", "#000");
    }
})