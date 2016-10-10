$(function() {
    
    $("#ctl01_UlList").find("li>a").append('<span></span>');
    $("#nav-cl").click(function(event) {
    	$("#ctl01_UlList").slideToggle();
    });
})
    
