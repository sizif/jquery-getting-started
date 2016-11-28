$('#owner-present-check').attr('checked', true);
// won't check a checkbox!
/*
>
[
    <input type="checkbox" id="owner-present-check" checked="checked">
]
*/

$('#owner-present-check').prop('checked', true);
// "If you wanna check a checkbox, you need to use
// the prop() function in order to make that happen"

$('#owner-present-check').prop('checked');
// it's both a getter and setter so we can check
// if prop('checked') is true; if it is, 
// it means the checkbox is checked

$('#owner-present-check').prop('checked', false);
// to turn it off, pass in a false

/*
07-004 Demo: Checkboxes

The next input element that we'll look at is the checkbox, so we have a checkbox down here for whether or not the owner is present as the person is filling out this real estate form. Let's for a moment take a look at the HTML. So here you can see is the input element, the type is checkbox, and the id is owner-present-check. Now let's go back to the page for a moment and let's inspect the element, come down here, and then what we can do is come to the input element, and what we'll do is add an attribute of checked. So when we do that, you'll notice over on the running page, the checkbox is now checked. So I've shown you the attribute function before, the attr function, so it seems to follow that that's the function that we would use in order to check a checkbox, so let's go ahead and give that a shot. So I'll paste in the selector, and then we'll run attr for the attribute on the element, and we'll say checked, and pass in a value of true. And just to make sure this test works correctly, I'll make sure to uncheck this checkbox. Now when we run this, it should check the checkbox, right? You'll notice nothing happened. So if that command doesn't work, well, which one will? In fact, it's the property function, and that looks like this. So here we're running prop for the prop function, and now you'll notice that the checkbox is checked. Now the reason this works like this is a bit out of scope of a getting started course, but basically there's a representation in JavaScript of that checkbox, and that representation is in memory as a JavaScript object, and that object has a property of checked, which eventually influences how the HTML element is rendered on the page, so like I said, this is a bit out of scope for this course. If you want to dive in deeper into this area, I suggest you check out some of the more advanced JavaScript courses here on Pluralsight, but all you really need to know is that if you want to check a checkbox, you use the prop function in order to make that happen. Now of course, this is a getter and setter function, so in the same way we can ask for the value of checked by calling prop as checked as the argument, and when we get back true. So we can turn it off by passing in a false, you'll see that it's not checked anymore, and if we want to get its current value, we just call prop again and get back that value. So now let's take a look at radio buttons, which have its own little nuance as well.



*/