var bg = $('h2').css('background-color');
> undefined

bg
> "rgba(0,0,0,0)"

$('h2').css({ backgroundColor: '#f60' })
// > changes the bg color on the element

$('h2').css('backgroundColor');
// > css() is both a setter and a getter, remember?