/*
03-06-demo-html-literals

Now from time to time, you may want to create HTML literals and select those with jQuery in order to create new elements on the page. From there, you can change the way they look or behave, but first you need to know how to create them using a literal selector. So let's create a div, a brand new div, just in memory. So here my selector, instead of being a CSS3 selector, will actually just be a string of HTML. 

var div = $('<div>This is a DIV</div>');

And so now as I execute that and take a look at the result, you'll see that what's returned here is an element that's been created in memory based off the string that I passed into jQuery that created that div in the results set. 

div
> [ <div>This is a DIV</div> ]

So now once I have this here, I can change the way it looks, I can change the way it behaves, I can add it into the page. There's a number of different ways of doing that. But what I want you to understand right now is just that by passing in a fragment of HTML, you can create new elements in memory using jQuery. Now you can also do the same thing with arrays. So if I want to create more than one element, I can do that as well. 

var elements = $([]);

So here what I'm doing is I'm passing an array to the jQuery function, and then I can add in multiple literals. So here I'll add in a span, and then add in another.

var elements = 
    $(['<span>one</span>', '<span></span>');

So let's take a look at the result there. 

elements
> ["<span>one</span>", "<span>two</span>"]

And as you can guess, now what I have is a selected set of new elements that are created in memory, one of the span one, and the other one of span two. So by using HTML literals, you can create new elements in memory and then work with them on your page all using jQuery. Now there may be times when you're working with raw DOM elements, and what you can do is you can pass those into jQuery as well in order to get a wrap set. So let's look at doing that next.


*/