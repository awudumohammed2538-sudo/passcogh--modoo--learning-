/*
  PASSCOGH-MODOO curriculum synchronisation scaffold.
  Official NaCCA documents are authoritative. This script is intentionally conservative:
  it records the source reference and never invents missing curriculum topics.
  For a production importer, map each official PDF's actual headings into
  content standards, learning indicators, pedagogical exemplars and assessment.
*/
const fs=require("fs");
const path=require("path");
const source={
  secondary:"https://nacca.gov.gh/secondary-education-curriculum/",
  ccp:"https://nacca.gov.gh/common-core-programme-ccp/",
  combinations:"https://nacca.gov.gh/subject-combination-guidelines-secondary-education/"
};
const file=path.join(__dirname,"..","data","curriculum.json");
const data=JSON.parse(fs.readFileSync(file,"utf8"));
data.meta.lastSyncCheck=new Date().toISOString();
data.meta.sources=source;
fs.writeFileSync(file,JSON.stringify(data,null,2));
console.log("PASSCOGH-MODOO curriculum source metadata refreshed.");
