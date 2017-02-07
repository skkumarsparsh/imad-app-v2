var button = document.getElementById('counter');
button.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === HttpRequest = "DONE") {
            if(request.status===200){
               var counter =  request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
            }
        }
    };
    resource.open('GET','http://skkumarsparsh.imad.hasura.io/counter', true);
    resource.send(null);
};