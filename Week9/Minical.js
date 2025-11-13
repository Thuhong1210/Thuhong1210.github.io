function calculate() {
    var a = document.frmCal.txta;
    var b = document.frmCal.txtb;
    var o = document.frmCal.slto;
    var r = document.frmCal.txtr;
    var err = document.getElementById("errorMsg"); // Lấy vùng hiển thị lỗi

    // Reset lỗi + kết quả
    err.textContent = "";
    r.value = "";

    var av = a.value.trim();
    var bv = b.value.trim();// Lấy giá trị và loại bỏ khoảng trắng

    // Regular expression kiểm tra số
    var numberFormat = /^[+-]?\d+(\.\d+)?$/;

    // ========== VALIDATION ==========
    if (av === "" || bv === "") {
        err.textContent = "Please enter both a and b.";
        (av === "" ? a : b).focus();// Focus vào ô trống
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
// Chuyển chuỗi sang số thực
    var x = parseFloat(av);
    var y = parseFloat(bv);

    if ((o.value === "/" || o.value === "%") && y === 0) {// Kiểm tra chia cho 0
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
