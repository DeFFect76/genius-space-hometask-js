// Знайти середній бал.
// Знайти максимальний бал.
// Знайти мінімальний бал.
// Порахувати кількість студентів, які склали (>= 60).
// Порахувати кількість студентів, які не склали (< 60).
const grades = [95, 67, 81, 45, 100];
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
const maxGrade = Math.max(...grades);
const minGrade = Math.min(...grades);
const passedCount = grades.filter(grade => grade >= 60).length;
const failedCount = grades.filter(grade => grade < 60).length;
