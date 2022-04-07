export function Age(birthdate) {
  const birthdateFormatEua = new Date(birthdate);

  let year_birthday = birthdateFormatEua.getFullYear();
  let month_birthday = birthdateFormatEua.getMonth();
  let day_birthday = birthdateFormatEua.getDate();

  const today = new Date();
  const current_year = today.getFullYear();
  const current_month = today.getMonth() + 1;
  const current_day = today.getDate();
  year_birthday = +year_birthday;
  month_birthday = +month_birthday;
  day_birthday = +day_birthday;

  let years_old = current_year - year_birthday;

  if (
    current_month < month_birthday ||
    (current_month == month_birthday && current_day < day_birthday)
  ) {
    years_old--;
  }

  return years_old < 0 ? 0 : years_old;
}
