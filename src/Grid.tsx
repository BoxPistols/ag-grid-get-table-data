import React, { useRef, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  GridReadyEvent,
  GridApi,
  ColumnApi,
  ColDef,
  IStatusPanelParams,
} from "ag-grid-community";
import { fetchData, Athlete } from "./api";
// import { fetchData, fetchLargeData, Athlete } from "./api";

const columnDefs: ColDef[] = [
  {
    headerName: "ID",
    field: "id",
    width: 70,
    enableValue: true, // <- Add this
  },
  {
    headerName: "Athlete",
    field: "athlete",
    width: 150,
    editable: true,
  },
  {
    headerName: "Age",
    field: "age",
    width: 90,
    minWidth: 50,
    maxWidth: 100,
    editable: true,
  },
  {
    headerName: "Country",
    field: "country",
    width: 120,
  },
  {
    headerName: "Year",
    field: "year",
    width: 90,
  },
  {
    headerName: "Date",
    field: "date",
    width: 110,
  },
  {
    headerName: "Sport",
    field: "sport",
    width: 110,
  },
  {
    headerName: "Gold",
    field: "gold",
    width: 100,
  },
  {
    headerName: "Silver",
    field: "silver",
    width: 100,
  },
  {
    headerName: "Bronze",
    field: "bronze",
    width: 100,
  },
  {
    headerName: "Total",
    field: "total",
    width: 100,
  },
];

type AgGridApi = {
  grid?: GridApi;
  column?: ColumnApi;
};

function Grid() {
  const [rowData, setRowData] = useState<Athlete[]>([]);
  const apiRef = useRef<AgGridApi>({
    grid: undefined,
    column: undefined,
  });
  const onGridReady = (params: GridReadyEvent) => {
    apiRef.current.grid = params.api;
    apiRef.current.column = params.columnApi;
  };

  useEffect(() => {
    fetchData().then((d) => setRowData(d));
    // fetchLargeData().then((d) => setRowData(d));
  }, []);

  return (
    <div style={{ height: "80vh", minWidth: "800px" }}>
      <div
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          rowSelection="multiple"
          suppressRowClickSelection
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          rowData={rowData}
          statusBar={{
            statusPanels: [
              {
                statusPanel: "agTotalRowCountComponent",
                align: "left",
              },
              {
                statusPanel: "agAggregationComponent",
                align: "right",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Grid;
