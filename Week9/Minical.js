function calculate() {
    var a = document.frmCal.txta;
    var b = document.frmCal.txtb;
    var o = document.frmCal.slto;
    var r = document.frmCal.txtr;
    var err = document.getElementById("errorMsg");

    // Reset lỗi + kết quả
    err.textContent = "";
    r.value = "";

    var av = a.value.trim();
    var bv = b.value.trim();

    // Regular expression kiểm tra số
    var numberFormat = /^[+-]?\d+(\.\d+)?$/;

    // ========== VALIDATION ==========
    if (av === "" || bv === "") {
        err.textContent = "Please enter both a and b.";
        (av === "" ? a : b).focus();
        return;
    }

    if (!numberFormat.test(av)) {
        err.textContent = "a must be a valid number.";
        a.focus();
        return;
    }

    if (!numberFormat.test(bv)) {
        err.textContent = "b must be a valid number.";
        b.focus();
        return;
    }

    var x = parseFloat(av);
    var y = parseFloat(bv);

    if ((o.value === "/" || o.value === "%") && y === 0) {
        err.textContent = "b can't be 0 for this operation.";
        b.focus();
        return;
    }

    // ========== Tính toán (không dùng eval) ==========
    var result;

    switch (o.value) {
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "*": result = x * y; break;
        case "/": result = x / y; break;
        case "%": result = x % y; break;
        case "^": result = Math.pow(x, y); break;
        default:
            err.textContent = "Unknown operator.";
            return;
    }

    if (!isFinite(result)) {
        err.textContent = "Result is not valid.";
    } else {
        r.value = result;
    }
}
