/*function netSalaryCalculation(basicSalary, benefits) {
  
    const taxRate = 0.2
    const nhifRate = 0.1
    const nssfRate = 0.2
  
    
    const grossSalary = basicSalary + benefits;
  
    
    const tax = (grossSalary * taxRate);
    const nhif = (grossSalary * nhifRate);
    const nssf = (grossSalary * nssfRate);
  
    
    const netSalary = grossSalary - (tax + nhif + nssf);
  
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }
  
  
  const basicSalary = 70000; 
  const benefits = 8000; 
  const result = netSalaryCalculation(basicSalary, benefits);

  console.log("Net Salary Calculation Results:");

  console.log("Gross Salary:", result.grossSalary);

  console.log("Tax:", result.tax);

  console.log("NHIF Deductions:", result.nhif);

  console.log("NSSF Deductions:", result.nssf);


  console.log("Net Salary:", result.netSalary);
*/

// a prompt for the base salary
let basicSalary = parseFloat(prompt("Enter your Base Salary: "));

// a prompt for benefits
let benefits = parseFloat(prompt("Enter your benefits: "));

//The taxable income
const taxablePay = Math.floor(basicSalary - benefits);

//calculating  the total deductions
const totalDeductions = Math.floor(payeeRate() + nhifRates() + nssfRates());

// Check the payee rates against the taxable income entered by the taxpayer
function payeeRate() {
    if (taxablePay > 0 && taxablePay <= 24000) {
        return taxablePay * 0.1;
    } else if (taxablePay >= 24001 && taxablePay <= 32333) {
        return taxablePay * 0.25;
    } else if (taxablePay >= 32334 && taxablePay <= 500000) {
        return taxablePay * 0.3;
    } else if (taxablePay >= 500001 && taxablePay <= 800000) {
        return taxablePay * 0.325;
    } else {
        return taxablePay * 0.35;
    }
}

//Checks  nhif rates against the taxable income entered  by the taxpayer
function nhifRates() {
    if (taxablePay > 0 && taxablePay <= 5999) {
        return 150;
    }

    else if (taxablePay >= 6000 && taxablePay <= 7999) {
        return 300;
    }

    else if (taxablePay >= 8000 && taxablePay <= 11999) {
        return 400;
    }

    else if (taxablePay >= 12000 && taxablePay <= 14999) {
        return 500;
    }

    else if (taxablePay >= 15000 && taxablePay <= 19999) {
        return 500;
    }

    else if (taxablePay >= 20000 && taxablePay <= 24999) {
        return 750;
    }

    else if (taxablePay >= 25000 && taxablePay <= 29999) {
        return 850;
    }

    else if (taxablePay >= 30000 && taxablePay <= 34999) {
        return 900;
    }

    else if (taxablePay > 35000 && taxablePay <= 39999) {
        return 950;
    }

    else if (taxablePay > 40000 && taxablePay <= 44999) {
        return 1000;
    } else if (taxablePay > 45000 && taxablePay <= 49999) {
        return 1100;
    }

    else if (taxablePay > 50000 && taxablePay <= 59999) {
        return 1200;
    }

    else if (taxablePay > 60000 && taxablePay <= 69999) {
        return 1300;
    }

    else if (taxablePay > 70000 && taxablePay <= 79999) {
        return 1400;
    }

    else if (taxablePay > 80000 && taxablePay <= 89999) {
        return 1500;
    }

    else if (taxablePay > 90000 && taxablePay <= 99999) {
        return 1600;
    }

    else {
        return 1700;
    }
}

//function that checks the nssf rates against the taxable income entered by the taxpayer
function nssfRates() {
    if (taxablePay > 0 && taxablePay <= 7000) {
        return taxablePay * 0.06;
    }

    else if (taxablePay >= 7001 && taxablePay <= 36000) {
    }

    else {
        return 0;
    }
}

//netpay function
function netPay() {
    return taxablePay - totalDeductions;
}
console.log("Your Net Pay is:", netPay());
  
    