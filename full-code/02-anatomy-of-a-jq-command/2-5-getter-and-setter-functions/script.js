/*

2-5 Getter and Setter Functions

Now once you have a set, a selected set of elements on the page, there are a number of different functions that you can use in order to interact with the elements that have been selected. So let's turn our attention again to the h2 on the page, but this time what I'd like to be able to do is run the text function against that selection. 

var text = $('h2').text();

And so now when I take a look at text, you can see that's the value that's inside that h2. 

text
> "15509 Main Street"

We take a look at the markup, and scroll down here, that's the text inside the h2 itself. Now, we can use that function in a little bit of a different way. Let's say I want to change the text that shows up on the page here, I can use the very same function, but instead of simply calling the function, I can pass in a value as the first argument to that function, and that will change the text within that item. So here, let's take a look at doing that a little bit differently. So let's select the h2 once again, and call text, but this time, I'll change the street address. 

$('h2').text('1234 Main Street');
> [ <h2 class="expanded">1234 Main Street</h2> ]

So notice over on the page, 1234 Main Street is now what shows up on the page. And I did that by calling text and passing in the value that I want. So, many functions that are available off of a selected set of a jQuery selection, are both getter and setter functions. So when I called just text up here, that was a getter function. And so by calling text, it returned me the text of the element. But then I could set the value of that element by calling text and passing in a value. And again, we're working in sets, so I could just as easily work with a different element and set all of text within that same element at the same time. In fact, let's try that with an unordered list. So here I can select all the list items on the page, and this will be more than just elements within my example, but then I can go and set the text to list item. 

$('li').text('list item');

And so there's a number of different items that are available on the page, and so you'll see down here, as well as up at the top, and even the tabs, all of the list items have now been updated to the text of list item, because it's working against that entire set that matches the selector.


*/