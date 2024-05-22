/*
var xhr = new XMLHttpRequest();
var documento;

xhr.responseType = "json"
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        documento = xhr.response;
        console.log(documento)
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.send();
*/

var xhr = new XMLHttpRequest()
var documento = {
        "userId": 200,
        "id": 12,
        "title": "Noticia Exclusiva",
        "body": "Jesus voltou, e aqueles que duvidavam, agora hão de ver a glória de Deus"
    }

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        console.log(xhr)
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")

// status 200 representa OK!
// status 201 representa criado
xhr.send(documento)