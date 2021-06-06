function proveOpenTest()
{
    var keyPOT = "f7y6";
    var yourKeyPOT = document.forms["openTest"]["yourKeyPOT"].value;
    if (yourKeyPOT != keyPOT)
    {
        alert("密码错误！");
    }
    else
    {
        document.getElementById("test").style.display = "block";
        document.getElementById("buttonSA").style.display = "block";
    }
}
function showAnswer()
{
    document.getElementById("wantAnswer").style.display="block";
}
function proveShowAnswer()
{
    var keyPSA = "e94t";
    var yourKeyPSA = document.forms["wantAnswer"]["yourKeyPSA"].value;
    if (yourKeyPSA != keyPSA)
    {
        alert("密码错误！");
    }
    else
    {
        document.getElementById("answer").style.display = "block";
    }
}