export const getDate = (date) => {
  let newDate = new Date(date);
  let myDay = newDate.getDate();
  let myMonth = newDate.getUTCMonth();
  myMonth++;
  let year = newDate.getUTCFullYear();
  let fullDate = myDay + "." + myMonth + "." + year;
  return fullDate;
};
