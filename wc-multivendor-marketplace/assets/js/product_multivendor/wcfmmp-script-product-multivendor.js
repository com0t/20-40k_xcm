jQuery(document).ready(function($) {
	$('.wcfm_product_multivendor').click(function(event) {
	  event.preventDefault();
	  $('.wcfm_product_multivendor').block({
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6
			}
		});
		
		var data = {
			action        : 'wcfmmp_product_multivendor_clone',
			product_id    : $('.wcfm_product_multivendor').data('product_id'),
			wcfm_ajax_nonce          : wcfm_params.wcfm_ajax_nonce
		}	
		jQuery.post(wcfm_params.ajax_url, data, function(response) {
			if(response) {
				$response_json = jQuery.parseJSON(response);
				wcfm_notification_sound.play();
				if($response_json.redirect) {
					window.location = $response_json.redirect;
				} else {
					
				}
			}
		});
	});
	
	$('select[name="spmv_orderby"]').each(function() {
	  $(this).change(function() {
	  	$spmv_sroter = $(this);
		  $spmv_sroter.parent().parent().find('.wcfmmp_product_mulvendor_table_container').block({
				message: null,
				overlayCSS: {
					background: '#fff',
					opacity: 0.6
				}
			});
			var data = {
				action       : 'wcfmmp_more_offers_sorting',
				product_id   : $spmv_sroter.data('product_id'),
				sorting      : $spmv_sroter.val(),
				wcfm_ajax_nonce  : wcfm_params.wcfm_ajax_nonce
			}	
			$.ajax({
				type:		'POST',
				url: wcfm_params.ajax_url,
				data: data,
				success:	function(response) {
					$spmv_sroter.parent().parent().find('.wcfmmp_product_mulvendor_table_container').replaceWith( response );
				}
			});
		});
	});
});