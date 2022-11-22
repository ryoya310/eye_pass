jQuery(function($){

	var pass_disable = false;
	input_pass(pass_disable)
	function input_pass(isView) {

		// 入力で同期
		$(".password_value").on("keyup", function() {
			var val = $(this).val();
			$(".password_value").val(val);
			$("#Password").val(val);
		});

		// text <> pass
		$(".password").on("click", "button", function() {
			if ($(this).hasClass("-not-view")) {
				$(".password_not_view").hide();
				$(".password_view").show();
			} else {
				$(".password_view").hide();
				$(".password_not_view").show();
			}
		})
	}
});