chip =  function()
{
	this.element = function(elementProps){
		return create_le_me("chip", elementProps);
	};

	this.get_width = function(parent_grid, le_me_margin)
	{
		return (parent_grid.width - (parent_grid.nbr_of_columns * le_me_margin * 2)) / parent_grid.nbr_of_columns;
	};

	this.get_height = function(parent_grid, le_me_margin)
	{
 		return (parent_grid.height - (parent_grid.nbr_of_rows * le_me_margin * 2)) / parent_grid.nbr_of_rows;
	}
}

chip.prototype.width = 0;
chip.prototype.height = 0;
chip.prototype.margin =10;
chip.prototype.position ="absolute";
chip.prototype.background_size ="95%";
chip.prototype.background_repeat ="no-repeat";
chip.prototype.background_position ="center";
