$(document).ready(function() {

    function fullpage_init(){
        $('#wrap').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['MAIN', 'STEP 1'],
            showActiveTooltip: true                 
        });

    }

    fullpage_init();


});