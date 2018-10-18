window.onload = function () {
    var user = ["../img/img_17.jpg"];
    var num = 1;
    var portrait_position = 0;
    var now = -1;
    var send_btn = document.getElementById('send_btn');
    var send_txt = document.getElementById('send_txt');
    var chat_ul = document.getElementById('chat_ul');
    var chat_span = chat_ul.getElementsByTagName('span');
    var chat_img = chat_ul.getElementsByTagName('img');
    send_btn.onclick = function () {
        var input = $("#send_txt").val();
        if (send_txt.value == null) {
            alert("Please enter Text");
        } else {
            chat_ul.innerHTML += '<li><span class = "spanleft">' + send_txt.value + '</span>';
            now++;
            // if (num==0) {
            //     // chat_span[now].className = 'spanright';
            //     // chat_img[now].className = 'imgright';
            // }
            //  else {
            //     chat_span[now].className = 'spanleft';
                
            // }
            send_txt.value = '';
            
        }
        
        console.log(input);
        axios({
        url: "https://rcjjzy9mwl.execute-api.us-east-1.amazonaws.com/prod/chatbot",
        method: 'POST',
        headers :{
            "X-Api-Key": "9IviiqtM4B2SzpptzfZ3c1WY7gi56qtH3jhw7prm"
        },
        data: {
            "input": input
        },
        }).then(response => {
        console.log(response);
        chat_ul.innerHTML += '<li ><span class = "spanright">' + response.data.body+ '</span>' + '</li>';
    }).catch(error => {
        console.log(error);
    });
    }
 
 
}
