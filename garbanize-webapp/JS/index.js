// Fetch list of transactions from the stellar network.

var server = new StellarSdk.Server("https://horizon.stellar.org");


var handleFetchTransactions =()=>{
    // Execution
console.log("Fetching transactions...");
    // console.log(StellarSdk);  proof that stellarSdk is a global variable

    let trxList=document.getElementById("transactions");

server
  .transactions()
  .call()
  .then(function (resp) {
    // page 1
    console.log(resp);
    return resp.next();
  })
  .then(function (resp) {
    // page 2
    let transactions=resp.records;
    console.log(transactions);

    transactions.map(transaction=>{
        trxList.innerHTML +=  `<ul style="text-align: center;"><li>${transaction.id}</li></ul>`;
    })

  })
  .catch(function (err) {
    console.error(err);
  });


}