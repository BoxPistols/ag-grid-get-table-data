import csv
import random
from faker import Faker

fake = Faker("ja_JP")
num_records = 500
num_columns = 80

headers = [
    "ID",
    "名前",
    "年齢",
    "性別",
    "住所",
    "電話番号",
    "メールアドレス",
    "会社名",
    "職業",
    "年収",
    "購入回数",
    "直近購入日",
    "顧客満足度",
    "ブランド評価",
]

# マーケティング関連のカラムを追加
marketing_terms = [
    "CTR",
    "CVR",
    "ROAS",
    "ROI",
    "CPA",
    "CPC",
    "LTV",
    "CAC",
    "AARRR",
    "MAU",
    "ARPU",
    "クリック数",
    "インプレッション",
    "広告費",
    "成約件数",
    "成約率",
    "コンバージョン率",
    "プロダクトビュー",
    "購入者数",
    "購入数",
    "総売上",
    "売上構成比",
    "売上目標",
    "予算",
    "利益率",
]


headers.extend(marketing_terms)
headers.extend([f"マーケティング変数{i}" for i in range(len(marketing_terms) + 1, num_columns - len(headers) + 1)])

# 子要素のデータを生成する関数
def generate_child_items():
    num_children = random.randint(1, 10)
    children = []
    for _ in range(num_children):
        child = {
            "name": fake.word(),
            "value": random.random(),
        }
        children.append(child)
    return children

with open("marketing_random_data_ja-2.csv", mode="w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(headers)

    for i in range(num_records):
        row = [ i + 1 ]
        row.append(fake.name())
        row.append(random.randint(18, 80))
        row.append(random.choice(["男性", "女性"]))
        row.append(fake.address())
        row.append(fake.phone_number())
        row.append(fake.email())
        row.append(fake.company())
        row.append(random.choice(["会社員", "公務員", "自営業", "学生", "その他"]))
        row.append(random.randint(100, 10000))
        row.append(random.randint(1, 100))
        row.append(fake.date())
        row.append(random.randint(1, 5))


        # マーケティング関連のデータを追加
        for _ in range(len(marketing_terms)):
            row.append(random.random())

        for _ in range(num_columns - len(headers)):
            row.append(random.random())

        # 子要素のデータを追加
        child_items = generate_child_items()
        row.append(child_items)

        writer.writerow(row)

print("マーケティング解析向けの日本語ランダムデータ2が生成されました。")
