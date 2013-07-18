$(document).ready(function(){

var i=0;
// Theme Settings
	$("#themeSettings").click(function () {
		$(".selectionPlace").slideToggle( 400 , "swing" , function(){
			if($("#themeSettings").html()=="Theme Settings")
			{
				$("#themeSettings").html("Close Settings");
				$(".setting-arrow-up").animate({marginTop : "-10px"},500);
			}
			else
			{
				$("#themeSettings").html("Theme Settings");
				$(".setting-arrow-up").animate({marginTop : "0px"},500);
			}
		});
	});
// add interst
	$(document).on("click",".add-interest",function(){
		var maxLeft=650,minLeft=250;
		var maxTop=300,minTop=100;
		posLeft=Math.round((Math.random()*(maxLeft-minLeft)+minLeft)/10)*10;
		posTop=Math.round((Math.random()*(maxTop-minTop)+minTop)/10)*10;
		var text= new fabric.Text('Sample Text', {
		    fontSize: 20,
		    left: 0,
		    top: 0,
		    textAlign:'center'
		});
		var circle = new fabric.Circle({
		    radius: 65,
		    fill: '#FF0000',
		    opacity:0.5
		});
		var group = new fabric.Group([ circle.clone(), text.clone() ], {
		left: posLeft,
		top: posTop
		});
		group.item(0).setFill(get_random_color());
		canvas.add(group);
	});
	$(document).on("click",".remove-interest",function(){
		 if(canvas.getActiveObject())
		 	canvas.remove(canvas.getActiveObject());
		 else
		 {
		 	var canvas_objects = canvas._objects;
		    if(canvas_objects.length !== 0)
		    {
			     var last = canvas_objects[canvas_objects.length -1]; //Get last object   
			     canvas.remove(last);
			     // canvas.renderAll();
		 	}
		 }
	});

// Get random color
	function get_random_color() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.round(Math.random() * 15)];
	    }
	    return color;
	}

// Remove records
	$(document).on("mouseout",".records",function(){
		$(".records .this_record").hide();
	});
	$(document).on("mouseover",".records",function(){
		$(this).children('.this_record').show();
	});
	$(document).on("click",".this_record",function(){
		$(this).parent().remove();
		changeFirstLast();
	});

