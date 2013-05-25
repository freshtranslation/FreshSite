/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
    window.console = {};
    var consoleVal = '';
    window.log = console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        if (consoleVal !== '') consoleVal += '\n';
        consoleVal += '> ' + args.join(' ');
        $('#console')
            .val(consoleVal)
            .prop({scrollTop: $('#console').prop('scrollHeight') - $('#console').height()});
    };
    
    compile();
    run();
    
    $('#coffeeCode')
        .keyup(compile)
        .blur(run);

    $('#run')
        .mousedown(function() {
            if ($('#coffeeCode').is(':focus')) return;  // the blur will trigger run anyway
            run();
        });
    
    var originalCoffee = $('#coffeeCode').val();
    $('#reset')
        .mousedown(function() {
            $('#coffeeCode').val(originalCoffee);
            compile();
        });
}

var coffee, js;
function compile()
{
    coffee = $('#coffeeCode').val();
    try {
        js = CoffeeScript.compile(coffee, {bare: true});
        if (js[0] === '\n') js = js.slice(1)
        $('#jsCode').val(js);
    } catch (e) {
        js = null;
        var errString = e.toString().slice(7);
        var colonIndex = errString.indexOf(':');
        errString = errString.slice(0, colonIndex + 1) + '\n' + errString.slice(colonIndex + 2);
        $('#jsCode').val(errString);
    }
}

function run()
{
    try {
        if (js) eval(js);
    } catch (e) {
        log(e);
    }
}

// mailchimp 6c8e33ef8867bcf0989f5dcc099ed83b-us2