/*
03-07-demo-dom-elements

Now sometimes you'll locate an element on the page, but what you'll want to do is find something within the hierarchy of that element, so something that's hierarchically underneath the element that you've found. So one of the things that you can do is use the find function. So in this case, what we'd like to do is find the primary buttons on the page, but only do that within a specific div element. Now there's a lot of different ways that you could do this, but I'm using this example in order to show you how to use the find function. So the first thing that we'll do is take a look at finding just the column on the left-hand side of the page. So we'll create a variable for the primary button, and the first selector that we'll use here is for the class of col-sm-5, 

var primary = $('.col-sm-5')

primary
> [ |> <div class="col-sm-5"... ]

and that's a Bootstrap class that says it's a column that has 5 units of width to it. The details of that aren't important; you can watch the Bootstrap course if you'd like to find out more about that, but for right now, we're just looking at a specific class on the page. The interesting part is to say that once we've found that item, and you can see that it's selected here, so this is the column or the division that we found on the page, and we want to find that button, it's the Save button that we're ultimately looking for. And so what we'll do is add to our item here and say that now that we've found that, we want to run the find function. And here I can pass in another selector. 

var primary = $('.col-sm-5').find('button[class*="btn-primary"]');


Now I'll make this a very specific selector, and of course, you have the power and capability of CSS3 selectors available to you, so it doesn't necessarily have to be this complex, but I'll show you what's possible here. So we'll say that we're looking for a button. Now there's two buttons within that column there, so we want to find something specific. So we want to find a button that has a value within the class attribute that's anything that equals btn-primary. And so now instead of looking with the selector trying to find everything on the page, what it will do first is select the left-hand column first, and then as it runs the find function, it will only look for items specifically within the context of what was initially found within the first selector. So as we look for the left-hand column, it'll only look for items within that. So let's execute this,

var primary = $('.col-sm-5').find('button[class*="btn-primary"]');


and then take a look at the results.

primary
> [ <button id="save-button"... ]

And so you can see, it found that element on the page by narrowing its scope to just what's in that left-hand column. Now another really useful capability is to be able to find items in relation to elements that you've found. So let's look at trying to find parents and children of an element.


*/