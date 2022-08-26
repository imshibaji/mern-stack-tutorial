function getData(url, callback){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.status == 200 && this.readyState == 4){
            callback(this.responseText);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}