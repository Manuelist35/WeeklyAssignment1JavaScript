async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url); // by using the keyword "await" we are making sure that first the code is gonna get the answer from our fetch funtion and then keep running the rest of the code 
    const data = await response.json();

    console.log(data);
}

loadIntoTable("./WD2LabDat1.json", document.querySelector("table"));
