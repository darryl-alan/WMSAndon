// js revealing module pattern + constructor pattern
var KendoUpload = (function($){
	// private methods
	var privates = {
		onInit: function(){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Init');
		},
		onCancel: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Cancel', e);
		},
		onComplete: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Complete', e);
		},
		onError: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Error', e);
		},
		onProgress: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Progress', e);
		},
		onRemove: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Remove', e);
		},
		onSelect: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Select', e);
		},
		onSuccess: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Success', e);
		},
		onUpload: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoUpload.Upload', e);
		}
	};

	// constructor
	var c = function(obj){
		var o = this;
		o.$el = obj.element;
		o.cnf = obj.config;
		o.guid = Utils.guid();

		// override event configurations if set, because we want users to use this wrapper's pubsub events instead
		o.cnf = $.extend(o.cnf, {
			cancel: privates.onCancel.bind(o),
			complete: privates.onComplete.bind(o),
			error: privates.onError.bind(o),
			progress: privates.onProgress.bind(o),
			remove: privates.onRemove.bind(o),
			select: privates.onSelect.bind(o),
			success: privates.onSuccess.bind(o),
			upload: privates.onUpload.bind(o)
		});
		o.initialized = false;
	};

	var p = c.prototype;

	p.init = function(){
		var o = this;
		if(o.initialized){
			o.destroy();
		}
		o.$el.kendoUpload(o.cnf);
		o.KendoData = o.$el.data('kendoUpload');
		o.initialized = true;
		privates.onInit.call(o);
	};

	p.reset = function(){

	};

	p.destroy = function(){
		var o = this;
		o.KendoData.destroy();
		o.$el.empty();
	};

	p.submit = function(){
		// for auto upload: false

	};

	p.disable = function(){
		var o = this;
		o.KendoData.disable();
	};

	p.enable = function(){
		var o = this;
		o.KendoData.enable();
	};

	p.toggle = function(){
		var o = this;
		o.KendoData.toggle();
	};

	return c;
})(jQuery);