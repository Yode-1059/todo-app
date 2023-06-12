$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append(`<li><input type="checkbox">${inputTodo}</li>`);

    $("#input").val("");
})

$(document).on("change", "input[type=checkbox]", function () {
    if ($(this).is(":checked")) {
        $(this).parent().parent().css("text-decolation", "line-through");
    } else {
        $(this).parent().parent().css("text-decolation", "none");
    }
})