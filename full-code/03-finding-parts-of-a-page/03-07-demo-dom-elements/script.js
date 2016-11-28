/*
03-07-demo-dom-elements

Now sometimes when you're working with a page, you'll have an opportunity to have access to raw DOM elements. So for instance, if we want to find the div on the page for a house detail, we might do something like this. 

document.getElementById('house-detail');
> <div id="house-detail">...</div>

So we'll look for the element by its id, and then pass in the id value of house-detail. And so this returns the actual DOM element itself, the raw DOM element of house-detail. So what we can do, is we can take that same DOM element and pass it into jQuery and then work with a wrap set. Now the value for this will become more apparent as we continue on in the course, because once you have elements selected with jQuery, there's a lot that you can do with it. So let's take a look at how we might work with a raw DOM element directly in jQuery. So let's do the same thing that we've done in the past. Let's create a variable, and then we'll pass in a selector to that DOM element directly into the jQuery function.

var detail = $(document.getElementById('house-detail'));


Now, you'll notice here, I'm not putting a pound sign in front of the id, because that's something specific to jQuery, because that's a CSS3 selector. Here document.getElementById simply takes the id value. So as that's executed, and I take a look at the value for detail, you'll notice that it's wrapped in brackets as an array, and this is an indication that this is a wrapped set from a jQuery selector.

detail
> [ |> <div id="house-detail">...</div>]

And just as we did with HTML literals, by passing in an array in as well as individual items, you can do the same thing with raw DOM elements. So let's take a look at trying to find the titles on the page. You'll notice I do my open and close brackets and open and close parentheses all at the same time, that way I make sure I don't leave anything off at the end. 

var titles = $([]);

Now a document.querySelector is the native browser implementation for doing selection inside the browser. So what this says, is it will take in a query and will look for any element that matches the h2 selector.

var titles = 
    $([document.querySelector('h2')]);

So we'll use that to find h2s and h3s. 

var titles = 
    $([document.querySelector('h2'), document.querySelector('h3')]);

So I can pass all of these into jQuery, and then when we take a look at titles, you can see that it finds the h2 and the h3 all on the page. 

titles
> [ ... ]

So working with DOM elements works just as well when you're using jQuery, as well as using selectors. Now once you've found a specific element, you may want to find something that it's in relation to. So we'll look at using the find function in the next clip.


*/