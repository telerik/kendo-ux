/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'widgets\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-actionsheet': '&#xe800;',
		'i-application': '&#xe801;',
		'i-areacharts': '&#xe802;',
		'i-autocomplete': '&#xe803;',
		'i-barcharts': '&#xe804;',
		'i-barcode': '&#xe805;',
		'i-boxplotcharts': '&#xe806;',
		'i-bubblecharts': '&#xe807;',
		'i-bulletcharts': '&#xe808;',
		'i-button': '&#xe809;',
		'i-buttongroup': '&#xe80a;',
		'i-calendar': '&#xe80b;',
		'i-colorpicker': '&#xe80c;',
		'i-datasource': '&#xe80d;',
		'i-datepicker': '&#xe80e;',
		'i-diagram': '&#xe80f;',
		'i-donutcharts': '&#xe810;',
		'i-draganddrop': '&#xe811;',
		'i-drawer': '&#xe812;',
		'i-dropdownlist': '&#xe813;',
		'i-editor': '&#xe814;',
		'i-effects': '&#xe815;',
		'i-funnelcharts': '&#xe816;',
		'i-globalization': '&#xe817;',
		'i-grid': '&#xe818;',
		'i-layout': '&#xe819;',
		'i-lineargauge': '&#xe81a;',
		'i-linecharts': '&#xe81b;',
		'i-listview': '&#xe81c;',
		'i-map': '&#xe81d;',
		'i-maskedtextbox': '&#xe81e;',
		'i-menu': '&#xe81f;',
		'i-modalview': '&#xe820;',
		'i-multiselect': '&#xe821;',
		'i-mvvm': '&#xe822;',
		'i-navbar': '&#xe823;',
		'i-notification': '&#xe824;',
		'i-numerictextbox': '&#xe825;',
		'i-panelbar': '&#xe826;',
		'i-piecharts': '&#xe827;',
		'i-polarcharts': '&#xe828;',
		'i-popover': '&#xe829;',
		'i-progressbar': '&#xe82a;',
		'i-qrcode': '&#xe82b;',
		'i-radarcharts': '&#xe82c;',
		'i-radialgauge': '&#xe82d;',
		'i-scattercharts': '&#xe82e;',
		'i-scheduler': '&#xe82f;',
		'i-scroller': '&#xe830;',
		'i-scrollview': '&#xe831;',
		'i-singlepageapp': '&#xe832;',
		'i-slider': '&#xe833;',
		'i-sortable': '&#xe834;',
		'i-sparklines': '&#xe835;',
		'i-splitter': '&#xe836;',
		'i-splitview': '&#xe837;',
		'i-stockchart': '&#xe838;',
		'i-switch': '&#xe839;',
		'i-tabstrip': '&#xe83a;',
		'i-tabstrip-mobile': '&#xe83b;',
		'i-templates': '&#xe83c;',
		'i-timepicker': '&#xe83d;',
		'i-tooltip': '&#xe83e;',
		'i-treeview': '&#xe83f;',
		'i-upload': '&#xe840;',
		'i-validator': '&#xe841;',
		'i-window': '&#xe842;',
		'i-gantt': '&#xe843;',
		'i-pivotgrid': '&#xe844;',
		'i-treemap': '&#xe845;',
		'i-rangebarcharts': '&#xe846;',
		'i-waterfallcharts': '&#xe847;',
		'i-combobox': '&#xe848;',
		'i-responsivepanel': '&#xe849;',
		'i-collapsible': '&#xe84a;',
		'i-spreadsheet': '&#xe84b;',
		'i-wordprocessing': '&#xe84c;',
		'i-spreadprocessing': '&#xe84d;',
		'i-pdf': '&#xe84e;',
		'i-datetimepicker': '&#xe84f;',
		'i-styling': '&#xe850;',
		'i-touchevents': '&#xe851;',
		'i-toolbar': '&#xe852;',
		'i-treelist': '&#xe853;',
		'i-forms': '&#xe854;',
		'i-view': '&#xe855;',
		'i-listview-mobile': '&#xe856;',
		'i-dialog': '&#xe857;',
		'i-mediaplayer': '&#xe858;',
		'i-localization': '&#xe859;',
		'i-accessibility': '&#xe85a;',
		'i-listbox': '&#xe85b;',
		'i-dateinput': '&#xe85c;',
		'i-ziplibrary': '&#xe900;',
		'i-spreadstreamprocessing': '&#xe901;',
		'i-rangeareacharts': '&#xe902;',
		'i-dropdownbutton': '&#xe903;',
		'i-splitbutton': '&#xe904;',
		'i-textbox': '&#xe905;',
		'i-ripple': '&#xe906;',
		'i-chat': '&#xe907;',
		'i-dropdowntree': '&#xe908;',
		'i-daterangepicker': '&#xe909;',
		'i-multiviewcalendar': '&#xe90a;',
		'i-multicolumncombobox': '&#xe90b;',
		'i-arcgauge': '&#xe90c;',
		'i-pdfviewer': '&#xe90d;',
		'i-rating': '&#xe90e;',
		'i-filter': '&#xe90f;',
		'i-timeline': '&#xe910;',
		'i-chunkprogressbar': '&#xe911;',
		'i-cards': '&#xe912;',
		'i-animationcontainer': '&#xe913;',
		'i-breadcrumbs': '&#xe914;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
