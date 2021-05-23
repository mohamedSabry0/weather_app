const tempModule = (temp) => {
  const tempCalc = () => {
    let fahrenheit = ((temp * 9) / 5) + 32;
    let celsius = temp;
    fahrenheit = Math.round((fahrenheit + Number.EPSILON) * 100) / 100;
    celsius = Math.round((celsius + Number.EPSILON) * 100) / 100;
    return {
      fahrenheit,
      celsius,
    };
  };
  return {
    tempCalc,
  };
};

export default tempModule;