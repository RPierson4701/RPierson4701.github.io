1. When we remove e.preventDefault(), the form could submit will submit to the server regardless of the input being correct.
2. We check .trim() in case the user has accidentally added unnecessary white space.
3. We can use required pattern within the input tag to validate the input before submitting. 
4. Instead of a white popup bubble below the input field, on my iPhone, it appears as a black bubble above the field. This might relate to my phone preferences being set to dark mode. Also, the submit button on my phone appears to be blue and rounded, unlike what I see on my windows browser. 
