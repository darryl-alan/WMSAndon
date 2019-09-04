<!DOCTYPE html>
<html class="no-js css-menubar" lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
	<meta name="TSM" content="WMS | TSM">
	
	<title>WMS | TSM</title>
	
	<link type="text/css" rel="stylesheet" href="public/asset_theme/materialadmin.css" />
	<link rel="shortcut icon" href="public/asset/logo.png" sizes="32x32">
	<link rel="stylesheet" href="public/asset/KendoUI/styles/kendo.common.new.min.css">
	<link rel="stylesheet" href="public/asset/KendoUI/styles/kendo.default.new.min.css">
	
	<script src="public/sweetalert2/sweetalert2.min.js"></script>
	<link rel="stylesheet" href="public/sweetalert2/sweetalert2.min.css">
	
	<link rel="stylesheet" href="public/asset_theme/global/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/asset_theme/global/css/bootstrap-extend.min.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/css/site.min.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/skins/daihatsu.css" type="text/css">
	
	<link rel="stylesheet" href="public/asset_theme/global/vendor/animsition/animsition.css">
	<link rel="stylesheet" href="public/asset_theme/global/vendor/asscrollable/asScrollable.css">
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/slidepanel/slidePanel.css">
	<link rel="stylesheet" href="public/asset_theme/global/vendor/flag-icon-css/flag-icon.css"-->
	<!-- Fonts -->
	<link rel="stylesheet" href="public/asset_theme/global/fonts/material-design/material-design.min.css">
	<link rel="stylesheet" href="public/asset_theme/global/fonts/font-awesome/font-awesome.min.css">
	<link rel="stylesheet" href="public/asset_theme/global/vendor/alertify-js/alertify.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/advanced/alertify.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/uikit/tooltip-popover.css">
	
	<link rel="stylesheet" href="public/asset_theme/global/vendor/asscrollable/asScrollable.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/advanced/scrollable.css">
	<!--link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/layouts/panel-transition.css"-->
	
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/summernote/summernote.css"-->
	
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/cropper/cropper.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/forms/image-cropping.css">
	
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/apps/media.css"-->
	
	<link rel="stylesheet" href="public/asset_theme/global/vendor/bootstrap-treeview/bootstrap-treeview.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/structure/pagination.css">
	
	<link rel="stylesheet" href="public/asset_theme/global/vendor/toastr/toastr.css">
	<link rel="stylesheet" href="public/asset_theme/global/vendor/jquery-wizard/jquery-wizard.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/advanced/toastr.css">
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/filament-tablesaw/tablesaw.css"-->
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/uikit/utilities.css">
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/formvalidation/formValidation.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/forms/validation.css"-->
	
	<link rel="stylesheet" href="public/asset/dropzone/dropzone.css">
	
	<!--link rel="stylesheet" href="public/asset_theme/global/vendor/editable-table/editable-table.css"-->
	<link rel="stylesheet" href="public/asset_theme/global/vendor/jquery-selective/jquery-selective.css">
	<link rel="stylesheet" href="public/asset_theme/center/assets/examples/css/forms/masks.css">
	
	<link rel="stylesheet" href="public/asset_theme/select2/select2.css">
	
	<!--<link rel="stylesheet" href="public/hurst/style.css">-->
	<style>
		.swal2-container{
			z-index: 1701;
		}
		.k-calendar {
			font-size: 12px;
		}
	
		.k-treeview span.k-in{
			padding: 5px;
			cursor: pointer;
		}
	
		.k-grid-footer td, .k-group-footer td, .k-grouping-row td {
			overflow: visible;
			white-space: nowrap;
			color: blue;
		}
	
		.k-tooltip{
			font-size: 8pt;
		}
	
		.k-grid tbody .k-button {
			min-width: 12px;
			width: 30px;
		}
		
		.k-grid  .k-grid-header  .k-header  .k-link {
			height: auto;
		}
		  
		.k-grid  .k-grid-header  .k-header {
			white-space: normal;
		}
	
		.k-chart.small-chart {
			display: inline-block;
			width: 300px;
			height: 300px;
		}
	
		.k-chart.small-chart-list {
			display: inline-block;
			height: 320px;
		}
	
		.k-grid .k-grid-header {
			font-size: 11px;
		}
	
		.k-readonly
		{
			color: gray;
		}
	
		.k-pager-info.k-label {
			font-size: 8pt;
		}
	
		.k-pager-numbers{
			font-size: 8pt;
		}
	
		.k-textbox{
			font-size: 8pt;
		}
	
		.k-grid-pager{
			font-size: 8pt;
		}
	
		.k-grid table tr:hover
		{
			background: #ffb76b; /* Old browsers */
			/* IE9 SVG, needs conditional override of 'filter' to 'none' */
			background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmYjc2YiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmE3M2QiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmY3YzAwIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmN2YwNCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
			background: -moz-linear-gradient(top, #ffb76b 0%, #ffa73d 100%, #ff7c00 100%, #ff7f04 100%); /* FF3.6+ */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffb76b), color-stop(100%,#ffa73d), color-stop(100%,#ff7c00), color-stop(100%,#ff7f04)); /* Chrome,Safari4+ */
			background: -webkit-linear-gradient(top, #ffb76b 0%,#ffa73d 100%,#ff7c00 100%,#ff7f04 100%); /* Chrome10+,Safari5.1+ */
			background: -o-linear-gradient(top, #ffb76b 0%,#ffa73d 100%,#ff7c00 100%,#ff7f04 100%); /* Opera 11.10+ */
			background: -ms-linear-gradient(top, #ffb76b 0%,#ffa73d 100%,#ff7c00 100%,#ff7f04 100%); /* IE10+ */
			background: linear-gradient(to bottom, #ffb76b 0%,#ffa73d 100%,#ff7c00 100%,#ff7f04 100%); /* W3C */
			cursor:pointer;
		}
		.k-grid table tr
		{
			height:30px;
		}
	
		.k-pager-sizes{
			font-size: 11px;
		}
	
		.k-grid-content>table>tbody>tr
		{
			font-size: 11px;
		}
	
		.k-window-titlebar.k-header {
			background: #495F75;  /*#0B610B; set background to the titlebar*/
			color: white; /*set color to the titlebar*/
			font-size: 11px;
			font-weight: bold; /*set font-weight to the titlebar*/
		}
	
		.k-invalid-msg{
			border: 1px solid #ff0000;
			display: none !important;
		}
	
		.k-input {
			font-size:8pt !important;
		}
	
		.k-dropdown-wrap .k-input, .k-numeric-wrap .k-input, .k-picker-wrap .k-input{
			height:23px;
		}
	
		.k-picker-wrap .k-icon{
			margin-top:5px;
		}
	
		.k-window {
			width: 400px;
		}
	
		.k-button{
			font-size: 11px;
			width: auto;
		}
	
		.k-grid tbody .k-button {
			font-size: 11px;
			width: auto;
		}
	
		.k-grid-header th.k-header{
		   vertical-align: middle !important;
		}
	
		.k-grid .k-grid-header .k-header{
			text-align: center;
			font-weight: 900;
		}
	
		.k-state-hover .movie-template a,
		.movie-template a:hover {
			color: #FFFFFF;
		}
	
		#photo {
			overflow: hidden;
			width: 30px;
			height: 30px;
			cursor: pointer;
			border-radius: 50%;
			display: block;
			margin-right: auto;
			margin-left: auto;
		}
	
		#photo_img {
			overflow: hidden;
			width: 25px;
			height: 25px;
			cursor: pointer;
			border-radius: 50%;
			display: block;
			margin-right: auto;
			margin-left: auto;
		}
		
		td.special { border: 2px double Red; }
	
		.birthday {
			background: transparent url(images/cake.png) no-repeat 0 50%;
			display: inline-block;
			width: 16px;
			height: 16px;
			vertical-align: middle;
			margin-right: 3px;
		}
	
		input[type="email"] {
			font-size:9pt !important;
		}
	
		input[type="text"] {
			font-size:9pt !important;
		}
	
		textarea {
			font-size:9pt !important;
		}
	
		.customClass{
			white-space: nowrap;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	
		.customClass_Red{
			background-color:#FEABBA;
			color:black;
		}
	
		.customClass_Yellow{
			background-color:#FFFF66;
			color:black;
		}
	
		.customClass_BlueLight{
			background-color:#b3f0ff;
			color:black;
		}
	
		.customClass_Green{
			background-color:#ccffcc;
			color:black;
		}
	
		.customClass_RedStrong{
			background-color:#FD5B78;
			color:black;
		}
		
		.customClass_PowderBlue{
			background-color:PowderBlue;
			color:black;
		}
	
		.customClass_Grey{
			background-color:#F5F5F5;
			color:black;
		}
	
		.customClass_GreyStrong{
			background-color:#E3E3E3;
			color:black;
		}
	
		.customClass_Blue{
			background-color:#99C5F0;
			color:black;
		}
	
		.customClass_BlueStrong{
			background-color:#00BFFF;
			color:black;
		}
	
		.movie-template img {
			float: left;
			margin: 0 8px;
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}
	
		.movie-template p {
			margin: 3px 0 0;
		}
	
		.movie-template h3 {
			margin: 5px 0 0;
			font-size: 12px;
		}
	
		.movie-template a {
			color: #FF0000;
			font-weight: bold;
			text-decoration: none;
		}
	
		.km-print:after,
		.km-print:before {
			content: "\e20c ";
			width:16px;
			height:17px;
			padding:2px;
		}
	
		.grid_shadows {
			box-shadow: 1px 1px 5px #888888;
		}
	
		.k-panelbar>.k-item>.k-link {
			font-family: "Courier New"; font-size:12px;
		}
	
		ul.k-panelbar .k-group .k-link
		{
			font-family: "Courier New"; font-size:12px;
		}
	
		.k-grid .k-pager-refresh {
			font-size: 20px;
			color: #4400ff;
		}
	
		.k-scheduler-footer
		{
			/* make them invisible */
			display: none;
	
			/* prevent height and paddings from influencing the size calculations */
			height: 0;
			padding: 0;
			overflow: hidden;
		}
	
		#scheduler{
			margin-left: 20px;
			margin-right: 20px;
			margin-top: 20px;
			position: absolute;
		}
	
		/*#grid{*/
		/*margin-left: 20px;*/
		/*margin-top: 20px;*/
		/*position: absolute;*/
		/*}*/
	
		/*#grid1{*/
		/*margin-left: 0px;*/
		/*margin-top: 0px;*/
		/*position: relative;*/
		/*}*/
	
		/*body {
			overflow-x: hidden;
		}*/
	
		.btn-xs{
			padding:1px 1px;
		}
	
		.notepad{
			overflow:auto;
		}
	
		.notepad:focus{
			outline:none;
		}
	
		.k-grid{
			width:99%;
			margin:auto;
		}
	
		.k-dirty{
			display:none;
		}
	
		.k-grid:not(.grid-dynamic-size){
			height: 85vh;
		}
	
		.grid-dynamic-size{
			height: 83vh;
		}
	
		.photo_product {
			width: 30px;
			height: 30px;
			margin-bottom: 5px;
			overflow: hidden;
			border-radius: 50%;
		}
	
		.icon_shop{
			font-size:16px;
		}
	
		div.k-popup .k-item
		{
			font: 12px Roboto,sans-serif; 
		}
		body {
			background-color: #fff;
			overflow-y: hidden;
		}
	
		.k-filename{
			max-width: none;
		}
		.k-file-name{
			margin-right:10px;
		}
		
	
		#toast-container > .toast {
			background-image: none !important;
		}
		#toast-container > .toast:before {
			position: relative;
			font-family: FontAwesome;
			font-size: 40px;
			line-height: 18px;
			float: left;
			margin-left: -1em;
			color: #FFF;
			padding-right: 0.5em;
			margin-right: 0.5em;
			margin-top: 0.5em;
		}   
		#toast-container > .toast-warning:before {
			content: "\f06a";
		}
		#toast-container > .toast-error:before {
			content: "\f001";
		}
		#toast-container > .toast-info:before {
			content: "\f005";
		}
		#toast-container > .toast-success:before {
			content: "\f002";
		}
	</style>
	
	<!--script src="public/asset/js/jquery-2.1.4.min.js"></script>
	<script src="public/js/promise.min.js"></script-->
	<script src="public/asset_theme/global/vendor/jquery/jquery.js"></script>
	<script src="public/asset_theme/global/js/core.js"></script>
	<!--script src="public/asset_theme/global/vendor/modernizr/modernizr.js"></script-->
	<script src="public/asset_theme/global/vendor/breakpoints/breakpoints.js"></script>
	
	<script src="public/asset/dropzone/dropzone.js"></script>
	
	<script src="public/js/kendo.all.new.min.js"></script>
	<script src="public/js/add_function.js"></script>
	<script src="public/asset/KendoUI/js/jszip.min.js" type="text/javascript"></script>		