//Add Row with Type
	$(document).on("click",".addRow",function(){
	 	Type=$(".addType").val();
	 	if(Type=="")
	 		alert("Please Select Style..");
	 	else
	 	{
	 		var record = '';
			switch(Type){
				case "Objective":
							class_name="objective"+i;
							record = '<div class="row records">';
							record += '<div class="span12 ">';
							record += '<div class="row title ">';
							record += '<span data-mercury="full">Career Objective</span>';
							record += '</div>';
							record += '<div class="row content" data-mercury="full">';
							record += 'To earn a job which provides me job satisfaction and self-development and succeed in an environment of growth and excellence that will help me achieve personal as well as organizational goals. </div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-records" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-records" title="Move Down"></span>';
							// record += '<span class="icon-plus-sign add-'+class_name+'" title="Add New"></span>';
							// record += '<span class="icon-remove-sign remove-'+class_name+'" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							console.log('data-mercury=full');
							$(".records:last").after(record);
							// $(".main").append(record);
							break;
				case "Education":
							class_name="education"+i;
							record = '<div class="row records blink">';
							record += '<div class="span12 ">';
							record += '<div class="row title ">';
							record += '<span data-mercury="full">Title</span>';
							record += '</div>';
							record += '<div class="row content">';
							record += '<div class="span12 education">';
							record += '<div class="row fields">';
							record += '<div class="span2">';
							record += '<span class="boldFright" data-mercury="full">2012 - 2013</span>';
							record += '</div>';
							record += '<div class="span9 spanBlock borderLeft">';
							record += '<span class=" bold" data-mercury="full">Name of University</span>';
							record += '<span data-mercury="full">Explanation</span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="row fields">';
							record += '<div class="span2">';
							record += '<span class="boldFright" data-mercury="full">2012 - 2013</span>';
							record += '</div>';
							record += '<div class="span9 spanBlock borderLeft">';
							record += '<span class=" bold" data-mercury="full">Name of University</span>';
							record += '<span data-mercury="full">Explanation</span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="row fields">';
							record += '<div class="span2">';
							record += '<span class="boldFright" data-mercury="full">2012 - 2013</span>';
							record += '</div>';
							record += '<div class="span9 spanBlock borderLeft">';
							record += '<span class=" bold" data-mercury="full">Name of University</span>';
							record += '<span data-mercury="full">Explanation</span>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-records" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-records" title="Move Down"></span>';
							record += '<span class="icon-plus-sign add-'+class_name+'" title="Add New"></span>';
							record += '<span class="icon-remove-sign remove-'+class_name+'" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							$(".records:last").after(record);
							break;
				case "Activity":
							class_name="activities"+i;
							record = '<div class="row records blink">';
							record += '<div class="span12 ">';
							record += '<div class="row title ">';
							record += '<span data-mercury="full">Extra Curricular Activities</span>';
							record += '</div>';
							record += '<div class="row content">';
							record += '<div class="offset2 span9 borderLeft mLeft136">';
							record += '<ul class="type-list activities" data-mercury="full">';
							record += '<li>Internship at Tamilnadu Zari Limited</li>';
							record += '<li>Received training in all the functional departments of the organisation.</li>';
							record += '</ul>';
							record += '</div>';
							record += '</div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-records" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-records" title="Move Down"></span>';
							record += '<span class="icon-plus-sign add-activities" title="Add New"></span>';
							record += '<span class="icon-remove-sign remove-activities" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
					
							$(".records:last").after(record);
							break;
				case "Skills":
							class_name="skills"+i;
							record = '<div class="row records blink">';
							record += '<div class="span3 add">';
							record += '<div class="row">';
							record += '<div class="span3"><span class="title">Skills</span></div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-'+class_name+'" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-'+class_name+'" title="Move Down"></span>';
							record += '<span class="icon-plus-sign add-'+class_name+'" title="Add New"></span>';
							record += '<span class="icon-remove-sign remove-'+class_name+'" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="span8">';
							record += '<div class="row">';
							record += '<div class="content">';
							record += '<ul class="stylish '+class_name+'">';
							record += '<li>';
							record += '<span>Love to work with people around.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span>Listen to and respect other ideas.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span>Self motivated and ability to motivate others.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span>Passionate about applying my innovative ideas in my profession.</span>';
							record += '</li>';
							record += '</ul>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							$(".records:last").after(record);
							break;
			}
			i++;
			 Mercury.trigger('reinitialize');
			generate_script(Type,class_name);
			changeFirstLast();
			 $('body,html').animate({ scrollTop: $('body').height() }, 800);
			 setTimeout(function() { $(".blink").removeClass("blink");}, 2000);
		}
	});

function generate_script (type, class_name) {
	current_color = $(".title,.title p,.highlight").css("color");
	// console.log(current_color);
	switch(type)
	{
		case "Objective":
						$(document).on("click",".add-"+class_name,function(){
						 	var record='<div class="row" data-mercury="full"><div class="content">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
						 	$("."+class_name).append(record);
						 		current_color = $(".title,.title p,.highlight").css("color");
								// console.log(current_color);
								$(".title,.title p,.highlight").css("color",current_color);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" .row").length<=1)
						 		$("."+class_name+" .row").closest(".records").remove();
						 	else
						 		$("."+class_name+" .row:last").remove();
						});
						break;
		case "Education":
						$(document).on("click",".add-"+class_name,function(){
							var record='<li><span class="highlight">MBA Marketing and Human Resource</span><span>April 2011 - May 2013-Present.</span><span>Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span></li>';
						 	$("."+class_name).append(record);
						 		current_color = $(".title,.title p,.highlight").css("color");
								// console.log(current_color);
								$(".title,.title p,.highlight").css("color",current_color);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length<=1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" li:last").remove();
						});
						break;
		case "Project":
						$(document).on("click",".add-"+class_name,function(){
							var record='<div class="row"><div class="span3"><span class="highlight">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span>IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
						 	$("."+class_name).append(record);
						 		current_color = $(".title,.title p,.highlight").css("color");
								// console.log(current_color);
								$(".title,.title p,.highlight").css("color",current_color);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length<=1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" .row:last").remove();
						});
						break;
		case "Skills":
						$(document).on("click",".add-"+class_name,function(){
							var record='<li>Sample Text</li>';
						 	$("."+class_name).append(record);
						 		current_color = $(".title,.title p,.highlight").css("color");
								// console.log(current_color);
								$(".title,.title p,.highlight").css("color",current_color);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length<=1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" li:last").remove();
						});
						break;
	}
	$(".title,.title p,.highlight").css("color",current_color);
}

