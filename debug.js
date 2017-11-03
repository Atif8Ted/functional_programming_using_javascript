const DEBUG_MODE_ENABLED = true;

var debug;

if (DEBUG_MODE_ENABLED) {
    debug = printdebugmessage;
} else {
    debug = donothing;
}

debug("Some debug message");

function printdebugmessage(message) {
    console.log("DEBUG:" + message);
}

function donothing() {

}