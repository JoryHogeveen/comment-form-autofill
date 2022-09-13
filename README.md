# comment-form-autofill
 WordPress plugin: Autofill comment form fields by URL parameters.

## Example:

Add the following parameters in your URL:

* `author=John%20Doe` prefills the name field with "John Doe"
* `email=johndoe@gmail.com` prefills the email field with "johndoe@gmail.com"
* `rating=4` prefills the WooCommerce rating stars.
* `#reviews` Anchor link to the reviews element

You can also set fields hidden or readonly when they are autofilled:

* `hidden=author,email` This will hide the author and email fields when a prefilled value is available.
* `readonly=author,email` This will set the author and email fields to read only when a prefilled value is available.

*Full URL:*  
https://your.domain/product-page/?author=John%20Doe&email=johndoe@gmail.com&rating=4#reviews
