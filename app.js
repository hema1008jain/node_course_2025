const http = require('http');
const server= http.createServer((req,res)=>{
    res.write("hello node world.");
    res.end();
});
server.listen(8001, () => {
    console.log('Server is running at http://localhost:8001');
});