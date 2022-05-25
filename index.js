$('document').ready(function(){
    $('#chat-text-input').keydown(function(e){
        if(e.keyCode === 13 && !e.shiftKey){
                sendChat();
                //Kill the enter key input
                return false;
         }  
    });    
    $('#chat-send-button').click(function(e) {
        sendChat();
    });
});

function sendChat(){
    //Get the text in the textarea
    var text = $('#chat-text-input').val();
    //Empty out the textarea
    $('#chat-text-input').val("");

    //If textarea empty, do nothing
    if (text == "") return;

    var today = new Date();

    //If hours < 10 then add a zero in front. If minutes <10 then add a zero in front
    var time = (today.getHours()<10?`0${today.getHours()}`:today.getHours()) + ":" + (today.getMinutes()<10?`0${today.getMinutes()}` : today.getMinutes());

    //Create and append the chat message
    var user = 'User0';
    $('<div/>', {
        'class':'chat-item',
        'html':
            '<div class="chat-item-timestamp">' + time + '</div>' +
            '<div class="chat-item-content">' + `${user}: ` + text + '</div>'
    }).appendTo($('#chat-box'));

    //Scroll to the bottom
    var chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}