import csv
import json

csv_file_path = 'marketing_random_data_ja.csv'
json_file_path = 'marketing_random_data_ja.json'

# CSVファイルを読み込み、各行を辞書に変換
data = []
with open(csv_file_path, encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

# JSONファイルにデータを書き込み
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=2)

print("CSVファイルがJSONファイルに変換されました。")
