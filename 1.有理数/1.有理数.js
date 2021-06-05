var url = "https://github.com/XiaofanPan/Maths-Practice/blob/main/%E6%8E%A7%E5%88%B6.html"
function createXmlHttp() {
    if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
    } else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    function getSource() {
    createXmlHttp();
    xmlHttp.onreadystatechange = writeSource;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    }
    function getSecond() {
    document.getElementById("w").innerHTML = xmlHttp.responseText
    }
    }