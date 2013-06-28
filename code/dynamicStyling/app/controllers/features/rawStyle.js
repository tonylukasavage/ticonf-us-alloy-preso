Alloy.Globals.setupWindow($.win);

$.styleModule.html = _.template(Alloy.Globals.htmlTemplate, {
	CODE: "require('alloy/styles/rawStyle')",
	BRUSH: 'js'
});

var theStyle = JSON.stringify(require('alloy/styles/features/rawStyle'), null, '  ');
$.styleArray.html = _.template(Alloy.Globals.htmlTemplate, {
	CODE: theStyle,
	BRUSH: 'js'
});

Ti.API.info(theStyle);