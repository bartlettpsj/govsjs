import HyperExpress from "hyper-express";
const webserver = new HyperExpress.Server();

const reqHandler = (request, response) => {
  response.send("Hello World!");
};

webserver.get("/", reqHandler);
webserver.listen(3002);

console.log('Listening on http://localhost:3002');
