const tempModule = (temp) => {
  
  const tempCalc = () => {
    let fahrenheit = (temp * 9/5) + 32; 
    let celsius = temp;
    [fahrenheit, celsius] = [fahrenheit, celsius].map((temp)=>{
      return Math.round((temp + Number.EPSILON) * 100) / 100;
    })
    return {
      fahrenheit,
      celsius
    }
  }
  return {
    tempCalc
  }
};

export default tempModule;