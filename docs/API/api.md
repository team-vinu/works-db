# API docs

## API endpoints: `/api`

-   クリエイター名(+クリエイター役割)を指定して該当する曲のリストを表示
    -   [ ] `GET /api/music/?creator=<creator-name>&role=<creator-role>`

-   曲を DB に追加/削除
    -   [x] `post_music` 追加 `POST /api/music`
        -   ```json
            {
                "name": "カレンダーガール",
                "artist": "わか・ふうり・すなお from STAR☆ANIS",
                "releaseDate": "2012-1-21",
                "note": "TVアニメ「アイカツ！」1年目前期ED主題歌"
            }
            ```
    -   [x] `delete_music` 削除 `DELETE /api/music/{musicId}`
    -   [x] `get_music` 取得 `GET /api/music/{musicId}`

-   クリエイターを追加/削除
    -   [x] 追加 `POST /api/creator/`
    -   [ ] 削除 `DELETE /api/creator/{creatorId}`
    -   [x] 取得 `GET /api/creator/{creatorId}`

-   楽曲-クリエイター関係に関係を追加/削除
    -   [ ] 追加 `POST /api/music/{musicId}/creator-relationship`
    -   [ ] 削除 `DELETE /api/music/{musicId}/creator-relationship`

-   クリエイター A の楽曲を一括追加
    -   [ ] `POST /api/creator/{creatorId}`
        -   ```json
            {
                "creatorId": "<uuid-v4>",
                "data": [
                    {
                        "musicName": "カレンダーガール",
                        "releaseDate": "2012-1-21",
                        "note": "TVアニメ「アイカツ！」1年目前期ED主題歌"
                    },
                    {
                        "musicName": "Signalize!"
                    }
                ]
            }
            ```
        -   備考: フロントエンド側で creatorName から creatorId を導出する

-   creatorNameからcreatorIdを探す
    - [ ]  `GET /api/creator/?search=<name>`

-   musicNameからmusicIdを探す
    - [ ]  `GET /api/creator/?search=<name>`

-   楽曲情報一覧
    - [ ]  `GET /api/music/{musicId}`
  
-   クリエイタ情報一覧
    - [ ]  `GET /api/creator/{creatorId}`