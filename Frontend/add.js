function sendPost(){
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        fur: document.getElementById("fur").value,
        size:document.getElementById("size").value,
        breed:document.getElementById("breed").value
      });
      
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);
    }