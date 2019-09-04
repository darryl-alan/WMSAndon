var Alert = (function($){
	/**
	 * function parameters that ends with _ are optional
	 */

	var c = function(){
		var o = this;
		o.maxMsgLength = 1000;

	};

	var p = c.prototype;

	p.success = function(msg, timer_){
		swal({
			html: true,
			title: "Success",
			type: "success",
			text: msg,
			closeOnConfirm: true,
			showCancelButton: false,
			showConfirmButton: timer_ ? false : true, // if there's a timer, then don't show confirm button
			timer: timer_ || null
		});
	};

	p.error = function(msg){
		var o = this;
		if(msg.length > o.maxMsgLength){
			console.log(msg);
			swal('Error', 'Error message too long, please check console', 'error');
			return;
		}

		swal({
			html: true,
			title: "Error",
			type: "error",
			text: msg,
			closeOnConfirm: true,
			showCancelButton: false,
			showConfirmButton: true
		});
	};

	p.info = function(msg){
		swal({
			html: true,
			title: "Info",
			type: "info",
			text: msg,
			closeOnConfirm: true,
			showCancelButton: false,
			showConfirmButton: true
		});
	};

	p.confirm = function(msg, closeOnConfirm, callback){
		swal({
			html: true,
			title: "Are you sure?",
			type: "warning",
			text: msg,
			closeOnConfirm: closeOnConfirm,
			showCancelButton: true,
			showConfirmButton: true
		}, callback);
	};

	p.prompt = function(msg, placeholder, callback){
		swal({
			html: true,
			title: "Input",
			type: "input",
			text: msg,
			inputPlaceholder: placeholder,
			closeOnConfirm: false,
			showCancelButton: true,
			showConfirmButton: true
		}, callback);
	};

	return new c();
})(jQuery);