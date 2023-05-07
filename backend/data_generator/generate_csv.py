import csv
import random
from faker import Faker

fake = Faker("ja_JP")
num_records = 1000
num_columns = 100

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

with open("marketing_random_data_ja.csv", mode="w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(headers)

    for i in range(num_records):
        row = [
            i + 1,
            fake.name(),
            random.randint(18, 100),
            random.choice(["男性", "女性"]),
            fake.address().replace("\n", ", "),
            fake.phone_number(),
            fake.email(),
            fake.company(),
            fake.job(),
            random.randint(3000000, 10000000),
            random.randint(0, 50),
            fake.date_this_year(before_today=True, after_today=False),
            random.randint(1, 5),
            random.randint(1, 5),
        ]

        # マーケティング関連のデータを追加
        for _ in range(len(marketing_terms)):
            row.append(random.random())

        for _ in range(num_columns - len(headers)):
            row.append(random.random())

        writer.writerow(row)

print("マーケティング解析向けの日本語ランダムデータが生成されました。")
