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