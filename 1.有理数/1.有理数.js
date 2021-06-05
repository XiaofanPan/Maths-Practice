var url = 
function createXmlHttp() {
    if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
    } else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    }
    function getSource() {
    createXmlHttp();
    xmlHttp.onreadystatechange = writeSource;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    }
    function writeSource() {
    if (xmlHttp.readyState == 4) {
    document.getElementById("source").value = xmlHttp.responseText;
    }
    }