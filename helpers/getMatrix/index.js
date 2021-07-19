export default function generateMatrix(activeDate, weekDays, nDays) {
    let matrix = [];
    matrix[0] = weekDays;
  
    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();
  
    const firstDay = new Date(year, month, 1).getDay();
    let maxDays = nDays[month];
    if (month == 1) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
  
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++;
        }
      }
    }
  
    return matrix;
  }