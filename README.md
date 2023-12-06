# linuxClass
Server with multiple clients
## Setting up
The server.js module requires express and socket.io, so before running the server do a:
```
npm install express socket.io
```
The client.js requires axios, so before running the javascript client do a:
```
npm install axios
```
## Invoking the Server
```
node server.js
```
## Invoking Clients
Clients are invoked using the typical method of invocation for each with one command argument which is an integer from 1 to 32767. This seeds a random number generator that picks a client id for the invoked session.
### Invoking the bash client
```
./client.sh 111
```
### Invoking the JavaScript client
```
node client.js 232
```
### Invoking the python3 client
```
python3 client.py 122
```
