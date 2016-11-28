/*
07-05 Demo: Radio Buttons

Now let's talk about radio buttons for a moment. We've got a couple buttons down here at the bottom of this form, and you'll notice that I can click on immediate or delayed, and I can only choose one at a time, and the reason it works that way is because in HTML there's a special way that you set up radio buttons so that they're grouped together. Let's take a look at the HTML to investigate this a little bit further. This is the group here that has my radio buttons. So you notice I have an input, the type of radio, and they each have a name and a value. You'll notice that the name is the same for each one of them, they're both set as available, they have a different value, so the first value is immediate, the second one is delayed, and they both have a unique id value. So the grouping that happens between these two radio buttons is by the value that's given for its name. So when we're using jQuery, what we conceptually want to do is to take a look at the group of radio buttons, and we'll access them by its name, and we want to find out which one of them is checked. Once we know which item is checked, then we want to get the value out of that checkbox. Let's take a look at what that looks like in jQuery. What we're looking for is the availability status of this piece of real estate, and I'll take the value and set it aside in a variable.

var status = 

Then we'll create the selector for the checkbox that we're looking for. Now we're going to look at the group, and then ask for the item that's checked, and to do this, we'll use a psuedo class. So first we're looking for an input element with a specific attribute value, 

var status = $('input[name="available"]')

so we're looking for that input where the name is equal to available, and beyond that, we're looking for the item within the available input items that is checked. 

var status = $('input[name="available"]:checked').val()

Now once that's been selected, what we want to do is get the value from that item. So as we evaluate this statement, we'll get the status back, and when we take a look at it, you can see that it's set to immediate.

status
> "immediate"

So I can come down here and I can change the status to delayed, and then run my command once again, and you'll see it returns back to me delayed. 

status
> "delayed"

So this is a little bit different than what we might be used to doing in jQuery where normally you just make basically a plain selection against the DOM, and then call property or value or attribute or something like that, but in this case, it's different. Really the selector itself is giving us the power that we need in order to find the selected radio button, and the pseudo class of checked is key in making that happen in this case. Well, this gets you started with working with forms with jQuery and showing you some of the specific nuances that are involved in different input types. Let's go ahead and wrap up this module.


*/