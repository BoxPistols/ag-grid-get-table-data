import sys
import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # CSVファイルを読み込み、各行を辞書に変換
    data = []
    with open(csv_file_path, encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    # JSONファイルにデータを書き込み
    with open(json_file_path, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)

    print(f"CSVファイル {csv_file_path} が JSONファイル {json_file_path} に変換されました。")

if __name__ == "__main__":
    if len(sys.argv) == 3:
        input_csv_file = sys.argv[1]
        output_json_file = sys.argv[2]
        csv_to_json(input_csv_file, output_json_file)
    else:
        print("使用方法: python csv_to_json.py [入力CSVファイル] [出力JSONファイル]")
