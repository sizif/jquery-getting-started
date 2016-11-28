$('#special-features li')
    .width('50%')
    .height('200px')
    .addClass('highlight bordered')
    .each(function(index, item){
        var $item = $(item);
        $item.text($item.text() + ' ' + 
                $item.attr('data-feature-id'));
    });
    
/*

Now for this next example, I'd like to show you an example of chaining which is a little bit more complex, so I'll just paste in the code here, and then we can talk about what's happening. So just like as before, we start off with a selector that goes to the div and gets each one of the list items. The width is set to 50%, the height to 200 pixels, and then we add the class of highlight and bordered. Now each is a function that you can use, which works really well with chaining, because often what you'll want to do is create a selection and then do something for each one of the items in the resulting set. So in this case, when each executes, an anonymous function is provided, and the arguments for that function are the index of the item that's being iterated over, and the actual item itself. Now if you look in the body of this function, what we need to do is take that item, the item that's passed in as the argument for the function is the raw DOM element, so we use jQuery, we wrap that in a jQuery selector instance of the item. So then from there, we can go to $item and change the text. Now we'll set the text and update it to the current value of the text, plus we'll go and get an attribute value out of the list items. Now if we take a look at the HTML for each one of the list items, you'll notice that data-feature-id has a value for it, so the first one is 131, and on down the line. So the code over here will take that attribute out of each one of the list items and update the text with it. So this is kind of a contrived example of how you would use this, but it gives you an opportunity to see how you'd use the each function and use it with the chaining syntax in order to work with each one of the items. So once this is executed, you can see that each one of the style changes is made to the items, and then the text is updated with the original text, plus extracting out the id from the element and updating the text with that value. So when you look at code that uses the chaining syntax, or the chaining approach, it makes it much easier for you to be able to see what's going on, because you can see that based off this selector, a number of different actions are being taken against that set. Now, there's one other thing that you can do in order to improve the performance of this code, so here I've brought back the original statement. Now, instead of executing everything against the raw selector itself, what we could do is have the same code available, but notice what I've done at the top. I've had the selector run and set that aside in a variable. 

var items = $('#special-features li');

$items.width('50%')
    .height('200px')
    .addClass('highlight bordered')
    .each(function(index, item){
        var $item = $(item);
        $item.text($item.text() + ' ' + 
                $item.attr('data-feature-id'));
    });



So now that the items variable holds the matching set or the selected set of items from jQuery, now I can chain off of that variable and do as much as I need to. What's important here, though, is that now I can reuse items over and over again, and I don't have to reselect the page or requery the DOM in order to select those items. So if you're only going to work with elements once, you don't need to worry about setting up a variable, but if you need it over and over again in your page, it makes a lot of sense to create that variable, and if you're doing multiple actions against the set, you can chain each one of those commands and make it much easier for you to read and maintain in the future. Now chaining isn't just appropriate for sets; you can also use it for individual items as well, and so we'll look at this last example next.


*/