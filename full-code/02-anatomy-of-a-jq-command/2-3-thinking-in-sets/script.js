/*

2-3 Thinking in sets

var divs = $('div');


So this is the example page that we'll be using for many of the demos found in this course. So let's just take a look around for a quick moment and then we can start working with jQuery. So if we go in and take a look at the HTML associated with this page, you'll notice that there's a number of different elements available. So you'll see that we have a few divs defined in the page here, and then down here, you'll notice that there's an h2 defined for the address, and that has the expanded class on it, and that's the street address for our home here within Coded Homes. So there are a number of different elements available, but specifically we'll be looking at the divs and the h2 for this example. So let's return now over to the visual representation of the page, and what I'd like to do is use a jQuery command to find all the divs that are on a page. And so I'll do that by first declaring a variable.

var divs

And then I'll use my jQuery command of $, and then pass in the element that I'm looking for, so in this case, it's a div. 

var divs = $('div');

And so when I run this, what it will do is return to me a list of all the divs on the page. So you'll see here, this is quite an extensive array of divs. Now one of the first things that you'll notice by the returned value, is this open bracket right here. And what this tells you is that this is an array of elements. And so what it's doing when jQuery selects something on the page, it returns a set, or it returns an array of those items. So you'll notice I have divs here on the entire page, everything from the navigation bar of the page itself, all the way down into divs individual for the layout of the page. So even though you may be attempting to select a single item on the page, when you select something, you are going to get back a set. And so, if we take a look at the selector that I use at the top here, again you'll notice the $ here, this is the gateway, or the front door to jQuery, and that I passed in a very simple selector saying that all I want are the div elements on the page. And so the result of that, again, is this set of all the divs that are available on the page. So one of the things that you can do-- let's clear this for a moment-- to see whether or not you have something returned from the selector that you provided, is take a look at your result, so in this case, I have the divs variable, and I can inspect its length. So here you can see that there are 66 divs on the page. 

divs.length

So that's one of the first techniques that you can use as you run a selector if you want to find out if you've returned a result, you can take a look at the length property. Now, what if there's only one item that matches your selector? Well, that'll work just as well also. So I'll clear this once again, and now let's try to find the h2s. So once again, I have a result here, but I just have an array with one item, because there's only one h2 defined on the page. 

var h2s = $('h2');

And, of course, if I take a look at the length, I'll get back 1 for that. But if I run another jQuery function against my wrapped set, and that's what this is called is a wrapped set of jQuery objects, against either h2s or my divs variable, they'll behave in a similar way. So, since I'm only returning 1 item in the h2s, if I decide to change some of the CSS properties, or change some of the text in that item, and I'll show you how to do that in coming demos, since I only have 1 item in the wrap set, it'll only execute against that one item. But if I want to do it against all 66 of the items in my divs variable, it will execute against all of those items. So the takeaway for you here is that most often with just about any jQuery statement that you build, the first part of it will be the selector. And I'll show you a number of different types of selectors. In this case, all I'm doing is selecting defined HTML elements, either div or h2, and there's more complex ways that you can do your selectors. But the first thing that you'll want to do is tell jQuery what it is you're looking for on the page, and you do that with a selector. So that works great. But what happens if you try to select something that doesn't exist? Well, we'll take a look at that next. Now jQuery is also very forgiving.


*/