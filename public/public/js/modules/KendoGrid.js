// js revealing module pattern + constructor pattern
var KendoGrid = (function($){
	// private methods
	var privates = {
		onDataBound: function(e){
			var o = this;
			pubsub.emit(o.guid, 'KendoGrid.DataBound', e);
			if(!o.onInitEmitted){
				pubsub.emit(o.guid, 'KendoGrid.Init');
				o.onInitEmitted = true;
			}
		},
		onDestroy: function(){
			var o = this;
			pubsub.emit(o.guid, 'KendoGrid.Destroy');
		}
	};

	// constructor
	var c = function(obj){
		var o = this;
		o.$el = obj.element;
		o.$tool = obj.toolbar || null;
		o.config = obj.config || {};
		o.initialized = false;
		o.onInitEmitted = false;
		o.guid = Utils.guid();


		// attach events to command buttons
		o.$el.on('click', '.btnExcelExport', o.exportExcel.bind(o));
		o.$el.on('click', '.btnCreate', o.onClickCreate.bind(o));
		o.$el.on('click', '.btnEdit', o.onClickEdit.bind(o));
		o.$el.on('click', '.btnDelete', o.onClickDelete.bind(o));
		o.$el.on('click', '.btnAttachment', o.onClickAttachment.bind(o));
	};

	var p = c.prototype;

	p.onClickEdit = function(e){
		var o = this;
		var item = o.getDataItem(e.target.closest('tr'));
		pubsub.emit(o.guid, 'KendoGrid.Edit', {dataItem: item, e: e});
	};

	p.onClickDelete = function(e){
		var o = this;
		var item = o.getDataItem(e.target.closest('tr'));
		pubsub.emit(o.guid, 'KendoGrid.Delete', {dataItem: item, e: e});
	};

	p.onClickCreate = function(e){
		var o = this;
		pubsub.emit(o.guid, 'KendoGrid.Create');
	};

	p.onClickAttachment = function(e){
		var o = this;
		var item = o.getDataItem(e.target.closest('tr'));
		pubsub.emit(o.guid, 'KendoGrid.Attachment', {dataItem: item, e: e});
	};

	p.init = function(){
		var o = this;
		if(o.initialized)o.destroy();
		o.$el.kendoGrid(o.config);
		o.KendoData = o.$el.data('kendoGrid');
		o.initialized = true;

		// for some reason binding in initialization doesnt work, I have to bind here
		o.KendoData.bind('dataBound', privates.onDataBound.bind(o));
		if(o.onDataBound){
			o.KendoData.bind('dataBound', o.onDataBound);
		}
	};

	p.destroy = function(){
		var o = this;
		o.KendoData.destroy();
		o.$el.empty();
		o.initialized = false;
		o.onInitEmitted = false;
		privates.onDestroy.call(o);
	};

	p.reload = function(){
		var o = this;
		o.KendoData.dataSource.read();
		o.KendoData.refresh();
	};

	p.setDataSource = function(ds){
		this.ds = new kendo.data.DataSource(ds);
	};

	p.setConfig = function(cnf){
		var o = this;
		o.onDataBound = cnf.dataBound || null;
		o.config = {
			dataSource: o.ds || cnf.dataSource,
			scrollable: cnf.scrollable || true,
			groupable: cnf.groupable || false,
			sortable: cnf.sortable || { mode: "multiple" },
			filterable: cnf.filterable|| true,
			resizable: cnf.resizable || true,
			pageable: cnf.pageable || {
				refresh: true,
				input: true,
				numeric: true,
				pageSizes: true,
				buttonCount: 5
			},
			columns: cnf.columns || {},
			toolbar : cnf.toolbar || [
				{
					template: o.$tool.html()
				}
			],
			//dataBound: cnf.onDataBound || o.onDataBound, // for some reason this does not work, I have to bind after initializing
			excel: cnf.excel || {
				allPages: true,
				fileName: cnf.fileName + ".xlsx"
			},
			editable: cnf.editable || false
		};

		// TODO figure out a more efficient way, refactor code above too
		// to make sure all config values passed in are used
		delete cnf.dataBound;
		o.config = $.extend(o.config, cnf);
	};

	p.getData = function(){
		return this.KendoData.dataSource.data();
	};

	p.getDataItem = function(tr){
		return this.KendoData.dataItem(tr);
	};

	p.setUrlRead = function(url){
		this.KendoData.dataSource.options.transport.read.url = url;
	};

	p.addData = function(data){
		this.KendoData.dataSource.add(data);
	};

	p.setData = function(data){
		this.KendoData.dataSource.data(data);
	};

	p.clear = function(){
		this.KendoData.dataSource.data([]);
	};

	p.show = function(){
		this.$el.show();
	};

	p.hide = function(){
		this.$el.hide();
	};

	p.exportExcel = function(){
		this.KendoData.saveAsExcel();
	};

	return c;
})(jQuery);