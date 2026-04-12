import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

export class ExcelUtil {

  private static filePath = path.resolve(__dirname, '../testData/testData.xlsx');

  // 🔹 Validate file existence
  private static validateFile(): void {
    if (!fs.existsSync(this.filePath)) {
      throw new Error(`❌ Excel file not found at: ${this.filePath}`);
    }
  }

  // 🔹 Normalize row (handle blank/null values)
  private static normalizeRow(row: any): any {
    const normalized: any = {};

    Object.keys(row).forEach((key) => {
      const value = row[key];

      normalized[key] =
        value === undefined || value === null
          ? ''                        // 👈 convert blank to empty string
          : value.toString().trim(); // 👈 trim value
    });

    return normalized;
  }

  // 🔹 Get all data from sheet
  static getSheetData(sheetName: string): any[] {
    this.validateFile();

    const workbook = XLSX.readFile(this.filePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
      throw new Error(`❌ Sheet "${sheetName}" not found in Excel`);
    }

    const data = XLSX.utils.sheet_to_json(sheet);

    if (!data || data.length === 0) {
      throw new Error(`❌ No data found in sheet: ${sheetName}`);
    }

    // ✅ Normalize all rows
    return data.map(row => this.normalizeRow(row));
  }

  // 🔹 Get only runnable data (run = Y)
  static getRunnableData(sheetName: string): any[] {
    const data = this.getSheetData(sheetName);

    const filtered = data.filter((row: any) =>
      row.run &&
      row.run.toUpperCase() === 'Y'
    );

    if (filtered.length === 0) {
      throw new Error(`❌ No runnable data found in sheet: ${sheetName}`);
    }

    return filtered;
  }

  // 🔹 Get single row by test name (with run = Y validation)
  static getDataByTestName(sheetName: string, testName: string): any {
    const data = this.getSheetData(sheetName);

    const row = data.find((row: any) =>
      row.testName === testName.trim() &&
      row.run &&
      row.run.toUpperCase() === 'Y'
    );

    if (!row) {
      throw new Error(`❌ No matching data found for test: "${testName}" in sheet: "${sheetName}"`);
    }

    return row;
  }
}