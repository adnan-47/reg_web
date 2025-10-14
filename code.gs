function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById("enter your cchredsheet url here"); 
    var sheet = ss.getSheetByName("Sheet1"); // or your sheet name

    // Get submitted values
    var name = e.parameter.name || "";
    var phone = e.parameter.phone || "";
    var wa = e.parameter["wa-number"] || "";
    var classVal = e.parameter.class || "";
    var institute = e.parameter.institute || "";
    var unit = e.parameter.unit || "";
    var gender = e.parameter.gender || ""; // <-- define gender properly

    // Add a row
    sheet.appendRow([new Date(), name, phone, wa, classVal, institute, unit, gender]);

    // Respond back
    return ContentService.createTextOutput(
      JSON.stringify({status: "success"})
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({status: "error", message: err.message})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
