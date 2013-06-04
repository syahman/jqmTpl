 /****************************************************************************/
 /**                Initialize Mobile Page/Splash Screen                    **/
 /****************************************************************************/ 
var App = App || {};

(function (App, $, iScroll, window) {
  "use strict";

  $("#splashScreen").one("pageinit", function (event) {
    
      //$.mobile.page.prototype.options.domCache = false;
 
    App.Mobile(App, $, iScroll, window);
  });
}(App, $, iScroll, window));



App.Mobile = (function (App, $, iScroll, window) {
  "use strict";


  App.Pages = App.Pages || {};
  
  // You can put your apps variable here 
  // to be used in your function 


 /****************************************************************************/
 /**                Function/Routine To Bind Page Functions                 **/
 /****************************************************************************/ 
  App.Pages.Kernel = function (event) {
    var that = this,
      eventType = event.type,
      pageName = $(this).attr("data-app-jspage");
      console.log("Kernel: "+pageName+", "+eventType);
    if (App && App.Pages && pageName && App.Pages[pageName] && App.Pages[pageName][eventType]) {
      App.Pages[pageName][eventType].call(that);
    }
  };

 /****************************************************************************/
 /**                Function/Routine Get jQuery Page Event                  **/
 /****************************************************************************/ 
  App.Pages.Events = (function () {
    $("div[data-app-jspage]").on(
      'pagebeforecreate pagecreate pagebeforeload pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide pageinit',
      App.Pages.Kernel
    );
  }());


 /****************************************************************************/
 /**                Function/Routine For Screen Resolution                  **/
 /****************************************************************************/ 
  App.Dimensions = (function () {
    var width, height, headerHeight, footerHeight, contentHeight;
    return {
      get:function () {
        width = $(window).width();
        height = $(window).height();
        headerHeight = $("header", $.mobile.activePage).height() || 0;
        footerHeight = $("footer", $.mobile.activePage).height() || 0;
        contentHeight = height - headerHeight - footerHeight;

        return {
          width:width,
          height:contentHeight
        };
      }
    };
  }());



 /****************************************************************************/
 /**                Function/Routine For #splashScreen                      **/
 /****************************************************************************/ 
  App.Pages.splashScreen = (function () {
    var timeHandle = null,
      $splash = $("#splashContent"),
      
      changePg = function () {
  
    
       $.mobile.changePage("#loginPage");
		
      };
    return {
      pageshow:function () {
        // set the CSS height dynamically
        // height will give us a taller hit target region
        var dim = App.Dimensions.get();
        $splash.css('height', dim.height);
        // if the user taps, clicks, or swipes go to the next page
        $splash.on("tap click swiperight swipeleft swipe", changePg);
        // wait 3 seconds
        timeHandle = setTimeout(function () {
          changePg();
          timeHandle = null;
        }, 3000);
      },
      pagehide:function () {
        // if the timer hasn't been cleared already, clear it
        if (timeHandle) {
          clearTimeout(timeHandle);
          timeHandle = null;
        }
      }
    };
  }());

  
 /****************************************************************************/
 /**                Function/Routine For #loginPage                         **/
 /****************************************************************************/ 
  
 App.Pages.loginPage = (function () {
  
   // add function/routine for loginPage  
   
    $('#cmdLogMasuk').on("tap click",function(){
     $.mobile.changePage("#page1"); 
    });
 
  
   
	  
    return {
      pageshow:function () {
      
      },
      pagehide:function () {
      
	  }
    };
  }());
  
  
 /****************************************************************************/
 /**                Function/Routine For #page1                             **/
 /****************************************************************************/
  
  App.Pages.page1 = (function () {
 	 
 // add function for page1

    return {
      pageshow:function () {
       
      },
      pagehide:function () {
  
	  }
    };
  }());

 /****************************************************************************/
 /**                Function/Routine For #page2                             **/
 /****************************************************************************/


  App.Pages.page2 = (function () {
 	 
 // add function for page2

    return {
      pageshow:function () {
       
      },
      pagehide:function () {
  
	  }
    };
  }());

 /****************************************************************************/
 /**                Function/Routine For #page3                             **/
 /****************************************************************************/
  App.Pages.page3 = (function () {
 	 
 // add function for page3

    return {
      pageshow:function () {
       
      },
      pagehide:function () {
  
	  }
    };
  }());

 

}); // your application scripts end here .. 
