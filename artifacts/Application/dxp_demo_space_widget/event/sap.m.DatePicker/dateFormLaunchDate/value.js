if (!date_utc) return "1970-01-01";


const date = new Date(date_utc);
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
return `${year}-${month}-${day}`;