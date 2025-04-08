document.querySelector("button").addEventListener("click", function () {
    const val1 = parseFloat(document.getElementById("val1").value);
    const val2 = parseFloat(document.getElementById("val2").value);
    const opt = document.querySelector("select").value;
    const resAlert = document.querySelector(".alert");
    let res;
    if (isNaN(val1) || isNaN(val2)) {
        resAlert.classList.replace("alert-success", "alert-danger");
        resAlert.textContent = "Result: Bruh, wrong nums.";
        return;
    }
    switch (opt) {
        case "+":
            res = val1 + val2;
            break;
        case "-":
            res = val1 - val2;
            break;
        case "*":
            res = val1 * val2;
            break;
        case "/":
            if (val2 === 0) {
                resAlert.classList.replace("alert-success", "alert-danger");
                resAlert.textContent = "Result: Can't div.";
                return;
            }
            res = val1 / val2;
            break;
        default:
            res = "Invalid.";
    }
    resAlert.classList.replace("alert-danger", "alert-success");
    resAlert.textContent = "Result: " + res;
});
