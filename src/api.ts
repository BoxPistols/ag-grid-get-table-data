// data.jsonはhttps://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json
import data from "./data.json"
// fetchDataSetはdata.jsonを返す
export async function fetchDataSet(url: string): Promise<any> {
  if (url === "localData") {
    return data
  } else {
    // ここでfetchを使ってデータを取得する
    const response = await fetch(url)
    // ここでjsonに変換して返す
    return await response.json()
  }
}

// 型定義
export type Athlete = {
  id: number
  athlete: string
  age?: number
  country?: string
  year?: number
  date?: string
  sport?: string
  gold?: number
  silver?: number
  bronze?: number
  total?: number
}

type DataSetItem = {
  id: number
  athlete: string
  age?: number
  country?: string
  year?: number
  date?: string
  sport?: string
  gold?: number
  silver?: number
  bronze?: number
  total?: number
}


function* getId(reset: boolean = false) {
  let id = 0
  while (true) {
    if (reset) id = 0
    yield ++id
  }
}
const idGenerator = getId()

function attachId(data: Omit<Athlete, "id">[]): Athlete[] {
  return data.map((a) => ({ ...a, id: idGenerator.next().value as number }))
}
export async function fetchData(): Promise<Athlete[]> {
  let data: any
  data = await Promise.resolve(data)
  return attachId(data)
}

export function fetchLargeData() {
  const dataUrl =
    "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json"
  return fetch(dataUrl)
    .then((r) => r.json())
    .then((data) => attachId(data))
}

// データを取得する関数
/*
import data1 from "./datas/data-1.json"
import data2 from "./datas/data-2.json"
import data3 from "./datas/data-3.json"
import data4 from "./datas/data-4.json"
import data5 from "./datas/data-5.json"

const dataSets: DataSetItem[][] = [data1, data2, data3, data4, data5]
*/
