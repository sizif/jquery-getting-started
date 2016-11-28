/*

Now as you're about to see, one of the most significant benefits to working with jQuery is its ability to find and manipulate parts of a page. So let's start off by taking a look at the street address. So 15509 Main Street, we go over to the HTML tab, you'll see all of the markup that's used in order to create this sample page. So as we scroll down, you'll notice that here is an h2 element. It has a class of expanded added to it, and then there's the text of the h2. So if we go back over to the address here, and inspect the element, and we take off expanded, you'll notice how the characters go closer together, because we're setting the letter-spacing to 2.5 pixels. So what would the JavaScript look like for us to add a class and remove a class to that element just using basic, raw JavaScript. Well, let's take a look at that. The first thing that we'll need to do is access that h2 element on the page. 

var h2 = document.getElementByTagName('h2');

Now since this returns an array of all the elements on the page that it found, we need to use that array in order to make changes to the properties of a specific element. So what we'll do here is use the 0 index to get into this item in the array. So here you have h2, index of 0, and then what we'll do is concatenate on the highlight class to className on that element. 

h2[0].className += ' hightlight';

If we go over and take a look at the CSS that's applied to this page, you'll see that the highlight class sets background-color to a yellow color. And I'm using += here because if you recall, that expanded class is already applied to the h2, and I want to make sure I keep that and not just override it by setting a value to className. So let's evaluate this statement. And so now you'll see that the className is set to expanded and highlight. So when we take a look at the content itself, you can see that the element as both of the classes applied to it, so it's highlighted in yellow here. Now that wasn't so bad to add a class to the element, but what would it look like if we want to remove just the highlight class? So to remove the highlight class, what we'll want to do is get a reference to all of the classes that are applied to an element, remove the specific one that we want, and then take that array and join it back up, so that only the class that we want is applied to that element. So let's start first by getting a list of all the classNames. 

var className = h2[0].className.split(' ');

So here you can see the classNames array has expanded and highlight in it, and it got those values because I called split by passing in a space against the className to that element. So now what we need to do is remove from the array the one that we don't want. The call to splice just returns the item that you're removing. 

classNames.splice(classNames.indexOf('highlight'), 1);

So classNames only has expanded in that list, and so now what we need to do is join up the list and set it equal to the className of the element. And so I'm doing just that, I'm joining classNames on space, there's no space, so now className is set to just expanded. 

h2[0].className = classNames.join(' ');

And you'll notice here that the highlight is now taken off that item. Now, that was quite a bit of work just to add and remove some classes to an element. But in jQuery this gets ridiculously simple.

*/