export const formatPrice = (num) => {
    const cur = "£";
    const sum = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  
    return `${cur} ${sum}`;
  };