function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
function get_random_img()
{
	return "url(./images/Ondiss/" + (Math.floor((Math.random()*12)+1)) + ".png)";
	//return get_random_color();
}

function create_le_me(name, elementProps)
{
	var le_me = $("<div>");

	for(var prop in elementProps)
	{
		le_me.css(prop.replace("_","-"), elementProps[prop]);
	}

	le_me.attr("name", name);

	return le_me;
}

ANIMATION_TIME = 200;