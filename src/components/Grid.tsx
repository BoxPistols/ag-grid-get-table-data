import React, { useRef, useEffect, useState } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { GridReadyEvent, GridApi, ColumnApi, ColDef } from "ag-grid-community"
import { fetchDataSet } from "../api"

type GridProps = {
  selectedItem: any[] | null | string
  onKeysUpdate: (keys: string[]) => void
}

type AgGridApi = {
  grid?: GridApi
  column?: ColumnApi
}

function Grid({ selectedItem, onKeysUpdate }: GridProps) {
  const [rowData, setRowData] = useState<any[] | null>(null)
  const [dynamicColumnDefs, setDynamicColumnDefs] = useState<ColDef[]>([])

  const createDynamicColumnDefs = (keys: string[]): ColDef[] => {
    return keys.map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
    }))
  }

  useEffect(() => {
    if (selectedItem) {
      if (Array.isArray(selectedItem)) {
        setRowData(selectedItem)
        const keys = Object.keys(selectedItem[0] || {})
        onKeysUpdate(keys)
        const newColumnDefs = createDynamicColumnDefs(keys)
        setDynamicColumnDefs(newColumnDefs)
      } else {
        fetchDataSet(selectedItem).then((d) => {
          setRowData(d)
          const keys = Object.keys(d[0] || {})
          onKeysUpdate(keys)
          const newColumnDefs = createDynamicColumnDefs(keys)
          setDynamicColumnDefs(newColumnDefs)
        })
      }
    }
  }, [selectedItem, onKeysUpdate])

  const apiRef = useRef<AgGridApi>({
    grid: undefined,
    column: undefined,
  })

  const onGridReady = (params: GridReadyEvent) => {
    apiRef.current.grid = params.api
    apiRef.current.column = params.columnApi
  }

  return (
    <div
      style={{
        minHeight: "60vh",
        minWidth: "calc(100vw - (480px))",
        padding: "16px",
        border: "1px solid #eee",
      }}
    >
      <div
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          rowSelection="multiple"
          suppressRowClickSelection
          columnDefs={dynamicColumnDefs}
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
                align: "left",
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default Grid
