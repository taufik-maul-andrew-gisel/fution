const link = "https://stats.oecd.org/sdmx-json/data/DP_LIVE/.CPIFORECAST.TOT.AGRWTH.Q/OECD?contentType=csv&detail=code&separator=comma&csv-lang=en&startPeriod=2019-Q4&endPeriod=2025-Q4"
async function getRealTimeInflation() {
    const res = await fetch(link);
    const csvData = await res.text();

    const jsonData = csvToJson(csvData);
    const usaData = jsonData.filter(d => d['"LOCATION"'] === '"USA"');
    return usaData.map(d => ({ 
        time: d['"TIME"'].substring(1, 8), 
        interestRate: Number(d['"Value"']) 
    }))
    
}

function csvToJson(csv: string) {
    let lines = csv.split("\n");
    let result = [];
    let headers = lines[0].split(",");

    for(let i = 1; i < lines.length; i++) {
        let obj: any = {};
        let currentline = lines[i].split(",");

        for(let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    return result;
}

export default getRealTimeInflation;