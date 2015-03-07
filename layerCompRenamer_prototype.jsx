{
    // 2014, use it at your own risk;

    #target photoshop

    if (app.documents.length > 0) {

        var myDocument = app.activeDocument;
        var selectedComps = new Array();

        for (var m = 0; m < myDocument.layerComps.length; m++) {
            if (myDocument.layerComps[m].selected){
                myDocument.layerComps[m].name = "susanIsAWESOME_"+m.toString();
            }
        }
    }
}