/*

3-4 CSS3 selectors review

Now jQuery largely operates using CSS3 selectors, and you just saw, selectors are strings that identify elements on the page. Now, an intimate knowledge of CSS3 is not a requirement for this course, but just to refresh your memory, let's review a few principles of CSS selectors. One of the most commonly used attributes of HTML elements is the id. Ids are special, because the values are meant to be unique across a page. This is helpful when working with selectors, because you can easily zero in on an element of the page by using the id selector. Here you can see how the pound sign is being used to tell jQuery that the content-container is an id value. 

$('#content-container')

In contrast to ids, classes are meant to be applied to one or many elements on the page. This makes it easy to locate collections or sets of elements that either require styling in the context of CSS, or manipulation in the context of jQuery. When you're targeting a class, the selector is prefixed with a dot, as shown here. 

$('.title')

The last item I'd like to mention is the concept of a pseudo class. Pseudo classes reflect a specific state of an element. In the code snippet, the pseudo class is being used to apply a style to the hover state of a link. A pseudo class can be used in jQuery to find things like the first element inside a div. 

$('div:first-child')

Pseudo classes are easy to spot, because they make use of a colon right after the element name. Now, this is just a small sampling of the types of selectors you can create. For a more robust introduction to CSS3 and CSS3 selectors, make sure you check out Jesse Liberty's course, CSS 3 From Scratch here on Pluralsight. But for now, let's look and see how some of the selectors work within jQuery.


*/