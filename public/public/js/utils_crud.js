String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

Number.prototype.formatMoney = function(c, d, t){
	var n = this, 
	    c = isNaN(c = Math.abs(c)) ? 2 : c, 
	    d = d == undefined ? "." : d, 
	    t = t == undefined ? "," : t, 
	    s = n < 0 ? "-" : "", 
	    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
	    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function populateFields(dataItem){
	$("#editContent input, #editContent select, #editContent textarea").each(function(){
		$(this).val(dataItem[$(this).attr('id')]);
	});

	$("#editContent input[type='checkbox']").each(function(){
		$(this).prop('checked', dataItem[$(this).attr('id')] == 1);
	});
}

function clearFields(){
	$("#editContent input:not([type='radio']), #editContent, select, #editContent textarea").val('');

	$("#editContent input[type='checkbox']").prop('checked', false);
}

function getData(){
	var data = {};

	$("#editContent input, #editContent select, #editContent textarea").each(function(){
		data[$(this).attr('id')] = $(this).val();
	});
	$("#editContent input[type='checkbox']").each(function(){
		data[$(this).attr('id')] = $(this).prop('checked') ? 1 : 0;
	});

	return data;
}

function xls() {
	var count = grid.dataSource.total();
	if(count>=1){
		grid.saveAsExcel();
	}
}

function ReloadGrid(){
	$('#grid').data('kendoGrid').dataSource.read();
	$('#grid').data('kendoGrid').refresh();
}

function CloseWindow() {
	$("#editContent" ).slideUp( "slow", function() {});
}

$(document).on("click", ".k-grid .k-pager-refresh", function (e) {
	$("form.k-filter-menu button[type='reset']").trigger("click");
	var dsTemp = $("#grid").data("kendoGrid").dataSource;
    dsTemp.filter([]);
});

var tooltipsInitialized = false;
function setToolTips(){
	//if(!$("#btnApprove").length && !$("#btnReject").length && !$("#btnRejectReason").length
	//	&& !$("#btnAttachment").length && !$("#btnCertificate").length && !$("#btnDone").length
	//	&& !$("#btnUbah").length && !$("#btnHapus").length && !$("#btnUbahPopulate").length)return;
	$(document).on('mouseover', '.k-grid-content', function(){
		if(tooltipsInitialized) return;
		//tooltipsInitialized = true;
		attachToolTips($("#grid"));
	});
}

function attachToolTips($grid){
	if($grid.find("#btnSubmit").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnSubmit").closest('td').index() + 1) + ")","Submit"); tooltipsInitialized = true}
	if($grid.find("#btnSurrender").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnSurrender").closest('td').index() + 1) + ")","Surrender"); tooltipsInitialized = true}
	
	if($grid.find("#btnTake").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnTake").closest('td').index() + 1) + ")","Take"); tooltipsInitialized = true}
	if($grid.find("#btnNotTake").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnNotTake").closest('td').index() + 1) + ")","Not Take"); tooltipsInitialized = true}
	if($grid.find("#btnReset").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnReset").closest('td').index() + 1) + ")","Reset"); tooltipsInitialized = true}
	if($grid.find("#btnSave").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnSave").closest('td').index() + 1) + ")","Save"); tooltipsInitialized = true}
	if($grid.find("#btnDelete").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnDelete").closest('td').index() + 1) + ")","Delete"); tooltipsInitialized = true}
	if($grid.find("#btnApproval").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnApproval").closest('td').index() + 1) + ")","Approve"); tooltipsInitialized = true}
	if($grid.find("#btnApprove").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnApprove").closest('td').index() + 1) + ")","Approve"); tooltipsInitialized = true}
	if($grid.find("#btnRelease").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnRelease").closest('td').index() + 1) + ")","Release"); tooltipsInitialized = true}
	if($grid.find("#btnUnRelease").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnUnRelease").closest('td').index() + 1) + ")","UnRelease"); tooltipsInitialized = true}
	
	if($grid.find("#btnReject").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnReject").closest('td').index() + 1) + ")","Reject"); tooltipsInitialized = true}
	if($grid.find("#btnRejectReason").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnRejectReason").closest('td').index() + 1) + ")","Reject"); tooltipsInitialized = true}
	if($grid.find("#btnAttachment").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnAttachment").closest('td').index() + 1) + ")","Attachment"); tooltipsInitialized = true}
	if($grid.find("#btnCertificate").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnCertificate").closest('td').index() + 1) + ")","Certificate"); tooltipsInitialized = true}
	if($grid.find("#btnDone").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnDone").closest('td').index() + 1) + ")","Done"); tooltipsInitialized = true}
	if($grid.find("#btnReset").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnReset").closest('td').index() + 1) + ")","Reset"); tooltipsInitialized = true}
	if($grid.find("#btnUbah").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnUbah").closest('td').index() + 1) + ")","Edit"); tooltipsInitialized = true}
	if($grid.find("#btnHapus").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnHapus").closest('td').index() + 1) + ")","Delete"); tooltipsInitialized = true}
	if($grid.find("#btnUbahPopulate").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnUbahPopulate").closest('td').index() + 1) + ")","Edit"); tooltipsInitialized = true}
	if($grid.find("#btnDetail").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnDetail").closest('td').index() + 1) + ")","Detail"); tooltipsInitialized = true}
	if($grid.find("#btnReprint").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnReprint").closest('td').index() + 1) + ")","Reprint"); tooltipsInitialized = true}
	if($grid.find("#btnPreview").length){toolTips(".k-grid-content td:nth-child(" + ($grid.find("#btnPreview").closest('td').index() + 1) + ")","Preview"); tooltipsInitialized = true}
}
	
function toolTips(col, msg){
	$("#grid").kendoTooltip({
	  filter: col,
	  position: "top",
	  content: function(e){
		var dataItem = $("#grid").data("kendoGrid").dataItem(e.target.closest("tr"));
		var content = msg
		return content;
	  }
	}).data("kendoTooltip");
}

function openWindow(){
	$("#editContent" ).modal('toggle');
}

function CReateDetails() {
	clearFields();
	$(".edit-readonly").prop('readonly', false);
	if(typeof createActions != 'undefined' && createActions)createActions();			
	openWindow();
}

function saveMemo(callback) {
	var data = getData();

	if (validator.validate()) {	
		swal({
			title: "Are you sure you want to save?",
			showCancelButton: true,
			confirmButtonText: "Yes",
			closeOnConfirm: false,
			showLoaderOnConfirm: true
		},
		function(){		
			$.post(urls.insert, data).done(function( data, textStatus, jqXHR ) {
				if(data == 'success'){
					swal({title: "Data Saved...", text: "", timer: 1200, type: "success", showConfirmButton: false});			
					ReloadGrid();
					CloseWindow();

				}	
				else{
					swal('', data, 'error');
				}
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				swal('Ajax Error', textStatus, 'error');
			}).always(function(data, textStatus, jqXHR){
				if(typeof callback != 'undefined' && callback){
					callback();
				}
				load_notifications();
			});
		});
	}
}

function onClickEdit(e){
	e.preventDefault();	
	var	dataItem = grid.dataItem($(this).closest("tr"));	
	var data = {};

	for(var i = 0; i < dataFields.length; i++){
		var field = dataFields[i];
		data[field] = dataItem[field];
	}				
	
	if(data[field]!=""){
		populateFields(dataItem);
		
		$(".edit-readonly").prop('readonly', true);
		
		if(typeof editActions != 'undefined' && editActions)editActions(dataItem);
		openWindow();
	}
}

function onClickEditPopulate(e){
	e.preventDefault();	
	var	dataItem = grid.dataItem($(this).closest("tr"));			
	
	populateFields(dataItem);
	
	$(".edit-readonly").prop('readonly', true);
	
	if(typeof editActions != 'undefined' && editActions)editActions(dataItem);
	openWindow();
}

function onClickDelete(e){	
	var dataItem = grid.dataItem($(this).closest("tr"));
	var data = {};

	for(var i = 0; i < dataFields.length; i++){
		var field = dataFields[i];
		data[field] = dataItem[field];
	}

	if(data[field]!=""){
		swal({
			title: "Delete data?",
			showCancelButton: true,
			confirmButtonText: "Yes",
			closeOnConfirm: false,
			showLoaderOnConfirm: true
		},
		function(){						
			$.post(urls.delete, data).done(function( data, textStatus, jqXHR ) {
				if(data == 'success'){
					swal({title: "Data Deleted", text: '', timer: 1200, type: "success", showConfirmButton: false});
				}	
				else{
					swal('', data, 'error');
					console.log(jqXHR);
				}
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				swal('Ajax Error', textStatus, 'error');
				console.log(jqXHR);
			}).always(function( data, textStatus, jqXHR ) { 
				ReloadGrid();
				load_notifications();
				if(typeof deleteCallback != 'undefined' && deleteCallback)deleteCallback();
			});

		});
	}
}

function onClickApprove(e){
	var dataItem = grid.dataItem($(this).closest("tr"));
	var data = {};
	
	for(var i = 0; i < dataFields.length; i++){
		var field = dataFields[i];
		data[field] = dataItem[field];
	}
	
	if(data[field]!=""){
		swal({
			title: "Approve data?",
			showCancelButton: true,
			confirmButtonText: "Yes",
			closeOnConfirm: false,
			showLoaderOnConfirm: true
		},
		function(){						
			$.post(urls.insert, data).done(function( data, textStatus, jqXHR ) {
				if(data == 'success'){
					swal({title: "Data Approved..", text: '', timer: 1200, type: "success", showConfirmButton: false});
				}	
				else{
					swal('', data, 'error');
					console.log(jqXHR);
				}
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				swal('Ajax Error', textStatus, 'error');
				console.log(jqXHR);
			}).always(function( data, textStatus, jqXHR ) { 
				ReloadGrid();
				load_notifications();
				if(typeof deleteCallback != 'undefined' && deleteCallback)deleteCallback();
			});
		});
	}
}

function onClickReject(e){	
	var dataItem = grid.dataItem($(this).closest("tr"));
	var data = {};

	for(var i = 0; i < dataFields.length; i++){
		var field = dataFields[i];
		data[field] = dataItem[field];
	}
	
	if(data[field]!=""){
		swal({
			title: "Reject data?",
			showCancelButton: true,
			confirmButtonText: "Yes",
			closeOnConfirm: false,
			showLoaderOnConfirm: true
		},
		function(){						
			$.post(urls.delete, data).done(function( data, textStatus, jqXHR ) {
				if(data == 'success'){
					swal({title: "Data Deleted", text: '', timer: 1200, type: "success", showConfirmButton: false});
				}	
				else{
					swal('', data, 'error');
					console.log(jqXHR);
				}
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				swal('Ajax Error', textStatus, 'error');
				console.log(jqXHR);
			}).always(function( data, textStatus, jqXHR ) { 
				ReloadGrid();
				load_notifications();
				if(typeof deleteCallback != 'undefined' && deleteCallback)deleteCallback();
			});
		});
	}
}

function validateNumber(event) {
	var key = window.event ? event.keyCode : event.which;

	if (event.keyCode === 8 || event.keyCode === 46
		|| event.keyCode === 37 || event.keyCode === 39) {
		return true;
	}
	else if ( key < 48 || key > 57 ) {
		return false;
	}
	else return true;
};

function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}


