$(document).ready(function() {

    var i = 0;
    // Theme Settings
    $("#themeSettings").click(function() {
        $(".selectionPlace").slideToggle(400, "swing", function() {
            if ($("#themeSettings").html() == "Add New Widgets") {
                $("#themeSettings").html("Close");
                $(".setting-arrow-up").animate({
                    marginTop: "-10px"
                }, 500);
            } else {
                $("#themeSettings").html("Add New Widgets");
                $(".setting-arrow-up").animate({
                    marginTop: "0px"
                }, 500);
            }
        });
    });
    $(document).on("mouseout", ".records", function() {
        $(".records .this_record").hide();
    });
    $(document).on("mouseover", ".records", function() {
        $(this).children('.this_record').show();
    });
    $(document).on("click", ".this_record", function() {
        $(this).parent().remove();
        changeFirstLast();
    });

    //Add Row with Type
    $(document).on("click", ".settings_styles li", function() {
        Type = $(this).find(".setting-text").text();
        if (Type == "")
            alert("Please Select Style..");
        else {
            var record = '';
            switch (Type) {
                case "Objective":
                    class_name = "objective" + i;
                    record = '<div class="row records blink">';
                    record += '<div class="span3 add">';
                    record += '<div class="row">';
                    record += '<div class="span3"><span class="title">Objective</span></div>';
                    record += '<div class="toShow">';
                    record += '<span class="icon-arrow-up up-' + class_name + '" title="Move Up"></span>';
                    record += '<span class="icon-arrow-down down-' + class_name + '" title="Move Down"></span>';
                    record += '<span class="icon-plus-sign add-' + class_name + '" title="Add New"></span>';
                    record += '<span class="icon-remove-sign remove-' + class_name + '" title="Remove Last"></span>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="span8 ' + class_name + '">';
                    record += '<div class="row">';
                    record += '<div class="content" data-mercury="full">';
                    record += 'To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="hide this_record">x</div>';
                    record += '</div>';
                    console.log('data-mercury=full');
                    $(".main").append(record);
                    break;
                case "Education":
                    class_name = "education" + i;
                    record = '<div class="row records blink">';
                    record += '<div class="span3 add">';
                    record += '<div class="row">';
                    record += '<div class="span3"><span class="title">Education</span></div>';
                    record += '<div class="toShow">';
                    record += '<span class="icon-arrow-up up-' + class_name + '" title="Move Up"></span>';
                    record += '<span class="icon-arrow-down down-' + class_name + '" title="Move Down"></span>';
                    record += '<span class="icon-plus-sign add-' + class_name + '" title="Add New"></span>';
                    record += '<span class="icon-remove-sign remove-' + class_name + '" title="Remove Last"></span>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="span8">';
                    record += '<div class="row">';
                    record += '<div class="content">';
                    record += '<ul class="' + class_name + ' edu-list">';
                    record += '<li>';
                    record += '<span data-mercury="full" class="highlight">MBA Marketing and Human Resource</span>';
                    record += '<span data-mercury="full">April 2011 - May 2013-Present.<br>';
                    record += '<span>Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span>';
                    record += '</li>';
                    record += '<li>';
                    record += '<span data-mercury="full" class="highlight">MBA Marketing and Human Resource</span>';
                    record += '<span data-mercury="full">April 2011 - May 2013-Present.<br>';
                    record += '<span>Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span>';
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
                    class_name = "project" + i;
                    record = '<div class="row records blink">';
                    record += '<div class="span3 add">';
                    record += '<div class="row">';
                    record += '<div class="span3"><span class="title">Project</span></div>';
                    record += '<div class="toShow">';
                    record += '<span class="icon-arrow-up up-' + class_name + '" title="Move Up"></span>';
                    record += '<span class="icon-arrow-down down-' + class_name + '" title="Move Down"></span>';
                    record += '<span class="icon-plus-sign add-' + class_name + '" title="Add New"></span>';
                    record += '<span class="icon-remove-sign remove-' + class_name + '" title="Remove Last"></span>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="span8 border-left ' + class_name + '">';
                    record += '<div class="row">';
                    record += '<div class="span3">';
                    record += '<span class="highlight" data-mercury="full">Name of the Organisation</span>';
                    record += '</div>';
                    record += '<span class="span1"> - </span>';
                    record += '<div class="span4" data-mercury="full">';
                    record += '<span data-mercury="full">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="row">';
                    record += '<div class="span3">';
                    record += '<span class="highlight" data-mercury="full">Duration</span>';
                    record += '</div>';
                    record += '<span class="span1"> - </span>';
                    record += '<div class="span4">';
                    record += '<span data-mercury="full">6 Weeks.</span>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="row">';
                    record += '<div class="span3">';
                    record += '<span class="highlight" data-mercury="full">Project Title</span>';
                    record += '</div>';
                    record += '<span class="span1"> - </span>';
                    record += '<div class="span4">';
                    record += '<span data-mercury="full">"Customer Satisfaction".</span>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="hide this_record">x</div>';
                    record += '</div>';

                    $(".main").append(record);
                    break;
                case "Skills":
                    class_name = "skills" + i;
                    record = '<div class="row records blink">';
                    record += '<div class="span3 add">';
                    record += '<div class="row">';
                    record += '<div class="span3"><span class="title">Skills</span></div>';
                    record += '<div class="toShow">';
                    record += '<span class="icon-arrow-up up-' + class_name + '" title="Move Up"></span>';
                    record += '<span class="icon-arrow-down down-' + class_name + '" title="Move Down"></span>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="span8">';
                    record += '<div class="row">';
                    record += '<div class="content" data-mercury="full">';
                    record += '<p>Love to work with people around.</p>';
                    record += '<p>Listen to and respect other ideas.</p>';
                    record += '<p>Self motivated and ability to motivate others.</p>';
                    record += '<p>Passionate about applying my innovative ideas in my profession.</p>';
                    record += '</div>';
                    record += '</div>';
                    record += '</div>';
                    record += '<div class="hide this_record">x</div>';
                    record += '</div>';
                    $(".main").append(record);
                    break;
            }
            i++;
            generate_script(Type, class_name);
            Mercury.trigger('reinitialize');
            $('body,html').animate({
                scrollTop: $('body').height()
            }, 800);
            setTimeout(function() {
                $(".blink").removeClass("blink");
            }, 2000);
        }
    });

    function generate_script(type, class_name) {
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        switch (type) {
            case "Objective":
                $(document).on("click", ".add-" + class_name, function() {
                    var record = '<div class="row" data-mercury="full"><div class="content">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
                    $("." + class_name).append(record);
                    current_color = $(".title,.title p,.highlight").css("color");
                    // console.log(current_color);
                    $(".title,.title p,.highlight").css("color", current_color);
                });
                $(document).on("click", ".remove-" + class_name, function() {
                    if ($("." + class_name + " .row").length == 1)
                        $("." + class_name + " .row").closest(".records").remove();
                    else
                        $("." + class_name + " .row:last").remove();
                });
                break;
            case "Education":
                $(document).on("click", ".add-" + class_name, function() {
                    var record = '<li><span class="highlight" data-mercury="full">MBA Marketing and Human Resource</span><span  data-mercury="full" >April 2011 - May 2013-Present.<br>Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span></li>';
                    $("." + class_name).append(record);
                    current_color = $(".title,.title p,.highlight").css("color");
                    // console.log(current_color);
                    $(".title,.title p,.highlight").css("color", current_color);
                });
                $(document).on("click", ".remove-" + class_name, function() {
                    if ($("." + class_name + " li").length == 1)
                        $("." + class_name + " li").closest(".records").remove();
                    else
                        $("." + class_name + " li:last").remove();
                });
                break;
            case "Project":
                $(document).on("click", ".add-" + class_name, function() {
                    var record = '<div class="row"><div class="span3"><span class="highlight" data-mercury="full">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span data-mercury="full">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
                    $("." + class_name).append(record);
                    current_color = $(".title,.title p,.highlight").css("color");
                    // console.log(current_color);
                    Mercury.trigger("reinitialize");
                    $(".title,.title p,.highlight").css("color", current_color);
                });
                $(document).on("click", ".remove-" + class_name, function() {
                    if ($("." + class_name + " li").length == 1)
                        $("." + class_name + " li").closest(".records").remove();
                    else
                        $("." + class_name + " .row:last").remove();
                });
                break;
            case "Skills":
                $(document).on("click", ".add-" + class_name, function() {
                    var record = '<li>Won district level cricket match for the school team.</li>';
                    $("." + class_name).append(record);
                    current_color = $(".title,.title p,.highlight").css("color");
                    // console.log(current_color);
                    $(".title,.title p,.highlight").css("color", current_color);
                });
                $(document).on("click", ".remove-" + class_name, function() {
                    if ($("." + class_name + " li").length == 1)
                        $("." + class_name + " li").closest(".records").remove();
                    else
                        $("." + class_name + " li:last").remove();
                });
                break;
        }
        $(".title,.title p,.highlight").css("color", current_color);
    }

    // Add Remove Up Down
    // Add and Remove Objective
    $(document).on("click", ".add-objective", function() {
        var record = '<div class="row"><div class="content">To pursue a challenging career in marketing that will enable me to make significant contribution and grow hand in hand with the company.</div></div>';
        $(".objective").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);

    });
    $(document).on("click", ".remove-objective", function() {
        if ($(".objective .row").length == 1)
            $(".objective .row").closest(".records").remove();
        else
            $(".objective .row:last").remove();
    });

    // Add and Remove Education
    $(document).on("click", ".add-education", function() {
        var record = '<li><span data-mercury="full" class="highlight">MBA Marketing and Human Resource</span><span data-mercury="full">April 2011 - May 2013-Present.<br>Currently pursuing my MBA in VIT University with a CGPA of 7.1.</span></li>';
        $(".education").append(record);
        Mercury.trigger("reinitialize");
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
            

    });
    $(document).on("click", ".remove-education", function() {
        if ($(".education li").length == 1)
            $(".education li").closest(".records").remove();
        else
            $(".education li:last").remove();
    });

    // Add and Remove Project
    $(document).on("click", ".add-project", function() {
        var record = '<div class="row"><div class="span3"><span class="highlight" data-mercury="full">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span data-mercury="full">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
        $(".project").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
        Mercury.trigger("reinitialize");
    });
    $(document).on("click", ".remove-project", function() {
        if ($(".project .row").length == 1)
            $(".project .row").closest(".records").remove();
        else
            $(".project .row:last").remove();
    });

    // Add and Remove InternShip
    $(document).on("click", ".add-internship", function() {
        var record = '<div class="row"><div class="span3"><span class="highlight" data-mercury="full">Name of the Organisation</span></div><span class="span1"> - </span><div class="span4"><span data-mercury="full">IDBI FEDERAL LIFE INSURANCE COMPANY, CHENNAI.</span></div></div>';
        $(".internship").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
                Mercury.trigger("reinitialize");

    });
    $(document).on("click", ".remove-internship", function() {
        if ($(".internship .row").length == 1)
            $(".internship .row").closest(".records").remove();
        else
            $(".internship .row:last").remove();
    });

    // Add and Remove activities
    $(document).on("click", ".add-activities", function() {
        var record = '<li>Won district level cricket match for the school team.</li>';
        $(".activities").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
        Mercury.trigger("reinitialize");

    });
    $(document).on("click", ".remove-activities", function() {
        if ($(".activities li").length == 1)
            $(".activities li").closest(".records").remove();
        else
            $(".activities li:last").remove();
    });

    // Add and Remove Skills
    $(document).on("click", ".add-skills", function() {
        var record = '<li>Won district level cricket match for the school team.</li>';
        $(".skills").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
                Mercury.trigger("reinitialize");

    });
    $(document).on("click", ".remove-skills", function() {
        if ($(".skills li").length == 1)
            $(".skills li").closest(".records").remove();
        else
            $(".skills li:last").remove();
    });

    // Add and Remove Hobbies
    $(document).on("click", ".add-hobbies", function() {
        var record = '<li>Won district level cricket match for the school team.</li>';
        $(".hobbies").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);
                Mercury.trigger("reinitialize");

    });
    $(document).on("click", ".remove-hobbies", function() {
        if ($(".hobbies li").length == 1)
            $(".hobbies li").closest(".records").remove();
        else
            $(".hobbies li:last").remove();
    });

    // Add and Remove Personal
    $(document).on("click", ".add-personal", function() {
        var record = '<div class="row"><div class="span3"><span class="highlight" data-mercury="full">Personal Field</span></div><span class="span1"> - </span><div class="span4"><span data-mercury="full">Personal Field value</span></div></div>';
        $(".personal").append(record);
        current_color = $(".title,.title p,.highlight").css("color");
        // console.log(current_color);
        $(".title,.title p,.highlight").css("color", current_color);       
         Mercury.trigger("reinitialize");

    });
    $(document).on("click", ".remove-personal", function() {
        if ($(".personal .row").length == 1)
            $(".personal .row").closest(".records").remove();
        else
            $(".personal .row:last").remove();
    });
    // Up Down
    $('.down-records').click(function() {
        var current = $(this).closest(".records");
        if (!current.hasClass("last")) {
            $after = current.next();
            current.insertAfter($after);
            changeFirstLast();
        }
    });
    $('.up-records').click(function() {
        var current = $(this).closest(".records");
        if (!current.hasClass("first")) {
            $before = current.prev();
            current.insertBefore($before);
            changeFirstLast();
        }
    });

        $('#cp4').colorpicker().on('changeColor', function(ev) {
            color = ev.color.toHex();
            $(".title,.title p,.highlight,.head .name").css("color",color);
            $(".name-bg").css("background",color);
            // console.log(ev.color.toHex());
        });


    function changeFirstLast() {
        $(".records").removeClass("first");
        $(".records").removeClass("last");
        $(".records:first").addClass("first");
        $(".records:last").addClass("last");
    }

});