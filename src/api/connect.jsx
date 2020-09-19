export const getData = () => 
   fetch('http://localhost:8081/specs', {
      method: 'GET', 
      type: 'opaque',
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded', //'application/json'
         'Accept': '*/*',
   }, 
   credentials: 'omit'
})
.then(response => {
   return response.json();
})