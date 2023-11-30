# 1-page-website
# Individual Assignment (INFO 2302)

## JavaScript Interaction

There are 2 function in the JavaScript which are form submission validation and reset page function.

 `submitForm()` function is for the form validation.
 - `document.getElementbyID` is used to retrieve input from the form for elements like name, staffNo, email, etc 
 - _if-else statement_ for the form validation. The condition check if all the required fields such as name, staff number, K/C/D/I/O, contact number, email, deduction amount, start date and end date are filled. If any of these fields are empty, an alert will display and prompt the user to fill out all the required fields.
 - For radiobox `agreeCheckBox`, it will check if the "I agree" checkbox is ticked. If not, an alert will display and prompt the user to agree to be part of the campaign.
 - If all of the validations is filled, when the user clicked on submit button, a message for sucessfully submitted will appear.
- `resetPage()` function is for the user to reset the page and refill the form again.
- I added visual effects on submit and reset button when they are clicked. The `addEventListener` is used to add a click event. There is like a blink or ripple effect on the button and the blink will become faster when the user hover on it.




## References:

- https://www.w3schools.com/jsref/met_document_addeventlistener.asp
- https://htmlcheatsheet.com/css/
- https://www.w3schools.com/css/css_pseudo_elements.asp
- https://htmlcolorcodes.com/color-picker/
- https://www.youtube.com/watch?v=QrizeQUOzcQ
- https://www.w3schools.com/tags/tag_span.asp
- https://fonts.google.com/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
