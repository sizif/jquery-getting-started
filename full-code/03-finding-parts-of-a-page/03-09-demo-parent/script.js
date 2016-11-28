/*
03-09-demo-parent

var parents = $('tbody').parents();
> undefined

parents
> [ ... ]

Now the next function I'd like to show you how to use is the parents function. So let's take a look at the HTML for a moment. What we're doing is we're going to look at selecting the tbody of this table. Now in the first example, what we'll first do is find the tbody and then ask to look for all of the parents to that tbody. So that will find the table elements, and then the div element, and then everything else on up the chain. But then we'll also look at narrowing that down a little bit as well. So let's go back over to our page preview and let's look for the parents of this tbody. So here I have a standard selector, the same type of thing that you've seen me do all through this module, and so now what we'll do is run the parents function. And so just like I said, what happens is, is it takes a look at the item that you've selected and looks up the hierarchy chain to find each one of the parents until it ultimately gets to the very top of the page. So you'll notice from tbody, it goes into table, and then from there it goes into the container div, and then the div of the row or the layout grid, and then house-detail, and then tabpanel, and all the way up until we get to the body of the HTML document, and then ultimately, the HTML element itself. 



So if you need to find elements in relation to something that you've selected on the page using jQuery, you can do that using parents, but that gives you the entire hierarchy chain. But what if you just want to find the immediate parent or a parent of a specific element type? Well, let's take a look at doing that. So here what we're going to do is we'll select the tbody, but we just want to find the parent table itself. So in this case, we're starting off with the exact same selector as we had before, and we'll call parents once again, but in this case, we'll say that we're looking for parents that have the element of table in them.

var table = $('tbody').parents('table');
> undefined


And in this case, there's only one match. 

table
> [ |> <table class="table table-default"... ]

And so you can see here, table maps to the actual table that is found as the parent element for tbody. So depending on how you need to find the parents of the elements that you've selected, the parents function can be very powerful in finding those items within context. All right, now let's look at working with children.


*/