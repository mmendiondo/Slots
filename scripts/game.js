var grd_instance = null;
var main_grid_element = null;
var slot_column_instance = null;
var chip_instance = null;

initialize();

function initialize()
{
	grd_instance = new grid();	
	slot_column_instance = new slot_column();
	chip_instance = new chip();


	slot_column_instance.width = slot_column_instance.get_width(grd_instance);
	slot_column_instance.height = slot_column_instance.get_height(grd_instance);

	chip_instance.width = chip_instance.get_width(grd_instance, chip_instance.margin);
	chip_instance.height = chip_instance.get_height(grd_instance, chip_instance.margin);

	main_grid_element = grd_instance.element(grd_instance);
	for(var i=0;i<grd_instance.nbr_of_columns;i++)
	{
		var slot_column_instance_element = slot_column_instance.element(slot_column_instance);
		main_grid_element.prepend(slot_column_instance_element);
	}
}

$(document).ready(function()
{
	populate_grid();
});

function populate_grid()
{	
	main_grid_element.children().each(function(x,y){
		add_chip_elements(y);
	});

	$("#content").prepend(main_grid_element);
}

function populate_scalonnated_grid()
{
	main_grid_element.children().each(function(x,y){

		if (x == column_count)
		{
			$(y).html("");
			add_chip_elements(y);
		}
	});
	column_count += 1;

	if (column_count == grd_instance.nbr_of_columns)
	{
		setTimeout(function(){check_winnings()}, ANIMATION_TIME);
	}
}

function add_chip_elements(y)
{
	for(var j=0;j<grd_instance.nbr_of_rows;j++)
	{
		var chip_instance_element = chip_instance.element(chip_instance);
		chip_instance_element.css("background-image", get_random_img());
		chip_instance_element.css("top", j * (chip_instance.width + chip_instance.margin));

		$(y).prepend(chip_instance_element);

		$(chip_instance_element).animate({top: '+=30'},ANIMATION_TIME,function(){});
		$(chip_instance_element).animate({top: '-=30'},ANIMATION_TIME,function(){});
	}
}

var column_count = 0;
var slot_column_cylinder_instance =  new slot_column_cylinder();
var slot_column_cylinder_instance_element = slot_column_cylinder_instance.element(slot_column_cylinder_instance);

function rotate()
{
	column_count = 0;
	$("[name=slot_column]").each(function(x,y)
	{	
		setTimeout(function(){rotate_chip(y)}, ANIMATION_TIME * x);
	});
}

function rotate_chip(y)
{	
	$(y).html("");
	$(y).prepend(slot_column_cylinder_instance_element.clone());
	$(y).children().animate({top: '+=500%'},ANIMATION_TIME * 4,function(){show_scalonated_final();});
}

function show_final()
{
	populate_grid();
}

function show_scalonated_final()
{
	populate_scalonnated_grid();
}

function check_winnings()
{
	var result = get_array_of_chips();

	//en result tengo: [columna][fila], [columna][fila], [columna][fila]
	//en result tengo: [0][0], [0][1], [0][2]
	//en result tengo: [1][0], [1][1], [1][2]
	//en result tengo: [2][0], [2][1], [2][2]
	//en result tengo: [3][0], [3][1], [3][2]
	//en result tengo: [4][0], [4][1], [4][2]
	

	//y en filas array tengo {0,0,0,0,0}

	//if fila1 activada y [0][1] = [1][1]
	var line = new lines();

	var active_lines = 20;
	var winnings = new Array();
	animation_counter =0.1;
	for(var i=0;i<active_lines;i++)
	{
		if(get_winning_lines(result, line.get_line("Ondiss",i)))
		{
			iluminate_line(i);
		}
	}
}

function get_array_of_chips()
{
	var x_position = 0;
	var y_position = 0;
	var chips_array = new Array();

	$("[name=chip]").each(function(x,y)
	{	
		if(chips_array[x_position] == undefined || chips_array[x_position] == null){
			chips_array[x_position] = new Array();}
		chips_array[x_position][y_position] = y;
		if(y_position==grd_instance.nbr_of_rows-1){y_position = 0;x_position += 1}else{y_position += 1;}
	});

	return chips_array;
}