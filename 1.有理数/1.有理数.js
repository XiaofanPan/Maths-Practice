var raNum = Math.random();
var rnNum;
var u = 1;
if (raNum < 0.1)
{
    rnNum = Math.round(raNum*1000);
} else
{
    rnNum = Math.round(raNum*100);
}
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
        xx = setTimeout(function(){u+=1},60000);
    }
}
function submit()
{
    clearTimeout(xx);
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    code = "编号：" + hour + minute + rnNum + u;
    document.getElementById(1).innerHTML = document.forms["test"]["yourAnswer1"].value;
    document.getElementById(2).innerHTML = document.forms["test"]["yourAnswer2"].value;
    document.getElementById(3).innerHTML = document.forms["test"]["yourAnswer3"].value;
    document.getElementById(4).innerHTML = document.forms["test"]["yourAnswer4"].value;
    document.getElementById(5).innerHTML = document.forms["test"]["yourAnswer5"].value;
    document.getElementById(6).innerHTML = document.forms["test"]["yourAnswer6"].value;
    document.getElementById("code").innerHTML = code;
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