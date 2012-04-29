    // Call onDeviceReady when PhoneGap is loaded.
    //
    // At this point, the document has loaded but phonegap.js has not.
    // When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    // 
    function lanzaLog(l){
	    console.log(l);
    }

    function onLoad() {
        lanzaLog("USGS: onLoad APP USGS, is ok -------------------------");
        document.addEventListener("deviceready", lanzaAPP, false);
    }
    // Beep three times
    //
    function playBeep() {
        navigator.notification.beep(2);
    }    

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
    	lanzaLog("USGS: Dispositivo Phone Gap ok ----------  ");
    }
    function lanzaAPP() {
    	lanzaLog("USGS: Dispositivo listo  ---------------------- ok ---------- Phone Gap ");
        //usgs.launch();
    }

    // Back key event handler
    //
    function onBackKey() {
        lanzaLog("USGS:  onBackKey -----------------------------------------");
        navigator.notification.beep(1);
    }

    function anulaVuelta() {
    	lanzaLog("USDS ========= anulaVuelta ---------------------------------"); 			
        document.addEventListener("backbutton", onBackKey, false);
    }
    function activaVuelta() {
    	lanzaLog("USDS =========  activaVuelta ---------------------------------"); 			
        document.removeEventListener("backbutton", onBackKey, false);
    }
