const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const {headers, method, url} = req
    let body = []
    console.log(url)
    
    req.on('error', err => {
        console.log(err)
    })
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();

        res.on('error', err => {
            console.log(err)
        })

        res.statusCode = 200;
        const responseBody = {headers, method, url, body}

        let myPromise = new Promise(function(myResponse, myReject) {
            let request = require("https")

            treatedQuery = responseBody.url.slice(1).replaceAll(" ","+")
            console.log(treatedQuery)
            someUrl = `https://www.youtube.com/results?search_query=${treatedQuery}+trailer`

            request.get(someUrl, res => {
                let data = ''

                res.on('data', chunk => {
                    data += chunk;
                });

                res.on('end', () => {
                    regex = /\/watch\?v=(.{11})/g
                    linkDump = data.match(regex)
                    console.log(linkDump[1])
                    myResponse(linkDump[1])
                });

            }).on('error', err => {
                    console.log('Error: ', err.message);
                });
        })

        myPromise.then((response) => {
            responseBody.body = `{"link":"https://www.youtube.com${response}","poster":"666_${response}_666"}`
            res.write(responseBody.body)
            res.end()
        })
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/'`);
});

`https://www.google.com/search?q=o+senhor+dos+an%C3%A9is`