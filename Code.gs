function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .setTitle('WebApp - More Tables')
  .addMetaTag('viewport', 'width=device-width, inital-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
 
 
//PROCESS FORM
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext)
  {
      result = search(formObject.searchtext);
  }
  return result;
}
 
//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = 'sheets-id'; 
  var dataRange        = 'sheetName!range';                                    
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRange).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.toString().toLowerCase().indexOf(searchtext.toString().toLowerCase())) {
      ar.push(f);
    }
  });
  return ar;
}
