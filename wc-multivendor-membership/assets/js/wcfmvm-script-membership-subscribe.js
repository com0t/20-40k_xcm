jQuery(document).ready(function($) {
	// Choose Membership
	$('.wcfm_membership_subscribe_button').click(function(event) {
	  event.preventDefault();
	  
		$('#wcfm_membership_container').block({
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6
			}
		});
		var data = {
			action          : 'wcfm_choose_membership',
			membership      : $(this).data('membership'),
			wcfm_ajax_nonce : wcfm_params.wcfm_ajax_nonce
		}	
		$.post(wcfm_params.ajax_url, data, function(response) {
			if(response) {
				$response_json = $.parseJSON(response);
				if($response_json.status) {
					if( $response_json.redirect ) window.location = $response_json.redirect;	
				}
				$('#wcfm_membership_container').unblock();
			}
		});
	});
});