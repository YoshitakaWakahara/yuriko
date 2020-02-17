# yuriko
# 1.概要
- slackで使用することを想定したBot

# 2.機能要件
- @yuriko + msgによってメンションすることでレスポンスを返す
- msgの内容によって以下の通りレスポンスを分ける

| msg | 概要 |
----|---- 
| hi | 挨拶を返答(from greeting.csv) |
| weather | 今日の天気を返答(from OpenWeatherMap) |
| chatter | 会話を返答(from chatter.csv) |


# 3.モジュール設計

| ファイルパス | 役割 |
----|---- 
| index.js | slackから取得したmsgを正規表現で丸めてrouter.jsに渡す |
| lib/router.js | msgによって、リクエスト処理を行うハンドラへ振り分ける |
| lib/greeting-handler.js | hiのリクエストを処理する |
| lib/weather-handler.js | weatherのリクエストを処理する |
| lib/handler-utils.js | その他のリクエストを処理する e.g. 使い方、定義されていないmsg |
| data/response.csv | 返答パターンを保管 |
