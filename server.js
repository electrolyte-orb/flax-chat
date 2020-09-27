const https = require("https");

let options = {};
let app = https.createServer(options, (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html",
	});
	res.write("hello1");
	res.end();
});
console.log("server has started");
app.listen(5000);
