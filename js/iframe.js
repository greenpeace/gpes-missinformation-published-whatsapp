document.addEventListener("DOMContentLoaded", function(){
    var iframeWidth = 360;
    var parentElement = document.getElementById("wsap");
    var infoSize = parentElement.offsetWidth;
    if ( infoSize < 480){
        iframeWidth = infoSize;
    }
    var iframeHeight = iframeWidth * 1.77;
    var objectHtmlElement = document.createElement('iframe');
    objectHtmlElement.setAttribute("width", iframeWidth);
    objectHtmlElement.setAttribute("height", iframeHeight);
    objectHtmlElement.setAttribute("src", "https://apps.greenpeace.es/gpes-whatsapp-parody/index.html");
    objectHtmlElement.style.border = "none";
    if ( iframeWidth < infoSize ){
        var leftPos = (infoSize - iframeWidth) / 2;
        objectHtmlElement.style.position = "absolute";
        objectHtmlElement.style.left = leftPos + "px";
        parentElement.style.height = iframeHeight + "px";
    }
    document.getElementById("wsap").appendChild(objectHtmlElement);
});
