$(document).ready(function(){

	function changeToEdit()
	{
		Aloha.jQuery('.editable').aloha();
	}
		var i=0;
		// $(document).on('click','.addadd',function(){
		// 	$(".objective .row:last").moveUp();
		// });

$('.down-objective').click(function() {
	var current =$(this).closest(".records");
	if(!current.hasClass("last"))
	{
	 	$after = current.next();
		current.insertAfter($after);
		if(current.hasClass("first"))
		{
			$after.addClass("first");
	 		current.removeClass("first");
		}
		
    }
});
$('.up-objective').click(function() {
	var current =$(this).closest(".records");
	if(!current.hasClass("first"))
	{
	 	$before = current.prev();
    	current.insertBefore($before);
    	if(current.hasClass("last"))
			{
				$after.addClass("last");
		 		current.removeClass("last");
			}
		
    }
});


	$(document).on("mouseout",".records",function(){
		$(".records .this_record").hide();
	});
	$(document).on("mouseover",".records",function(){
		$(this).children('.this_record').show();
	});
	$(document).on("click",".this_record",function(){
		$(this).parent().remove();
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
							record = '<div class="row records blink">';
							record += '<div class="span3 add">';
							record += '<div class="row">';
							record += '<div class="span3"><span class="title editable">Objective</span></div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-'+class_name+'" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-'+class_name+'" title="Move Down"></span>';
							record += '<span class="icon-plus-sign add-'+class_name+'" title="Add New"></span>';
							record += '<span class="icon-remove-sign remove-'+class_name+'" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="span8 '+class_name+'">';
							record += '<div class="row">';
							record += '<div class="content editable">';
							record += 'To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							$(".main").append(record);
							break;
				case "Education":
							class_name="education"+i;
							record = '<div class="row records blink">';
							record += '<div class="span3 add">';
							record += '<div class="row">';
							record += '<div class="span3"><span class="title editable">Education</span></div>';
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
							record += '<ul class="'+class_name+' edu-list">';
							record += '<li>';
							record += '<span class="highlight editable">MBA Marketing and Human Resource</span>';
							record += '<span class="editable">April 2011 - May 2013-Present.</span>';
							record += '<span class="editable">Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span class="highlight editable">Bachelor of Business Administration</span>';
							record += '<span class="when editable">May 2008 - May 2011.</span>';
							record += '<span class="editable">Completed my BBA in VIT University with a CGPA of 7.23.</span>';
							record += '</li>';
							record += '</ul>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							$(".main").append(record);
							break;
				case "Project":
							class_name="project"+i;
							record = '<div class="row records blink">';
							record += '<div class="span3 add">';
							record += '<div class="row">';
							record += '<div class="span3"><span class="title editable">Project</span></div>';
							record += '<div class="toShow">';
							record += '<span class="icon-arrow-up up-'+class_name+'" title="Move Up"></span>';
							record += '<span class="icon-arrow-down down-'+class_name+'" title="Move Down"></span>';
							record += '<span class="icon-plus-sign add-'+class_name+'" title="Add New"></span>';
							record += '<span class="icon-remove-sign remove-'+class_name+'" title="Remove Last"></span>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="span8 border-left '+class_name+'">';
							record += '<div class="row">';
							record += '<div class="span3">';
							record += '<span class="highlight editable">Name of the Organisation</span>';
							record += '</div>';
							record += '<span class="span1"> - </span>';
							record += '<div class="span4">';
							record += '<span class="editable">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="row">';
							record += '<div class="span3">';
							record += '<span class="highlight editable">Duration</span>';
							record += '</div>';
							record += '<span class="span1"> - </span>';
							record += '<div class="span4">';
							record += '<span class="editable">6 Weeks.</span>';
							record += '</div>';
							record += '</div>';
							record += '<div class="row">';
							record += '<div class="span3">';
							record += '<span class="highlight editable">Project Title</span>';
							record += '</div>';
							record += '<span class="span1"> - </span>';
							record += '<div class="span4">';
							record += '<span class="editable">"Customer Satisfaction".</span>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
					
							$(".main").append(record);
							break;
				case "Skills":
							class_name="skills"+i;
							record = '<div class="row records blink">';
							record += '<div class="span3 add">';
							record += '<div class="row">';
							record += '<div class="span3"><span class="title editable">Skills</span></div>';
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
							record += '<span class="editable">Love to work with people around.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span class="editable">Listen to and respect other ideas.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span class="editable">Self motivated and ability to motivate others.</span>';
							record += '</li>';
							record += '<li>';
							record += '<span class="editable">Passionate about applying my innovative ideas in my profession.</span>';
							record += '</li>';
							record += '</ul>';
							record += '</div>';
							record += '</div>';
							record += '</div>';
							record += '<div class="hide this_record">x</div>';
							record += '</div>';
							$(".main").append(record);
							break;
			}
			i++;
			changeToEdit();
			generate_script(Type,class_name);
			 $('body,html').animate({ scrollTop: $('body').height() }, 800);
			 setTimeout(function() { $(".blink").removeClass("blink")	}, 2000);
		}
	});

