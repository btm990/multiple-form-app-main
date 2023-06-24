# Multiple-step form page

This page consists of a form that is broken up into 4 different steps with varying form input controls.

### Things I learned
This was the first time I used the React framework and it was interesting to learn and use.
1. The use of the basic hooks were helpful and necessary to complete the project with the necessary page re-renders as the states changed.
2. Many re-useable chunks of code can be abstracted away into various components, and adds semantic understanding to different parts of the page.
3. I also used the clsx library to conditionally style the tailwind classes I used for certain components.

### Things I struggled with
In a nutshell, everything thing to do with the form validation, I struggled with.
1. I tried to use the "pattern" HTML attribute in order to validate the forms using RegExp, but the browser kept on saying that there were SyntaxErrors relating to Invalid Regular Expressions, and something to do with invalid character classes. I copied and pasted Regex from websites for certain validation patterns (email, tel etc.) but with no success.
2. The form seems to submit on every state change, unsure what to do about that.

### Things I may update or do in the future
1. Make sure I can implement proper form validation.
2. Make sure form sumbits only upon clicking of the "Confirm" button instead of every state change (Or maybe submit on every step completed idk)
3. Post the submitted data into a database with some backend code and maybe send a confirmation email. (Personal use)
