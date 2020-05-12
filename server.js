// These are our required libraries to make the server work.

import express from "express";
import fetch from "node-fetch";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

function processDataForFrontEnd(req, res) {
 const baseURL = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$limit=100000&$$app_token=zXkKoYL09JMeHS0iVhnXpcs78"; // Enter the URL for the data you would like to retrieve here

 fetch(baseURL)
  .then((data) => data.json()) 
  .then((data) => {
    const clearEmptyData = data.filter((f)=>f.incident_case_id);
    const refined = clearEmptyData.map((m)=>({
    //elements I want for the chart
    sector: m.pgpd_sector,
    date: m.date,
    inc_type:m.clearance_code_inc_type,
    area: m.pgpd_reporting_area,
    address: m.street_address
  }));
  return refined;
  })
  .then((data)=>{
  const sectorB2020 = [];
  //foreach to reformat into array 
  data.forEach(element => {
    if(element.sector == 'B' & element.date.substring(0,4)=="2020"){
      sectorB2020.push(element);
    };
  });
  res.send({data:sectorB2020});
  })
}


app.route("/api")
  .get((req,res)=>{
    processDataForFrontEnd(req, res);
  });
app.route("/apiCrimes")
  .put((req,res)=>{
    processDataForFrontEnd(req, res);
  });
app.route("/apiType")
  .post((req,res)=>{
    processDataForFrontEnd(req, res);
  });
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
