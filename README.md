# triangles-react
little exercise determining type of triangles using react

## Considerations

In order to get quickly to the actual challenge, I used ‘create-react-app’ to generate a starting point. This isn’t normal practice for me and I would most probably configure my web pack setup by myself in a real application.
This goes especially for loading the external JavaScript and TS-styles. However I didn’t feel that my focus should be on the setup of the app itself, but the challenge, which is why I included the two files directly in index.html in the public folder.

### Structure:
I created the basic html-structure in App.js, following the style guide, while creating a separate component for the handling the form and its processing. Although there’s no use for the topbar, I’ve included it anyways, since it says so in the documentation.

Besides the component for the form, I also created a separate component for inputs, because its structure with the label would repeat itself.
Although I knew, that all inputs required should be numbers, I made the input type configurable by passing it as props, so that the input could be of different types if needed. Although I could have used the type ‘number’ to prevent the input from accepting other values than numbers by default, I chose to use the type ‘text’ and validate on the value itself in order to provide useful user-feedback.

### Validation: 
I figured that only two things are important to validate on:
	1) a value is provided
	2) the value must be a number

I was considering disabling the submit-button until all values are valid, but dismissed the idea, because it could confuse the user. Instead, I thought it to be most intuitive to provide errors regarding the type of value (number, string) while the user was typing, while validation whether any value is provided at all should first happen when submitting the form.

### Displaying result:
While reading the documentation, I saw the TS-notification-component and thought it could be fun to use it for displaying the result. It could just as well have been a text displaying next to the form, or replacing it. However I wanted to use some of your own components.
