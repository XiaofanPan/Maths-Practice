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
        return;
    }
    else
    {
        document.getElementById("test").style.display = "block";
        document.getElementById("buttonSA").style.display = "block";
        document.getElementById("suspension").style.display = "block";
        document.getElementById("suspension").style.position = "fixed";
        document.getElementById("suspension").style.top = "0";
        document.getElementById("suspension").style.right = "0";
        maxtime = 60;
        timer = setInterval(function(){CountDown()}, 1000);
        function CountDown() {
            if (maxtime >= 0) {
                var min = Math.floor(maxtime / 60);
                var sec = Math.floor(maxtime % 60);
                var msg = "剩余" + min + "分" + sec + "秒";
                document.getElementById("suspension").innerHTML = msg;
                maxtime -= 1;
            } else {
                clearInterval(timer);
                u = 0;
                alert("时间到!");
            }
        }
    }
}
function showYourAnswer()
{
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    code = "编号：" + hour + minute + rnNum + u;
    document.getElementById("1").innerHTML = document.forms["test"]["yourAnswer1"].value;
    document.getElementById("2").innerHTML = document.forms["test"]["yourAnswer2"].value;
    document.getElementById("3").innerHTML = document.forms["test"]["yourAnswer3"].value;
    document.getElementById("4").innerHTML = document.forms["test"]["yourAnswer4"].value;
    document.getElementById("5").innerHTML = document.forms["test"]["yourAnswer5"].value;
    document.getElementById("6").innerHTML = document.forms["test"]["yourAnswer6"].value;
    document.getElementById("code").innerHTML = code;
}
function submit()
{
    if (maxtime < 0) {
        showYourAnswer();
    } else {
        clearInterval(timer);
        showYourAnswer();
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
        return;
    }
    else
    {
        document.getElementById("answer").style.display = "block";
    }
}