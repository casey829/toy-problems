function gradeCalculator(marks) {
    if (marks > 79) {
      return 'A';
    } else if (marks >= 60) {
      return 'B';
    } else if (marks >= 50) {
      return 'C';
    } else if (marks >= 40) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  function studentGradeGenerator() {
    const mark = parseFloat(prompt('Enter the student mark (0-100):'));
  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
    const grade = gradeCalculator(mark);
    return `The student's grade is: ${grade}`;
  }
  
  
  const result = studentGradeGenerator();
  console.log(result);