(function ($) {

	LiveChat = LiveChat || {};

	window.App = {
		onAuthorizeError: function() {
			// Show error message on authorize_error event

			// console.log('Authorization error.');
		},
		onAuthorize: function() {
			// Custom logic on authorize event

			// console.log('Authorization success.');
		},
		onCustomerProfile: function(data) {
			// On customer profile event handler (whenever
			// an chat or visitor is selected)

			$('#visitorID').html(data.id);
			$('#visitorName').html(data.name);
			$('#visitorEmail').html(data.email);
			$('#chatID').html(data.chat.id);
		}
	}

	$(document).ready(function () {

		LiveChat.on('authorize', function() {
			App.onAuthorize();
		});

		LiveChat.on('authorize_error', function() {
			App.onAuthorizeError();
		});

		LiveChat.on("customer_profile", function(data) {
			App.onCustomerProfile(data);
		});

		LiveChat.init();
	});

})(jQuery);
