# publicPurchase
公共調達に関連するオープンデータを集めつつ、利用しやすい形に加工しているもの

## データ元
国土交通省
[データ元のURL](http://www.mlit.go.jp/report/press/totikensangyo14_hh_000419.html)

## data/01_workersprice_yyyymm.csv
yyyy年mm月から適用する公共工事設計労務単価。
データ元がpdfで利用しにくいため、利用しやすいようcsv化したものです。

## data_regularized/*
上記の2x2のcsvを第一正規化したものです。

## workers_price_in_public_construction_ttl.txt
Turtle形式のRDF
Linkdata.orgにアップロードしています。
[アップロード先](http://linkdata.org/work/rdf1s3253i)