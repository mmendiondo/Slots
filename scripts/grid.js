grid = function()
{
	this.element = function(elementProps){
		return create_le_me("grid", elementProps);
	};
}

grid.prototype.width = 900;
grid.prototype.height = 520;
grid.prototype.nbr_of_columns = 5;
grid.prototype.nbr_of_chips = 10;
grid.prototype.nbr_of_rows = 3;
grid.prototype.overflow = "hidden";