function generate_script (type, class_name) {
	current_color = $(".title,.title p,.highlight").css("color");
	switch(type)
	{
		case "Objective":
						$(document).on("click",".add-"+class_name,function(){
						 	var record='<div class="row"><div class="content editable">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
						 	$("."+class_name).append(record);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" .row").length==1)
						 		$("."+class_name+" .row").closest(".records").remove();
						 	else
						 		$("."+class_name+" .row:last").remove();
						});
						break;
		case "Education":
						$(document).on("click",".add-"+class_name,function(){
							var record='<li><span class="highlight editable">MBA Marketing and Human Resource</span><span class="editable">April 2011 - May 2013-Present.</span><span class="editable">Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span></li>';
						 	$("."+class_name).append(record);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length==1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" li:last").remove();
						});
						break;
		case "Project":
						$(document).on("click",".add-"+class_name,function(){
							var record='<div class="row"><div class="span3"><span class="highlight editable">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span class="editable">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
						 	$("."+class_name).append(record);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length==1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" .row:last").remove();
						});
						break;
		case "Skills":
						$(document).on("click",".add-"+class_name,function(){
							var record='<li><span class="editable">Won district level cricket match for the school team.</span></li>';
						 	$("."+class_name).append(record);
						});
						$(document).on("click",".remove-"+class_name,function(){
						 	if($("."+class_name+" li").length==1)
						 		$("."+class_name+" li").closest(".records").remove();
						 	else
						 		$("."+class_name+" li:last").remove();
						});
						break;
	}
	$(".title,.title p,.highlight").css("color",current_color);
	Updown(class_name);
	changeToEdit();
}

// Add Remove Up Down
	// Add and Remove Objective
		$(document).on("click",".add-objective",function(){
		 	var record='<div class="row"><div class="content editable">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
		 	$(".objective").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-objective",function(){
			if($(".objective .row").length==1)
		 		$(".objective .row").closest(".records").remove();
		 	else
		 		$(".objective .row:last").remove();
		});
		Updown("objective");

	// Add and Remove Education
		$(document).on("click",".add-education",function(){
			var record='<li><span class="highlight editable">MBA Marketing and Human Resource</span><span class="editable">April 2011 - May 2013-Present.</span><span class="editable">Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span></li>';
		 	$(".education").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-education",function(){
		 	if($(".education li").length==1)
		 		$(".education li").closest(".records").remove();
		 	else
		 		$(".education li:last").remove();
		});
		Updown("education");

	// Add and Remove Project
		$(document).on("click",".add-project",function(){
			var record='<div class="row"><div class="span3"><span class="highlight editable">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span class="editable">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
		 	$(".project").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-project",function(){
		 	if($(".project .row").length==1)
		 		$(".project .row").closest(".records").remove();
		 	else
		 		$(".project .row:last").remove();
		});
		Updown("project");

	// Add and Remove InternShip
		$(document).on("click",".add-internship",function(){
			var record='<div class="row"><div class="span3"><span class="highlight editable">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span class="editable">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
		 	$(".internship").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-internship",function(){
		 	if($(".internship .row").length==1)
		 		$(".internship .row").closest(".records").remove();
		 	else
		 		$(".internship .row:last").remove();
		});
		Updown("internship");

	// Add and Remove activities
		$(document).on("click",".add-activities",function(){
			var record='<li><span class="editable">Won district level cricket match for the school team.</span></li>';
		 	$(".activities").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-activities",function(){
		 	if($(".activities li").length==1)
		 		$(".activities li").closest(".records").remove();
		 	else
		 		$(".activities li:last").remove();
		});
		Updown("activities");

	// Add and Remove Skills
		$(document).on("click",".add-skills",function(){
			var record='<li><span class="editable">Won district level cricket match for the school team.</span></li>';
		 	$(".skills").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-skills",function(){
		 	if($(".skills li").length==1)
		 		$(".skills li").closest(".records").remove();
		 	else
		 		$(".skills li:last").remove();
		});
		Updown("skills");

	// Add and Remove Hobbies
		$(document).on("click",".add-hobbies",function(){
			var record='<li><span class="editable">Won district level cricket match for the school team.</span></li>';
		 	$(".hobbies").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-hobbies",function(){
		 	if($(".hobbies li").length==1)
		 		$(".hobbies li").closest(".records").remove();
		 	else
		 		$(".hobbies li:last").remove();
		});
		Updown("hobbies");

	// Add and Remove Personal
		$(document).on("click",".add-personal",function(){
			var record='<div class="row"><div class="span3"><span class="highlight editable">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span class="editable">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
		 	$(".personal").append(record);
		 	changeToEdit();
		});
		$(document).on("click",".remove-personal",function(){
		 	if($(".personal .row").length==1)
		 		$(".personal .row").closest(".records").remove();
		 	else
		 		$(".personal .row:last").remove();
		});
		Updown("personal");

	// Up Down
	function Updown (class_name) {
		$('.down-'+class_name).click(function() {
			var current =$(this).closest(".records");
			if(!current.hasClass("last"))
			{
			 	$after = current.next();
				current.insertAfter($after);
				if(current.hasClass("first"))
				{
					$after.addClass("first");
			 		current.removeClass("first");
				}
				
		    }
		});
		$('.up-'+class_name).click(function() {
			var current =$(this).closest(".records");
			if(!current.hasClass("first"))
			{
			 	$before = current.prev();
		    	current.insertBefore($before);
		    	if(current.hasClass("last"))
					{
						$after.addClass("last");
				 		current.removeClass("last");
					}
				
		    }
		});
	}
});