$(document).ready(function(){

	$("#go").click(function(){ // this function is trigger when the "go" button is clicked
		var height = $("#input_grid_height").val(); // retrieve the value
		var width = $("#input_grid_width").val();
		var table_content = "<table id='tbl' class='table table-bordered'>";
		for(var row=0;row<height;row++){
			table_content+="<tr>";
			for(var col=0;col<width;col++){
				table_content+="<td class='cell'></td>";
			}
			table_content+="</tr>";
		}
		table_content+="</table>";
		$("#design_area").html(table_content);

		$("table td").click(function(){
			var color = $("#input_color_picker").val();
			$(this).css("background",color);
		});
		return false;
	});

});
