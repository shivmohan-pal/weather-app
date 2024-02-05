export const FtoC = (F) => Number((((F - 32) * 5) / 9).toFixed(2)); // fahrenheit to celcius;
export const KtoF = (K) => Number(((K - 273.15) * 1.8 + 32).toFixed(2)); // kelvin to fahrenheit

let options = {
  weekday: "long",
  // year: "numeric",
  month: "long",
  day: "numeric",
};


export const UNIX_to_Timestamp = (unix_timestamp) => unix_timestamp * 1000;

export const timeStampToDate = (timestamp) => {
  let date = new Date(timestamp);
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};


export const time12hFromat = (timestamp)=>{// returns the 12hr format time in hrs minutes and am / pm
  const date = new Date(timestamp);
  let hours = date.getHours() ; // gives the value in 24 hours format
  const AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  const minutes = date.getMinutes();
  return [hours,minutes,AmOrPm];
}