this is a simple fetch api call to submit data to a server.
the function takes two parameters, name and email, and sends them to the server using a POST request.
the server should be set up to accept the data and store it in a database.
the function returns a promise that resolves with the response from the server.
the function can be called like this:
```javascript
submitData('hellen adhiambo', 'hellenadhis@example.com')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```
this will send the data to the server and log the response to the console.