@extends('layouts.app')

@section('content')
<style>
	.k-grid .k-grid-header .k-header{
		font-weight: 900;
	}
</style>
<div class="page-main">
	<div class="page-content padding-10">
		<div id="grid" style="margin-top:5px; margin-bottom:5px;"></div>
	</div>
</div>

<script>
	var AppD = {
		attachEvents: function () {
			var o = this;
			o.dom.$grid.on('click', '#btnExcel', o.eventHandlers.onClickBtnExcel.bind(o));
		},
		cacheDom: function () {
			var o = this;
			o.dom.$grid = $("#grid");
		},
		data: {			
			Date_From: kendo.toString(new Date(), 'yyyy-MM-dd'), //kendo.toString(new Date((new Date()).setDate(1)), 'yyyy-MM-dd'),
			Date_To: null,//kendo.toString(new Date(), 'yyyy-MM-dd'),
		},
		dom: {},
		eventHandlers: {
			onClickBtnExcel: function(){
				var o = this;
				o.dom.$grid.data('kendoGrid').saveAsExcel();
			},
		},
		fn: {
			resizeGrid: function(){
				var o = this;

				var $window = $(window);
				var windowHeight = $window.height();
				var windowWidth = $window.width();

				var dataArea = o.dom.$grid.find(".k-grid-content");
				o.dom.$grid.height(windowHeight - 100);
			},
		},
		init: function () {
			var o = this;
			o.cacheDom();
			o.attachEvents();
			o.initElements();
			o.fn.resizeGrid.call(o);
		},
		initElements: function () {
			var o = this;
			o.dom.$grid.kendoGrid({
				excel:{
					fileName:"RTD Report.xlsx",
					allPages:true, 
					filterable:true
				},
				excelExport: function(e){
					var rows = e.workbook.sheets[0].rows;

					for (var ri = 0; ri < rows.length; ri++){
						var row = rows[ri];
						if(row.type == 'group-footer'||row.type == 'footer'){
							for(var ci = 0; ci < row.cells.length; ci++){
								var cell = row.cells[ci];

								if(cell.value){
									cell.value = $(cell.value).text();
									cell.hAlign = 'right';
								}
							}
						}
					}
				},
				dataSource: {
					transport: {
						read: function (options) {
							$.ajax({
								method: 'post',
								url: 'index.php?type=api&controller=RTDReport&action=read',
								dataType: 'text',
								data: {Date_From: o.data.Date_From, Date_To: o.data.Date_To}
							}).done(function (data, textStatus, jqXHR) {
								try {
									var result = JSON.parse(data);
								}
								catch (e) {
									swal('Error', 'Error loading grid', 'error');
									console.log(data);
									options.success({data: []});
									return;
								}
								options.success(result);
							}).fail(function (jqXHR, textStatus, errorThrown) {
								swal('Error', errorThrown + (jqXHR.responseText !== '' ? ': ' + jqXHR.responseText : ''), 'error');
								console.log(jqXHR);
								options.success({data: []});
							});
						}
					},
					schema: {
						data: "data",
						total: function (result) {
							result = result.data || result;
							return result.length;
						},
						model: {
							id: "No_Chassis",
							fields: {
								Brand_Code: {type: "string"},
								Brand_Desc: {type: "string"},
								Model: {type: "string"},
								Vehicle_Type: {type: "string"},
								No_Chassis: {type: "string"},
								No_Engine: {type: "string"},
								Warna_Code: {type: "string"},
								Warna: {type: "string"},
								Interior: {type: "string"},
								Distributed_Date: {type: "date"},
								RTD_Date: {type: "date"},
								Distributed_ID: {type: "string"},
								Owners: {type: "string"},
								Destination: {type: "string"},
								Last_Vehicle_Status: {type: "string"},
								Calendar_Bat: {type: "string"},
							}
						}
					},
					pageSize: 20,
					group: [ 
						{
							field: "Brand_Desc", aggregates: [
								{ field: "No_Chassis", aggregate: "count" },
							 ]
						},
					],   
					aggregate: [ 
						{ field: "No_Chassis", aggregate: "count" },
					]
				},
				scrollable: true,
				sortable: true,
				resizable: true,
				reorderable: true,
				groupable: {
					showFooter: true
				},
				filterable: {
					extra: false,
					operators: {
						string: {
							contains: "Contains",
							eq: "Equal to",
							neq: "Not equal to"
						}
					}
				},
				pageable: {
					refresh: true,
					input: true,
					numeric: true,
					pageSizes: true,
					buttonCount: 5
				},
				columns: [
					{
						title: "Date",
						columns: [
						{
							field: "Distributed_Date",
							title: "Distributed",
							template: "<div class='customClass'> #= (Distributed_Date == null) ? ' ' : kendo.toString(Distributed_Date, 'dd/MM/yyyy') # </div>",
							groupHeaderTemplate: "#=value#",
							footerTemplate: "Total", 
							groupFooterTemplate: "Sub Total",
							width: 75
						},
						{
							field: "RTD_Date",
							title: "RTD",
							template: "<div class='customClass'> #= (RTD_Date == null) ? ' ' : kendo.toString(RTD_Date, 'dd/MM/yyyy HH:mm:ss') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 120,
							filterable: false
						}],
					},
					{
						title: "Vehicle Group",
						columns: [
						{
							field: "Vehicle_Type",
							title: "Type",
							template: "<div class='customClass'> #= (Vehicle_Type == null) ? ' ' : kendo.toString(Vehicle_Type, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 60,
							hidden: true
						},
						{
							field: "Brand_Code",
							title: "CD",
							template: "<div class='customClass'> #= (Brand_Code == null) ? ' ' : kendo.toString(Brand_Code, '') # </div>",
							width: 50,
							groupHeaderTemplate: "#=value#",
							hidden: true
						},
						{
							field: "Brand_Desc",
							title: "Brand",
							template: "<div class='customClass'> #= (Brand_Desc == null) ? ' ' : kendo.toString(Brand_Desc, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 70,
							// hidden: true
						},
						{
							field: "Model",
							title: "Model",
							template: "<div class='customClass'> #= (Model == null) ? ' ' : kendo.toString(Model, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 175
						}]
					},
					{
						field: "No_Chassis",
						title: "No.Chassis",
						template: "<div class='customClass'> #= (No_Chassis == null) ? ' ' : kendo.toString(No_Chassis, '') # </div>",
						groupHeaderTemplate: "#=value#",
						aggregates: ["count"], 
						footerTemplate: "<div class='text-left' span style=\'float:left;font-size: 11px\'>#=count.formatMoney(0, ',','.')#</div>",
						groupFooterTemplate: "<div class='text-left' span style=\'float:left;font-size: 11px\'>#=count.formatMoney(0, ',','.')#</div>",
						width: 135
					},
					{
						field: "No_Engine",
						title: "No.Engine",
						template: "<div class='customClass'> #= (No_Engine == null) ? ' ' : kendo.toString(No_Engine, '') # </div>",
						groupHeaderTemplate: "#=value#",
						width: 70,
						hidden: true
					},
					{
						title: "Colour",
						columns: [
						{
							field: "Warna_Code",
							title: "ID",
							template: "<div class='customClass'> #= (Warna_Code == null) ? ' ' : kendo.toString(Warna_Code, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 40,
							hidden: true
						},
						{
							field: "Warna",
							title: "Exterior",
							template: "<div class='customClass'> #= (Warna == null) ? ' ' : kendo.toString(Warna, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 120
						},
						{
							field: "Interior",
							title: "Interior",
							template: "<div class='customClass'> #= (Interior == null) ? ' ' : kendo.toString(Interior, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 120
						},
						{
							field: "Calendar_Bat",
							title: "Battery",
							template: "<div class='customClass'> #= (Calendar_Bat == null) ? ' ' : kendo.toString(Calendar_Bat, '') # </div>",
							groupHeaderTemplate: "#=value#",
							width: 70
						}]
					},
					{
						field: "Destination",
						title: "Destination",
						template: "<div class='customClass'> #= (Destination == null) ? ' ' : kendo.toString(Destination, '') # </div>",
						groupHeaderTemplate: "#=value#",
						width: 130
					},
					{
						field: "Distributed_ID",
						title: "Distributed_ID",
						template: "<div class='customClass'> #= (Distributed_ID == null) ? ' ' : kendo.toString(Distributed_ID, '') # </div>",
						groupHeaderTemplate: "#=value#",
						width: 70,
						hidden: true
					},
					{
						field: "Distributed_Type",
						title: "Purpose",
						template: "<div class='customClass'> #= (Distributed_Type == null) ? ' ' : kendo.toString(Distributed_Type, '') # </div>",
						groupHeaderTemplate: "#=value#",
						width: 100,
					},
				],
				toolbar: $("#template_toolbar").html(),
				dataBound: function (e) {
					o.initAfter();
				}
			});
		},
		initAfter: function () {
			var o = this;
			if (o.initAfterCalled) return;
			o.initAfterCalled = true;

			o.dom.$Date_From = $("#Date_From");
			o.dom.$Date_To = $("#Date_To");

			o.dom.$Date_From.width(120).kendoDatePicker({
				value:o.data.Date_From,
				format: 'dd/MM/yyyy',
				change() {
					o.data.Date_From = kendo.toString(this.value(), 'yyyy-MM-dd');
					o.dom.$grid.data('kendoGrid').dataSource.read();
				}
			});

			o.dom.$Date_To.width(120).kendoDatePicker({
				value:o.data.Date_To,
				format: 'dd/MM/yyyy',
				change() {
					o.data.Date_To = kendo.toString(this.value(), 'yyyy-MM-dd');
					o.dom.$grid.data('kendoGrid').dataSource.read();
				}
			});
		}
	};
	$(function () {
		AppD.init();
	});
</script>

<script type="text/x-kendo-template" id="template_toolbar">
	<span class="k-pager-refresh" style="font-weight: bold"> - RTD Report - &nbsp;&nbsp;</span>
	<div class="toolbar">
		<button data-toggle="tooltip" title="Save as Excel" type="button" class="btn ink-reaction btn-floating-action btn-xs btn-warning" id="btnExcel">
			<i class="k-icon k-i-excel"></i>
		</button>
		<input id="Date_From">
		<input id="Date_To">
	</div>
</script>
@endsection



