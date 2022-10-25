// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Creating a function
function bbuildTable(data) {
//Clearing the existing data
    tbody.html("");
//Looping through the data
    data.forEach((dataRow) => {
//Appending the rows to the HTML doc
        let row = tbody.append("tr");
//Creating a new function that will append the data to each row
    Object.values(dataRow).forEach((val) => {
//Appending the values to each cell
        let cell = row.append("td");
//Extracting the data from each cell in the object
        cell.text(val);
                
    })
    });

}