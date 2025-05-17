const generateCNPJ = (): string => {
  let cnpjWithoutDigits = "";
  for (let i = 0; i < 8; i++) {
    cnpjWithoutDigits += Math.floor(Math.random() * 10);
  }
  cnpjWithoutDigits += "0001";

  let sum = 0;
  const firstDigitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpjWithoutDigits[i]) * firstDigitWeights[i];
  }

  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;

  sum = 0;
  const cnpjWithFirstDigit = cnpjWithoutDigits + digit1;
  const secondDigitWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpjWithFirstDigit[i]) * secondDigitWeights[i];
  }
  remainder = sum % 11;

  const digit2 = remainder < 2 ? 0 : 11 - remainder;

  const completeCNPJ = cnpjWithoutDigits + digit1 + digit2;

  return `${completeCNPJ.substring(0, 2)}.${completeCNPJ.substring(
    2,
    5
  )}.${completeCNPJ.substring(5, 8)}/${completeCNPJ.substring(
    8,
    12
  )}-${completeCNPJ.substring(12, 14)}`;
};

export { generateCNPJ };
