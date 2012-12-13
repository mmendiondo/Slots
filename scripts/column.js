column = function()
{
	this.element = function(elementProps){
		var le_me = $("<div name='grid'>");

		for(var prop in elementProps)
		{
			le_me.css(prop, elementProps[prop]);
		}
		return le_me;
	};
}

grid.prototype.width = 800;
grid.prototype.height = 430;
grid.prototype.nbr_of_columns = 5;
grid.prototype.nbr_of_chips = 10;
grid.prototype.nbr_of_rows = 3;
grid.prototype.overflow = "hidden";