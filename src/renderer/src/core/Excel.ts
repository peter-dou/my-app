import * as XLSX from "xlsx";

export default function (){
  const exportExcelTable = (json, name, titleArr, sheetName,fields) => {
    let data = [];
    if (!Array.isArray(json)) return console.warn('数据请传入数组');
    if (!Array.isArray(titleArr)) return console.warn('标题请传入数组');
    if (!Array.isArray(fields)) return console.warn('字段请传入数组');
    // @ts-ignore
    data = json.map(obj=>{
      return fields.map(field=>{
        return obj[field]
      })
    })
    // @ts-ignore
    data.splice(0, 0,  titleArr);
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    const wsrows = [{ hidden: true }];
    ws['!rows'] = wsrows;
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, name + '.xls');
  }
  const readFile =  (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (ev) => {
        // @ts-ignore
        resolve(ev.target.result);
      };
    });
  }
  return {
    exportExcelTable,
    readFile
  }
}
