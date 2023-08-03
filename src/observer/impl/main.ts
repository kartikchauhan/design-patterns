import { Chart } from "./Chart";
import { DataSource } from "./Datasource";
import { Spreadsheet } from "./Spreadsheet";

class Main {
    constructor() {
        const dataSource: DataSource = new DataSource();

        const spreadSheet1: Spreadsheet = new Spreadsheet(1);
        const spreadSheet2: Spreadsheet = new Spreadsheet(2);
        const spreadSheet3: Spreadsheet = new Spreadsheet(3);

        const chart1: Chart = new Chart(4);
        const chart2 : Chart = new Chart(5);
        
        dataSource.addObserver(spreadSheet1);
        dataSource.addObserver(spreadSheet2);
        dataSource.addObserver(spreadSheet3);

        dataSource.addObserver(chart1);
        dataSource.addObserver(chart2);

        dataSource.value = 1;
    }   
}

const main = new Main();