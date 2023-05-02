import React, { useRef, useEffect, useState } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { GridReadyEvent, GridApi, ColumnApi, ColDef } from "ag-grid-community"
import { fetchDataSet } from "./api"

/**
 * 型定義
 * @typedef {Object} GridProps
 * @property {any[] | null | string} selectedItem - 選択されたアイテム
 * @property {(keys: string[]) => void} onKeysUpdate - カラム名の更新
 * */

type GridProps = {
  selectedItem: any[] | null | string
  onKeysUpdate: (keys: string[]) => void
}

/**
 * 型定義
 * @typedef {Object} AgGridApi
 * @property {GridApi | undefined} grid - GridApi
 * @property {ColumnApi | undefined} column - ColumnApi
 */
type AgGridApi = {
  grid?: GridApi
  column?: ColumnApi
}

// Gridコンポーネント (AgGridReact) を定義
function Grid({ selectedItem, onKeysUpdate }: GridProps) {
  // Tableのデータ
  const [rowData, setRowData] = useState<any[] | null>(null)
  // Tableの動的なカラム (ColDef) を定義
  const [dynamicColumnDefs, setDynamicColumnDefs] = useState<ColDef[]>([])
  // カラム名から動的なカラム (ColDef) を生成する関数
  const createDynamicColumnDefs = (keys: string[]): ColDef[] => {
    return keys.map((key) => ({
      field: key,
      // ヘッダー名をカラム名から生成する (先頭文字を大文字にする)
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
    }))
  }

  useEffect(() => {
    // データが選択されていない場合は何もしない
    if (selectedItem) {
      // ローカルデータを取得する場合
      if (Array.isArray(selectedItem)) {
        setRowData(selectedItem)
        const keys = Object.keys(selectedItem[0] || {})
        onKeysUpdate(keys)
        const newColumnDefs = createDynamicColumnDefs(keys)
        setDynamicColumnDefs(newColumnDefs)
      } else {
        // APIからデータを取得する場合
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

  // GridApiとColumnApiを格納するRef
  const apiRef = useRef<AgGridApi>({
    grid: undefined,
    column: undefined,
  })
  // GridApiとColumnApiを格納するRefを更新する関数
  const onGridReady = (params: GridReadyEvent) => {
    apiRef.current.grid = params.api
    apiRef.current.column = params.columnApi
  }

  return (
    <div style={{ height: "80vh", minWidth: "calc(100vw - (180px + 80px))" }}>
      <div
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          // rowSelection は、行を選択できるようにする
          rowSelection="multiple"
          // suppressRowClickSelection は、行をクリックしたときに選択状態にしない
          suppressRowClickSelection
          // カラムの定義 (動的に変更する)
          columnDefs={dynamicColumnDefs}
          // onGridReady は、GridApiとColumnApiを取得するための関数
          onGridReady={onGridReady}
          // rowData は、表示するデータ
          rowData={rowData}
          // statusBar は、ステータスバーを表示する
          statusBar={{
            // statusPanels は、ステータスバーに表示するパネルを定義する
            statusPanels: [
              {
                // agTotalRowCountComponent は、行数を表示するパネル
                statusPanel: "agTotalRowCountComponent",
                // align は、パネルの表示位置を定義する
                align: "left",
              },
              {
                // agAggregationComponent は、集計値を表示するパネル
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
