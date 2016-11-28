/*
06-02-demo-verbose-code-without-chaining

Now perhaps the best way to see the value of chaining is to take a look at an example that doesn't use chaining. This way you get an opportunity to see what benefit it gives you. This example will use the special features, and I'll apply a number of different commands to the list items for the special features, so let's begin by adding a few classes to the list items for special features. So with this statement, we'll add the highlight and bordered class to each one of the list items for the special features. 

$('#special-features').addClass('highlight bordered');

And I forgot an item here, so we'll go ahead and add there. So each one of the list items has both of those classes applied to the element. Now what we'll do is change the height and width, and we'll do the width as well. 

$('#special-fetures li').height('200px');
$('#special-fetures li').width('50%');

So now you can see we've changed the look of each one of those list items quite a bit through each one of the different statements that we've applied to the list items, but the problem with this is that if we take a look at each one of the statements that we've run, each time we've selected the special-features list item and applied either the new class to it or changed the height or changed the width. Now this is really inefficient. What's happening is that each time one of these statements is evaluated, jQuery has to search through the document object model or the DOM and find each one of those items in order to apply the width, or to add the classes, or change the height, and so what you really want to do is change the syntax in order to use chaining, so that the selection against the DOM is only happening one time. Let's take a look at doing that in the next clip.



*/