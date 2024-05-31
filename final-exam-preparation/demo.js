// Promise --> object

let users = [];

function myPromise() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((apiResult) => apiResult.json())
        .then((data) => {
          users = data;
          if (users) {
            resolve(users);
          } else {
            reject("users not found");
          }
        });
    }, 2000);
  });

  p.then(
    function (value) {
      value.forEach((v) => {
        console.log(v.id);
      });
    },
    function (error) {
      console.log(error);
    }
  );
}

console.log(myPromise());
