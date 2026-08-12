let data;
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => data = json)
console.log(data);

let decode = 100;
