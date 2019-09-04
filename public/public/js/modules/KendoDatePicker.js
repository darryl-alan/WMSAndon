// js revealing module pattern and class pattern
var KendoDatePicker = (function($){
	// private methods
	var privates = {
		onChange: function(){
			var o = this;
			pubsub.emit(o.guid, 'KendoDatePicker.Change');
		},
		onClose: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoDatePicker.Close', e);
		},
		onOpen: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoDatePicker.Open', e);
		},
		onInit: function(){
			var o = this;
			pubsub.emit(o.guid, 'KendoDatePicker.Init');
		}
	};

	// constructor
	var c = function(obj){
		var o = this;
		o.guid = Utils.guid();
		o.$el = obj.element;
		o.cnf = $.extend(obj.config, {
			change: privates.onChange.bind(o),
			close: privates.onClose.bind(o),
			open: privates.onOpen.bind(o)
		});
		o.initialized = false;
	};

	var p = c.prototype;

	p.init = function(){
		var o = this;
		if(o.initialized) o.destroy();
		o.$el.kendoDatePicker(o.cnf);
		o.KendoData = o.$el.data('kendoDatePicker');
		o.initialized = true;
		privates.onInit.call(o);
	};

	p.destroy = function(){
		var o = this;
		o.KendoData.destroy();
		o.$el.empty();
	};

	p.enable = function(){
		var o = this;
		o.KendoData.enable(true);
	};

	p.disable = function(){
		var o = this;
		o.KendoData.enable(false);
	};

	p.readonly = function(bool){
		var o = this;
		o.KendoData.readonly(bool);
	};

	p.setOptions = function(cnf){
		var o = this;
		o.KendoData.setOptions(cnf);
	};

	p.val = function(val){
		var o = this;
		if(typeof val === 'undefined'){
			return o.KendoData.value();
		}
		o.KendoData.value(val);
	};

	p.max = function(max){
		var o = this;
		if(typeof max === 'undefined'){
			return o.KendoData.max();
		}
		o.KendoData.max(max);
	};

	p.min = function(min){
		var o = this;
		if(typeof min === 'undefined'){
			return o.KendoData.min();
		}
		o.KendoData.min(min);
	};


	return c;
})(jQuery);