// Add Remove Up Down
	// Add and Remove Objective
		$(document).on("click",".add-objective",function(){
		 	var record='<div class="row"><div class="content">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
		 	$(".objective").append(record);
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-objective",function(){
			if($(".objective .row").length<=1)
		 		$(".objective .row").closest(".records").remove();
		 	else
		 		$(".objective .row:last").remove();
		});

	// Add and Remove Education
		$(document).on("click",".add-education",function(){
			var fields='<div class="row fields">';
            fields+='<div class=" span2">';
            fields+='<span class="boldFright" data-mercury="full">2008 - 2012</span>';
            fields+='</div>';
            fields+='<div class="span9 spanBlock borderLeft">';
            fields+='<span class="bold" data-mercury="full">Name of University</span>';
            fields+='<span data-mercury="full">Secured CGPA.</span>';
            fields+='</div>';
          	fields+='</div>';
		 	$(".education").append(fields);
		 	Mercury.trigger('reinitialize');
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-education",function(){
		 	// console.log("clicked remove");
		 	if($(".education .fields").length<=1)
		 		$(".education .fields").closest(".records").remove();
		 	else
		 		$(".education .fields:last").remove();
		});

	// Add and Remove Project
		$(document).on("click",".add-experience",function(){
			var fields='<div class="row fields">';
            fields+='<div class=" span2">';
            fields+='<span class="boldFright" data-mercury="full">April 2012</span>';
            fields+='</div>';
            fields+='<div class="span9 spanBlock borderLeft">';
            fields+='<span class="bold" data-mercury="full">Name of Company</span>';
            fields+='<span data-mercury="full">Explanation</span>';
            fields+='</div>';
          	fields+='</div>';
          	$(".experience").append(fields);
          	Mercury.trigger('reinitialize');
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-experience",function(){
		 	if($(".experience .fields").length<=1)
		 		$(".experience .fields").closest(".records").remove();
		 	else
		 		$(".experience .fields:last").remove();
		});

	// Add and Remove IVs
		$(document).on("click",".add-ivs",function(){
			var record='<li>Sample Text</li>';
		 	$(".ivs").append(record);
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-ivs",function(){
		 	if($(".ivs li").length<=1)
		 		$(".ivs li").closest(".records").remove();
		 	else
		 		$(".ivs li:last").remove();
		});

	// Add and Remove activities
		$(document).on("click",".add-activities",function(){
			var record='<li>Sample Text</li>';
		 	$(".activities").append(record);
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-activities",function(){
		 	if($(".activities li").length<=1)
		 		$(".activities li").closest(".records").remove();
		 	else
		 		$(".activities li:last").remove();
		});

	// Add and Remove Skills
		$(document).on("click",".add-skills",function(){
			var record='<li>Sample Text</li>';
		 	$(".skills").append(record);
		 	current_color = $(".title,.title p,.highlight").css("color");
			// console.log(current_color);
			$(".title,.title p,.highlight").css("color",current_color);
		});
		$(document).on("click",".remove-skills",function(){
		 	if($(".skills li").length<=1)
		 		$(".skills li").closest(".records").remove();
		 	else
		 		$(".skills li:last").remove();
		});

// Up Down
	$(document).on("click",".down-records",function(){
		console.log('moving down');
		var current =$(this).closest(".records");
		if(!current.hasClass("last"))
		{
		 	$after = current.next();
			current.insertAfter($after);
			changeFirstLast();
		}
	});
	$(document).on("click",".up-records",function(){
		console.log('moving up');
		var current =$(this).closest(".records");
		if(!current.hasClass("first"))
		{
		 	$before = current.prev();
	    	current.insertBefore($before);
	    	changeFirstLast();	
	    }
	});


	function changeFirstLast() {
		$(".records").removeClass("first");
		$(".records").removeClass("last");
		$(".records:first").addClass("first");
		$(".records:last").addClass("last");
	}

});