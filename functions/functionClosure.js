let data = "";
let client = (function() {
  function client() {
    this.name;
    this.email;
    this.mobile;
    this.y = 45;
  }
  client.prototype.createNewClient = function(name, email, mobile) {
    if (
      name != "" &&
      email != "" &&
      mobile != "" &&
      typeof name == "string" &&
      typeof email == "string" &&
      typeof mobile == "string"
    ) {
      this.name = name;
      this.email = email;
      this.mobile = mobile;
    } else {
      throw new Error("Invalid Data");
    }
  };

  client.prototype.clientInfo = function() {
    data += `
          <h1>Client Info</h1>
          Name: ${this.name}<br/>
          Email: ${this.email}<br/>
          Mobile: ${this.mobile}<br/>
        `;

    document.getElementById("clientData").innerHTML = data;
  };

  client.prototype.x = 10;

  return client;
})();

let firstClient = new client();
firstClient.__proto__.x = 800;
firstClient.y = 850;

firstClient.createNewClient("Michael", "michael@yahoo.com", "8745968784");
//firstClient.clientInfo();

let secondClient = new client();
secondClient.__proto__.x = 700;
secondClient.y = 245;
secondClient.createNewClient("John", "john@gmail.com", "9658745897");
secondClient.clientInfo();

console.log(firstClient);
console.log(secondClient);
