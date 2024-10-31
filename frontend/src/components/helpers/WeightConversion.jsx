const WeightConversion = (decigrams) => {
  const kilograms = decigrams / 10;
  const pounds = kilograms * 2.20462;

  const roundedPounds = Math.round(pounds * 10) / 10;

  return `${roundedPounds} lbs`;
};

export default WeightConversion;