function pdfExport(){
	if(typeof urls.pdf == 'undefined') return;
	var grid_ds = $("#grid").data('kendoGrid').dataSource;
	var filters = typeof grid_ds.filter() == 'object' ? JSON.stringify(grid_ds.filter().filters) : '';
	//var definition = JSON.stringify(PDF_COLUMNS);
	var config = JSON.stringify(PDF_CONFIG);

	$("body").append('<form id="pdf_export" action="' + urls.pdf + '" method="POST" style="position:absolute;display:none;visibility:gone;">'
					+ "<input type='hidden' name='filters' value='" + filters + "'>"
					+ "<input type='hidden' name='config' value='" + config + "'>"
					+ '</form>');
	$("#pdf_export").submit().remove();
}

kendo.culture("en-GB");
$(function(){
	$(document).on("click", "#btnUbah", onClickEdit);	
	$(document).on("click", "#btnUbahPopulate", onClickEditPopulate);		
	$(document).on("click", "#btnHapus", onClickDelete);	
	$(document).on("click", "#btnApprove", onClickApprove);		
	$(document).on("click", "#btnReject", onClickReject);	
	$(document).on("click", "#btnExportPDF", pdfExport);
	
	$(document).on("change", "[data-role='datepicker']", function (e){
		var errBlock = '<span id="' + $(this).attr('id') + '-error" class="help-block" style="color:#f44336;">Please enter a valid date</span>';

		var val = $(this).val().trim();
		if(val != '' && val.split('/').length != 3){
			$(this).parent().append(errBlock);
			return;
		}

		var date = val.split('/');
		var d = date[0];
		var m = date[1];
		var y = date[2];

		if(val != '' && (d.length != 2 || m.length != 2 || y.length != 4 || isNaN(d) || isNaN(m) || isNaN(y))){
			$(this).parent().append(errBlock);
			return;	
		}

		$("#" + $(this).attr('id') + '-error').remove();
	});

	setToolTips();
});


