const serverData = '{"name": "John"}';

const parsedData = JSON.parse(serverData);
console.log("parsed name: ", parsedData.name);

console.log("Data to the server: " + JSON.stringify({ name: parsedData.name }));
