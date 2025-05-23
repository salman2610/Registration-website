function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('IRW Member Registration')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getMemberData(idCode) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ALL');
    const data = sheet.getDataRange().getValues();
    const headers = data[1];
    
    const idCodeIndex = headers.indexOf('ID CODE');
    if (idCodeIndex === -1) return {error: "ID CODE column not found"};
    
    for (let i = 2; i < data.length; i++) {
      if (data[i][idCodeIndex] == idCode) {
        return {
          idCode: data[i][idCodeIndex],
          name: data[i][headers.indexOf('NAME')],
          gender: data[i][headers.indexOf('M/F')],
          mobile: data[i][headers.indexOf('MOBILE')],
          district: data[i][headers.indexOf('District')],
          group: data[i][headers.indexOf('Group')],
          rowNumber: i + 1
        };
      }
    }
    return {error: "Member not found"};
  } catch (e) {
    return {error: e.toString()};
  }
}

function markAttendance(rowNumber) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ALL');
    const headers = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];
    const attendanceIndex = headers.indexOf('Attendence') + 1;
    
    if (attendanceIndex === 0) return {success: false, error: "Attendance column not found"};
    
    sheet.getRange(rowNumber, attendanceIndex).setValue('Yes');
    SpreadsheetApp.flush();
    return {success: true};
  } catch (e) {
    return {success: false, error: e.toString()};
  }
}

function getAttendanceStats() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ALL');
    const data = sheet.getDataRange().getValues();
    const headers = data[1];
    
    const attendanceIndex = headers.indexOf('Attendence');
    const genderIndex = headers.indexOf('M/F');
    
    if (attendanceIndex === -1 || genderIndex === -1) {
      return {error: "Required columns not found"};
    }
    
    let total = 0;
    let male = 0;
    let female = 0;
    
    for (let i = 2; i < data.length; i++) {
      if (data[i][attendanceIndex] === 'Yes') {
        total++;
        if (data[i][genderIndex] === 'M') male++;
        if (data[i][genderIndex] === 'F') female++;
      }
    }
    
    return {
      total: total,
      male: male,
      female: female
    };
  } catch (e) {
    return {error: e.toString()};
  }
}