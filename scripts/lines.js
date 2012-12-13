
lines = function()
{
	this.all = function(slot){
		return get_all_Lines(slot);
	};

	this.get_line = function(slot,line)
	{
		return get_all_Lines(slot)[line];
	}
}

function get_all_Lines(slot)
{
	switch(slot)
	{
		case "Ondiss" : 
			var lines_array_array_ondiss_slot = new Array();
			lines_array_array_ondiss_slot[0] = ("0,0,0,0,0").split(",");
			lines_array_array_ondiss_slot[1] = ("1,1,1,1,1").split(",");
			lines_array_array_ondiss_slot[2] = ("2,2,2,2,2").split(",");
			lines_array_array_ondiss_slot[3] = ("2,1,0,1,2").split(",");
			lines_array_array_ondiss_slot[4] = ("0,1,2,1,0").split(",");
			lines_array_array_ondiss_slot[5] = ("1,2,1,0,1").split(",");
			lines_array_array_ondiss_slot[6] = ("1,0,1,2,1").split(",");
			lines_array_array_ondiss_slot[7] = ("2,2,1,0,0").split(",");
			lines_array_array_ondiss_slot[8] = ("0,0,1,2,2").split(",");
			lines_array_array_ondiss_slot[9] = ("2,1,2,1,2").split(",");
			lines_array_array_ondiss_slot[10] = ("0,1,0,1,0").split(",");
			lines_array_array_ondiss_slot[11] = ("1,2,2,2,1").split(",");
			lines_array_array_ondiss_slot[12] = ("1,0,0,0,1").split(",");
			lines_array_array_ondiss_slot[13] = ("2,1,1,1,2").split(",");
			lines_array_array_ondiss_slot[14] = ("0,1,1,1,0").split(",");
			lines_array_array_ondiss_slot[15] = ("1,1,2,1,1").split(",");
			lines_array_array_ondiss_slot[16] = ("1,1,0,1,1").split(",");
			lines_array_array_ondiss_slot[17] = ("1,0,2,0,1").split(",");
			lines_array_array_ondiss_slot[18] = ("1,2,0,2,1").split(",");
			lines_array_array_ondiss_slot[19] = ("1,2,1,2,1").split(",");
			return lines_array_array_ondiss_slot;
			break;
		default: break;
	}
}

var counter =0;
var animation_counter =0.1;
var color = get_random_color();

function get_winning_lines(result, line_array){
	if($(result[counter][line_array[counter]]).css("background-image") == $(result[counter+1][line_array[counter+1]]).css("background-image"))
	{
		var chip_to_change_bg_color = $(result[counter][line_array[counter]]);
		var chip_to_change_bg_color2 = $(result[counter +1][line_array[counter+1]]);
		var bgColor = color;

		setTimeout(function(){change_background_color(chip_to_change_bg_color, bgColor);}, ANIMATION_TIME * animation_counter);
		setTimeout(function(){change_background_color(chip_to_change_bg_color2, bgColor);}, ANIMATION_TIME  * animation_counter);
		setTimeout(function(){reset_bg_color();}, ANIMATION_TIME  * (animation_counter+2));
		
		setTimeout(function(){iluminate_line(line_array);}, ANIMATION_TIME * animation_counter);

		counter +=1;
		get_winning_lines(result, line_array);
		
	}
	else
	{
		animation_counter +=2;
		counter =0;
		//get new color
		color = get_random_color();
	}
}

function iluminate_line(line_array)
{
	console.log(line_array);
}

function change_background_color(chip_to_change_bg_color, bgColor)
{
	chip_to_change_bg_color.css("background-color", bgColor);
}

function reset_bg_color()
{
	$("[name=chip]").css("background-color", "rgba(0,0,0,0)");	
}