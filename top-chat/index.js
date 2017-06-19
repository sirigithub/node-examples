var net = require('net');
var count =0,  users = {}
var server = net.createServer(function(conn) {
    conn.write('\n > welcome to \033[92mnode-chat\033[39m!'
               + '\n > ' + count + ' other people are connected at this time.'
    + '\n > please write your name and press enter: '
);
    conn.setEncoding('utf8');
    var nickname;
    count ++;
    conn.on('data', function(data)
            {
        console.log(data);
        // remove the “enter” character
        data = data.replace('\r\n', '');
        
        if(!nickname) {
            if(users[data]) {
                conn.write('\033[93m> nickname already in use. try again:\033[39m');
                return;
            } else {
                nickname=data;
                users[nickname] =conn;
                
                for(var i in users)
                {
                    if(i!=nickname){
                    users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
                    }
                }
                
            }
        }
    });
    
    conn.on('close', function(data)
            {
        count --;
        delete users[nickname];
    });
});    

server.listen(3000,function(){
    console.log('\033[96m   server listening on *:3000\033[39m');
});