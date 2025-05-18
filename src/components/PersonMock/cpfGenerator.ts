const generateCPF = (): string => {
  let cpfWithoutDigits = '';
  for (let i = 0; i < 9; i++) {
    cpfWithoutDigits += Math.floor(Math.random() * 10);
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpfWithoutDigits[i]) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  const digit1 = remainder >= 10 ? 0 : remainder;

  sum = 0;
  const cpfWithDigit1 = cpfWithoutDigits + digit1;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpfWithDigit1[i]) * (11 - i);
  }
  remainder = 11 - (sum % 11);

  const digit2 = remainder >= 10 ? 0 : remainder;
  const completeCPF = cpfWithoutDigits + digit1 + digit2;

  return `${completeCPF.substring(0, 3)}.${completeCPF.substring(3, 6)}.${completeCPF.substring(6, 9)}-${completeCPF.substring(9, 11)}`;
}

export {generateCPF}