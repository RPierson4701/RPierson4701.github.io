1. When we remove e.preventDefault(), the form could submit will submit to the server regardless of the input being correct.
2. We check .trim() in case the user has accidentally added unnecessary white space.
3. We can use required pattern within the input tag to validate the input before submitting. 