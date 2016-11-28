/*

2-4 Working with non-matches

If you try to pass something into selector that doesn't match or doesn't even exist, you might think it would throw an error, but in fact, it does not. So let's try this for a moment. Let's try to put in a selector for an element that does not exist anywhere in HTML.

var nomatch = $('nomatch');

So here we can take a look at the result of that selection, and that's simply an empty array. So again, we could take a look at nomatch.length, and that will return 0. 

nomatch
> []

nomatch.length
> 0

So as you're using the results of a selection, you can take a look at the length property to find out if you've found what you're looking for as you're interrogating the page. And even if you don't find something or even if you pass in something that doesn't exist within the page, instead of returning an error, what you get is an empty array. So that makes it very easy for you to write code that doesn't throw errors when you don't want it to by making sure that you're looking for things like length against your selections. Okay, so now that we've figured out how to select something on the page, let's take a look at what we do once we have something selected.


*/