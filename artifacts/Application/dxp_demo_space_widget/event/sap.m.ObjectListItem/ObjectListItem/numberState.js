if (!ships) return "Error";
if (ships.length < 1) return "Error";
if (ships.length < 4) return "Warning";
if (ships.length >= 4) return "Success";
return "None";