const submitData = (name, email) => {
  const url = "http://localhost:3000/submit";

  const formData = {
    Name: name,
    Email: email,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((responseData) =>{
    console.log('succcess',responseData)
  }).catch((error) =>{
    console.log('error',error)
  })
};
