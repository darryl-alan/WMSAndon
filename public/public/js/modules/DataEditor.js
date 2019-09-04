var DataEditor = (function($){
	/**
	 * function parameters that ends with _ are optional
	 */


	/**
	 * Constructor
	 * @param obj (element, toolbar, url, parentGrid)
	 */
	var c = function(obj){
		var o = this;
		o.guid = Utils.guid();
		o.$el = obj.element;
		o.$tool = obj.toolbar;
		o.url = obj.url || null; // for use when saving by ajax call instead of direct to a grid
		o.parentGrid = obj.parentGrid || null; // for use when saving direct to a grid instead of ajax call

		o.mode = null;
		o.isOpen = false;
		o.isModal = o.$el.hasClass('modal');
		o.grids = {}; // child grids of the editor

		_attachEvents.call(o);
	};

	var _attachEvents = function(){
		var o = this;
		o.$tool.find('.btnClose').on('click', function(){o.close(true);});
		o.$tool.find('.btnSave').on('click', o.save);
	};

	var p = c.prototype;

	var _render = function(data_){
		var o = this;
		if(o.isOpen){
			if(o.mode === 'create'){
				o.clear();

				o.$el.find('input, select, textarea').hide();
				o.$el.find('.create').show();

				o.$el.find('input, select, textarea').prop('readonly', false);
				o.$el.find('.create-readonly').prop('readonly', true);
			}
			else if(o.mode === 'update'){
				o.fill(data_);
				o.$el.find('input, select, textarea').hide();
				o.$el.find('.update').show();

				o.$el.find('input, select, textarea').prop('readonly', false);
				o.$el.find('.update-readonly').prop('readonly', true);
			}

			if(o.isModal) o.$el.modal('show');
			else o.$el.show();
		}
		else{
			if(o.isModal) o.$el.modal('hide');
			else o.$el.hide();

			Object.keys(o.grids).forEach(function(key){
				o.grids[key].destroy();
			});
		}
	};

	p.open = function(mode, data_){
		var o = this;
		o.isOpen = true;
		o.mode = mode;
		_render.call(o, data_);
	};

	p.close = function(confirm){
		var o = this;
		confirm = confirm || false;

		if(confirm){
			Alert.confirm('Unsaved data will be lost', true, function(){
				doClose();
			});
		}
		else{
			doClose();
		}

		function doClose(){
			o.isOpen = false;
			o.mode = null;
			_render.call(o);
		}
	};

	p.clear = function(){
		var o = this;
		o.$el.find("input:not([type='radio']), select, textarea").val('');
		o.$el.find("input[type='checkbox']").prop('checked', false);

		Object.keys(o.grids).forEach(function(key){
			o.grids[key].init();
		});
	};

	p.fill = function(data){
		var o = this;
		o.$el.find("input, select, textarea").each(function(){
			$(this).val(data[$(this).attr('id')]);
		});

		o.$el.find("input[type='checkbox']").each(function(){
			$(this).prop('checked', data[$(this).attr('id')] == 1);
		});

		Object.keys(o.grids).forEach(function(key){
			o.grids[key].init();
			o.grids[key].fill(data);
		});
	};

	p.getData = function(){
		var o = this;
		var data = {};

		o.$el.find('input, select, textarea').each(function(){
			data[$(this).attr('id')] = $(this).val();
		});

		o.$el.find("input[type='checkbox']").each(function(){
			data[$(this).attr('id')] = $(this).prop('checked') ? 1 : 0;
		});

		Object.keys(o.grids).forEach(function(key){
			data[key] = o.grids[key].getData();
		});

		return data;
	};

	p.save = function(){
		var o = this;
		var data = o.getData();
		if(o.url){
			// ajax call
			$.ajax(o.url, {
				cache: false,
				data: data,
				method: "POST"
			 })
			 .done(function(data, textStatus, jqXHR){
				 if(data === 'success'){
				 	 o.close();
				 }
				 else{
					 console.log(jqXHR);
					 Alert.error(textStatus);
				 }
			 })
			 .fail(function(jqXHR, textStatus, errorThrown){
				 console.log(jqXHR);
				 Alert.error(textStatus);
			 });
		}
		else if(o.parentGrid){
			// save to parent grid
			if(!o.parentGrid.add(data)){
				Alert.error('Something went wrong');
			}
			else{
				o.close();
			}
		}
	};

	return c;
})(jQuery);