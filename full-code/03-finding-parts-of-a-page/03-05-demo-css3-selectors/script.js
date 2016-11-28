/*
03-05-demo-css3-selectors

So let's start by taking a look at how jQuery uses CSS3 selectors, and we'll start off with some real basics here. First, let's look at finding all the buttons on the page. 
var buttons = $('button');

So by executing this statement and passing in the selector of just button into the jQuery function, it finds all the buttons that are found on this page and sets them equal to an array here called buttons. So you'll notice that the first one here is a collapse button, which you can't see right now, because this is the Bootstrap button that collapses the navigation when it's working within a smaller view port. The next two buttons you can see on the page, so you'll notice that down here the Cancel button shows up, and the Save button for working within the form for the Coded Homes page. And the last button you can't see, it shows up on the JavaScript tab, and that's just a little alert message telling you to open up the console window if you want to work with the code. But the value here for you is to say that all I had to do was pass in a known HTML element, so this is button. I passed in the name of the HTML tag of button, and that found all of the elements within the page and placed it into an array for me. So that will work with any HTML element that you have on the page. Now let's look at using a selector that's an id selector. So now instead of looking for all buttons, I'll look specifically for the saveButton. And so when I execute that statement, all that's returned to me now is the saveButton. And remember this follows the principle found in CSS, and that is to say that any element with an id is expected to be unique on the page. So by going specifically for save-button on the id of this element, I pretty much know that I'll get back just that one item. So ids can be very, very useful. Now if I want to look for more than one item at a time, of course I can use the HTML element, but if I want to look for something more specific, I can look at a class. So let's look at what that would look like next. Now if you remember a class is found in a selector by prefixing what you're looking for with a dot. So let's take a look at just finding buttons that have the btn class applied to them. So here I'll do class btn, looking for the class of btn on the elements. 

var buttons = $('.btn');

I'm going to execute this statement. Now I can take a look at what's returned. 

buttons
> [ ... ]

And you see all of the different items that have the btn class applied to them. And you'll notice because of the way Bootstrap works, you can apply the btn class to anchor elements as well. so these are just regular links that are being styled as a button. So here I find everything that has the btn class applied to it. Now those are some of the most basic selectors, let's try something that's a little more robust, something that we might expect to find within a CSS3 selector. What I'd like to do with this next one is combine an id with a pseudo class. So let's find the first feature. So the item that I'm looking for here is trying to find this list item here that's the first feature found in the special features. So to do that, I'll create a variable, and then first we'll look at the id of the containing div that has those list items in it. Now I'll add a space, and I'll say that what I'm looking for is that container div, and then something inside of it. So that space then will say, now I'm looking for a list item, but what I'd also like to do is find the first child.

var firstFeature = $('#special-features li:first-child');

And so when I execute this statement, when I look at first feature, that returns to me that list item here of Crown molding throughout. 

firstFeature
> [ <li data-feature-id=... ]

So as you can see, you can get very specific with the selectors that you use that you pass in the jQuery in order to find elements on the page very quickly. The last one that I'd like to show you is how to find links that are only external links, so not relative links to the page. And to do this, we'll use a CSS3 selector that uses the starts with operator. So let's start off by creating a variable, and here I'll look for any anchors on the page that have an attribute of href that start with a value of http. 

var webLinks = $('a[href^="http://"]');

weblinks
> [ <a href="http://codedhomes.com"... ]

And when I execute this statement and we take a look at what it returns, you'll notice that each one of the anchors that are returned are only items that are linking to something outside the page. So in other words, there are no relative links returned in the results set. So here's an anchor with the href of http://codedhomes.com, or api.jquery.com on and on. So the CSS3 selector of looking for the anchor tag with the href value equal to http, but by using this carrot, I'm saying that it starts with whatever string I'm passing it into. So the more you learn about CSS3 selectors, the more effective you'll be working with jQuery in order to find elements on the page. So next let's take a look at what it's like to work with HTML literals with jQuery.



*/