slot_column =  function()
{
	this.element = function(elementProps){

		return create_le_me("slot_column", elementProps);

	};

	this.get_width = function(parent_grid)
	{
		return parent_grid.width / parent_grid.nbr_of_columns;
	};

	this.get_height = function(parent_grid)
	{
 		return parent_grid.height;
	}
}

slot_column.prototype.width = 0;
slot_column.prototype.height = 0;
slot_column.prototype.background_color = "rgba(200,100,0,0.8)";
slot_column.prototype.float = "left";
slot_column.prototype.top = 0;
slot_column.prototype.left = 0;

