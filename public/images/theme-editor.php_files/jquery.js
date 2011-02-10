jQuery(document).ready(function() {
    jQuery('.collapseomatic').livequery('click', function(event) {
		//alert('phones ringin dude');
		jQuery(this).toggleClass('close');
		var id = jQuery(this).attr('id');
		jQuery('#target-'+id).slideToggle('fast', function() {
		    // Animation complete.
		});
	});
	
	jQuery('.rockstar').livequery('click', function(event) {
		//alert('phones ringin dude');
		//jQuery(this).toggleClass('close');
		var id = jQuery(this).attr('id');
		var key = jQuery(this).val();
		jQuery('.isrockstar').each(function(){
			jQuery(this).val('Rockstar Features:');
		});
	});
});