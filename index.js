const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("data.csv");

// data source
const data = require("./data.json");

const formatData = (rec) => {
  return {
    // id: rec?.id,
    // created_at: rec?.created_at,
    // first_name: rec?.first_name,
    // last_name: rec?.last_name,
    // start_date: rec?.start_date,
    // pickup_time: rec?.pickup_time,
    // end_date: rec?.end_date,
    // dropoff_time: rec?.dropoff_time,
  };
};

console.log(`Formating ${data.length} items`);
const formatedData = data.map((row) => formatData(row));

fastcsv
  .write(formatedData, { headers: true })
  .on("finish", function () {
    console.log("Write to CSV successfully!");
  })
  .pipe(ws);