</head>
<body class="dashboard">
	<nav class="site-navbar navbar navbar-inverse navbar-fixed-top navbar-mega" role="navigation">
		<div class="navbar-container container-fluid">
			<div class="navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
				
			</div>
		</div>
	</nav>
	<div id="content">
		@yield('content')
	</div>
	
	<script src="public/asset_theme/global/vendor/bootstrap/bootstrap.js"></script>

	<script src="public/asset_theme/global/vendor/intro-js/intro.js"></script>
	<!--script src="public/asset_theme/global/vendor/animsition/animsition.js"></script>
	<script src="public/asset_theme/global/vendor/asscroll/jquery-asScroll.js"></script>
	<script src="public/asset_theme/global/vendor/mousewheel/jquery.mousewheel.js"></script-->
	<script src="public/asset_theme/global/vendor/asscrollable/jquery.asScrollable.all.js"></script>
	<script src="public/asset_theme/global/vendor/ashoverscroll/jquery-asHoverScroll.js"></script>

	<!--script src="public/asset_theme/global/vendor/screenfull/screenfull.js"></script>
	<script src="public/asset_theme/global/vendor/slidepanel/jquery-slidePanel.js"></script-->

	<script src="public/asset_theme/global/js/components/webui-popover.js"></script>

	<script src="public/asset_theme/global/js/core.js"></script>
	<script src="public/asset_theme/center/assets/js/site.js"></script>
	<!--script src="public/asset_theme/center/assets/js/configs/config-tour.js"></script-->
	<script src="public/asset_theme/center/assets/js/sections/menu.js"></script>
	<script src="public/asset_theme/center/assets/js/sections/menubar.js"></script>
	<script src="public/asset_theme/center/assets/js/sections/sidebar.js"></script>
	<!--script src="public/asset_theme/global/js/configs/config-colors.js"></script-->
	<script src="public/asset_theme/global/js/components/asscrollable.js"></script>
	<!--script src="public/asset_theme/global/js/components/animsition.js"></script-->
	<script src="public/asset_theme/global/js/components/slidepanel.js"></script>
	<script src="public/asset_theme/global/js/components/panel.js"></script>
	<!--script src="public/asset_theme/center/assets/examples/js/uikit/panel-actions.js"></script>
	<script src="public/asset_theme/center/assets/examples/js/layouts/panel-transition.js"></script-->
	<script src="public/asset_theme/global/js/components/tabs.js"></script>
	<script src="public/asset_theme/global/js/plugins/responsive-tabs.js"></script>
	<script src="public/asset_theme/global/js/plugins/closeable-tabs.js"></script>
	<script src="public/asset_theme/global/js/components/matchheight.js"></script>
	<script src="public/asset_theme/global/vendor/alertify-js/alertify.js"></script>
	<script src="public/asset_theme/global/js/components/alertify-js.js"></script>
	<script src="public/asset_theme/global/js/components/asscrollable.js"></script>
	<script src="public/asset_theme/center/assets/examples/js/advanced/scrollable.js"></script>
	<!--script src="public/asset_theme/global/vendor/cropper/cropper.min.js"></script-->
	<!--script src="public/asset_theme/center/assets/examples/js/forms/image-cropping.js"></script-->
	<script src="public/asset_theme/global/js/plugins/sticky-header.js"></script>
	<script src="public/asset_theme/global/js/components/animate-list.js"></script>
	<script src="public/asset_theme/global/js/plugins/action-btn.js"></script>
	<script src="public/asset_theme/global/js/plugins/selectable.js"></script>
	<script src="public/asset_theme/global/js/components/selectable.js"></script>
	<!--script src="public/asset_theme/center/assets/js/app.js"></script-->
	<!--script src="public/asset_theme/center/assets/examples/js/apps/media.js"></script-->
	<script src="public/asset_theme/global/vendor/bootstrap-treeview/bootstrap-treeview.min.js"></script>
	<script src="public/asset_theme/global/js/components/bootstrap-treeview.js"></script>
	<script src="public/asset_theme/center/assets/examples/js/advanced/treeview.js"></script>

	<!-- form contacts.html -->
	<script src="public/asset_theme/global/vendor/aspaginator/jquery.asPaginator.min.js"></script>
	<script src="public/asset_theme/global/js/components/aspaginator.js"></script>

	<!-- form toastr.html -->
	<script src="public/asset_theme/global/vendor/toastr/toastr.js"></script>
	<script src="public/asset_theme/global/js/components/toastr.js"></script>

	<!-- form advance.html -->
	<script src="public/asset_theme/global/js/select2/select2.min.js"></script>
	<!--script src="public/asset_theme/center/assets/examples/js/apps/forum.js"></script-->
	<script src="public/asset_theme/global/vendor/bootstrap-tokenfield/bootstrap-tokenfield.min.js"></script>
	<script src="public/asset_theme/global/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
	<script src="public/asset_theme/global/vendor/bootstrap-select/bootstrap-select.js"></script>
	<!--script src="public/asset_theme/global/vendor/card/jquery.card.js"></script-->
	<script src="public/asset_theme/global/vendor/jquery-labelauty/jquery-labelauty.js"></script>
	<script src="public/asset_theme/global/vendor/multi-select/jquery.multi-select.js"></script>
	<script>
		function isnull(a, b) {
			return a == null ? b : a;
		}
	</script>

</body>
</html>
