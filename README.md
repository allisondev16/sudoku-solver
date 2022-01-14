# What I Learned

- `input` html element attributes, for example:
```HTML
<input type="number" min="0" max="9">
```

- You can put the index on the forEach statement:
```JS
input.forEach((input, i) => {
    input.value = finalSolutionArray[i]
})
```

- Hide your API key on GitHub so that it won't be stolen and your credit card will be charged per requests, use env. 

- The Fetch API interface allows web browser to make HTTP requests to web servers. (https://www.w3schools.com/js/js_api_fetch.asp)

- JSON is in text format that can easily be sent between computers, and used by any programming language. 
--JavaScript has a built in function for converting JSON strings into JavaScript objects:
```JS
JSON.parse()
```
--JavaScript also has a built in function for converting an object into a JSON string:
```JS
JSON.stringify()
```
(https://www.w3schools.com/js/js_json_intro.asp)

- `response.json()` returns a JSON object of the result (if the result was written in JSON format, if not it raises an error) (https://www.geeksforgeeks.org/response-json-python-requests/)
-- Note: JSON object = JavaScript Object  
Example:
```JS
fetch('http://localhost:8000/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => populateSolution(data.response.solvable, data.response.solution))
        .catch(error => console.error('Error: ', error))
```