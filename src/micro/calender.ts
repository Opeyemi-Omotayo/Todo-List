import { format, isToday, isYesterday, subDays } from "date-fns";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date) {
  if (isToday(date)) {
    return "Today";
  } else if (isYesterday(date)) {
    return "Yesterday";
  } else if (date <= new Date() && isWithin7Days(date)) {
    return format(date, "EEEE");
  } else {
    return format(date, "dd MMM yyyy");
  }
}

function isWithin7Days(date: Date) {
  const sevenDaysAgo = subDays(new Date(), 7);
  return date >= sevenDaysAgo;
}

export function convertToAmPm(time24hr?: string) {
  if (!time24hr) return "";
  const [hours, minutes] = time24hr.split(":").map(Number);
  const amPm = hours < 12 ? "am" : "pm";
  let hours12hr = hours % 12;
  hours12hr = hours12hr === 0 ? 12 : hours12hr;
  const time12hr = `${String(hours12hr).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${amPm}`;

  return time12hr;
}