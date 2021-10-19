$(document).ready(function () {
       
    $('.tab_1_content_heading').click(function (e) { 
        var active_content = $(this).next('.tab_1_content_data_main').slideToggle();
        $('.tab_1_content_data_main').not(active_content).slideUp();
        var active_heading= $(this).toggleClass("active");
        $('.tab_1_content_heading').not(active_heading).removeClass('active');
    });

    $('.property_sub_tab').click(function(e)
    {
        var active_tab = $(this).addClass('active_tab');
        $('.property_sub_tab').not(active_tab).removeClass('active_tab');

    });

    $('.content_tab').click(function(e)
    {
        $('.tab_1_content').fadeIn('slow');
        $('.tab_2_content').hide();
        $('.tab_3_content').hide();
    });
    $('.style_tab').click(function(e)
    {
        $('.tab_2_content').fadeIn('slow');
        $('.tab_1_content').hide();
        $('.tab_3_content').hide();
    });
    $('.advanced_tab').click(function(e)
    {
        $('.tab_3_content').fadeIn('slow');
        $('.tab_2_content').hide();
        $('.tab_1_content').hide();
        
    });


});