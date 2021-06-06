function showAnswer() {
    document.getElementById("wantAnswer").style.display = "block";
    var key = "f74t";
    var yourKey = document.getElementById("toKey1").value;
    if (yourKey != key) {
        alert("密码错误！")
    } else {
        document.getElementById("answer").style.display = "block";
    }
}