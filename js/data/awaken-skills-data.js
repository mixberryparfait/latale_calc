// 覚醒スキルデータ（ノード情報・座標・背景画像）
const awakenData = {
  "classMapping": {
    "1": "ファイター",
    "2": "シールダー",
    "3": "マジシャン",
    "4": "レンジャー",
    "5": "ウォーロード",
    "6": "ブレイダー",
    "7": "テンプルナイト",
    "8": "モンク",
    "9": "ソーサラー",
    "10": "アーティスト",
    "11": "トレジャーハンター",
    "12": "ガンスリンガー",
    "13": "エンジニア",
    "14": "マイスター",
    "15": "ドラグーン",
    "16": "スラッシャー",
    "17": "ホーリーナイト",
    "18": "ゴッドハンド",
    "19": "エレメンタルマスター",
    "20": "ミンストレル",
    "21": "ルーインウォーカー",
    "22": "デュエリスト",
    "23": "マシーナリー",
    "24": "ハイランダー",
    "25": "ソードダンサー",
    "26": "ダークナイト",
    "27": "サイキッカー",
    "28": "ファントムメイジ",
    "29": "マエストロ",
    "30": "ローグマスター",
    "31": "ジャッジメント",
    "32": "スターシーカー",
    "33": "ソウルブレイカー",
    "34": "ソウルリーヴァー",
    "35": "ソウルロード",
    "36": "デストロイヤー",
    "37": "フェイタルブレイド",
    "38": "ホーリーセイバー",
    "39": "セフィロト",
    "40": "アークメイジ",
    "41": "グランシンフォニア",
    "42": "ウィンドストーカー",
    "43": "フライシュッツ",
    "44": "マニピュレーター",
    "45": "ソウルテイカー",
    "46": "カードマスター",
    "47": "ハイマスター",
    "48": "ホーリーマスター",
    "49": "アークマスター",
    "50": "バトルマスター",
    "51": "ダークマスター",
    "52": "フォースマスター",
    "53": "ベイグラント",
    "54": "ロイヤルガード",
    "55": "ストレイドッグ",
    "56": "ブラックソード",
    "57": "オラクル",
    "58": "バトルロード",
    "59": "アベンジャー",
    "60": "デミゴッド",
    "61": "マーセナリー",
    "62": "フレームロッド",
    "63": "マグマフォース",
    "64": "アグニ",
    "65": "フェンサー",
    "66": "クローザー",
    "67": "ソードマスター",
    "68": "ダークチェイサー",
    "69": "ジュエルスター",
    "70": "ランサー",
    "71": "ブラックナイト",
    "72": "ピースメーカー",
    "73": "シャドウウォーカー",
    "74": "ウィンディア　",
    "75": "レイニア",
    "76": "トラベラー",
    "77": "レイヤーブレイカー",
    "78": "ゲートキーパー",
    "79": "セイバー",
    "80": "ソウルセイバー",
    "81": "スターセイバー"
  },
  "awaken1": {
    "name": "覚醒1",
    "nodes": [
      {
        "slot": 1,
        "skill_id": 1,
        "name": "スタート",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          2,
          8,
          14
        ],
        "limits": []
      },
      {
        "slot": 2,
        "skill_id": 2,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          1,
          3
        ],
        "limits": []
      },
      {
        "slot": 3,
        "skill_id": 3,
        "name": "命中＆回避",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          },
          {
            "type": 497,
            "name": "回避率",
            "value": 3
          }
        ],
        "requires": [
          2,
          4,
          6
        ],
        "limits": []
      },
      {
        "slot": 4,
        "skill_id": 4,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          3,
          5
        ],
        "limits": []
      },
      {
        "slot": 5,
        "skill_id": 5,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          4,
          6,
          7
        ],
        "limits": []
      },
      {
        "slot": 6,
        "skill_id": 6,
        "name": "命中＆回避",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          },
          {
            "type": 497,
            "name": "回避率",
            "value": 3
          }
        ],
        "requires": [
          3,
          5,
          7
        ],
        "limits": []
      },
      {
        "slot": 7,
        "skill_id": 7,
        "name": "多彩多能",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          },
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          },
          {
            "type": 497,
            "name": "回避率",
            "value": 3
          }
        ],
        "requires": [
          5,
          6,
          23
        ],
        "limits": []
      },
      {
        "slot": 8,
        "skill_id": 8,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          1,
          9
        ],
        "limits": []
      },
      {
        "slot": 9,
        "skill_id": 9,
        "name": "防御力＆抵抗",
        "type": 0,
        "stats": [
          {
            "type": 216,
            "name": "防御",
            "value": 200
          },
          {
            "type": 70,
            "name": "抵抗",
            "value": 200
          }
        ],
        "requires": [
          8,
          10,
          12
        ],
        "limits": []
      },
      {
        "slot": 10,
        "skill_id": 10,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          9,
          11
        ],
        "limits": []
      },
      {
        "slot": 11,
        "skill_id": 11,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          10,
          12,
          13
        ],
        "limits": []
      },
      {
        "slot": 12,
        "skill_id": 12,
        "name": "防御力＆抵抗",
        "type": 0,
        "stats": [
          {
            "type": 216,
            "name": "防御",
            "value": 200
          },
          {
            "type": 70,
            "name": "抵抗",
            "value": 200
          }
        ],
        "requires": [
          9,
          11,
          13
        ],
        "limits": []
      },
      {
        "slot": 13,
        "skill_id": 13,
        "name": "鉄壁",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          },
          {
            "type": 216,
            "name": "防御",
            "value": 200
          },
          {
            "type": 70,
            "name": "抵抗",
            "value": 200
          }
        ],
        "requires": [
          11,
          12,
          49
        ],
        "limits": []
      },
      {
        "slot": 14,
        "skill_id": 14,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          1,
          15,
          16
        ],
        "limits": []
      },
      {
        "slot": 15,
        "skill_id": 15,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          14,
          16,
          17
        ],
        "limits": []
      },
      {
        "slot": 16,
        "skill_id": 16,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          14,
          15,
          18
        ],
        "limits": []
      },
      {
        "slot": 17,
        "skill_id": 17,
        "name": "一般モンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 567,
            "name": "一般追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          15,
          283
        ],
        "limits": []
      },
      {
        "slot": 18,
        "skill_id": 18,
        "name": "ボスモンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 571,
            "name": "ボス追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          16,
          283
        ],
        "limits": []
      },
      {
        "slot": 19,
        "skill_id": 19,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          283,
          20,
          52,
          86
        ],
        "limits": []
      },
      {
        "slot": 20,
        "skill_id": 20,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          19,
          79,
          21
        ],
        "limits": []
      },
      {
        "slot": 21,
        "skill_id": 21,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          20,
          76,
          22
        ],
        "limits": []
      },
      {
        "slot": 22,
        "skill_id": 22,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          23,
          21,
          65
        ],
        "limits": []
      },
      {
        "slot": 23,
        "skill_id": 23,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          7,
          22,
          24,
          57
        ],
        "limits": []
      },
      {
        "slot": 24,
        "skill_id": 24,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          23,
          53,
          25
        ],
        "limits": []
      },
      {
        "slot": 25,
        "skill_id": 25,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          24,
          27
        ],
        "limits": []
      },
      {
        "slot": 27,
        "skill_id": 27,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          25,
          165,
          28
        ],
        "limits": []
      },
      {
        "slot": 28,
        "skill_id": 28,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          27,
          166,
          29,
          56
        ],
        "limits": []
      },
      {
        "slot": 29,
        "skill_id": 29,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          59,
          28,
          170,
          30
        ],
        "limits": []
      },
      {
        "slot": 30,
        "skill_id": 30,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          29,
          174,
          179,
          31
        ],
        "limits": []
      },
      {
        "slot": 31,
        "skill_id": 31,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          32,
          30,
          115
        ],
        "limits": []
      },
      {
        "slot": 32,
        "skill_id": 32,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          33,
          68,
          69,
          31
        ],
        "limits": []
      },
      {
        "slot": 33,
        "skill_id": 33,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          34,
          32
        ],
        "limits": []
      },
      {
        "slot": 34,
        "skill_id": 34,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          74,
          33,
          35,
          125
        ],
        "limits": []
      },
      {
        "slot": 35,
        "skill_id": 35,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          77,
          34,
          134
        ],
        "limits": []
      },
      {
        "slot": 36,
        "skill_id": 36,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          82,
          135
        ],
        "limits": []
      },
      {
        "slot": 37,
        "skill_id": 37,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          89,
          38,
          145
        ],
        "limits": []
      },
      {
        "slot": 38,
        "skill_id": 38,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          92,
          37,
          39,
          146
        ],
        "limits": []
      },
      {
        "slot": 39,
        "skill_id": 39,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          38,
          40
        ],
        "limits": []
      },
      {
        "slot": 40,
        "skill_id": 40,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          98,
          99,
          39,
          41
        ],
        "limits": []
      },
      {
        "slot": 41,
        "skill_id": 41,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          40,
          42,
          164
        ],
        "limits": []
      },
      {
        "slot": 42,
        "skill_id": 42,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          43,
          193,
          198,
          41
        ],
        "limits": []
      },
      {
        "slot": 43,
        "skill_id": 43,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          105,
          44,
          189,
          42
        ],
        "limits": []
      },
      {
        "slot": 44,
        "skill_id": 44,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          45,
          184,
          43,
          114
        ],
        "limits": []
      },
      {
        "slot": 45,
        "skill_id": 45,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          47,
          183,
          44
        ],
        "limits": []
      },
      {
        "slot": 47,
        "skill_id": 47,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          48,
          45
        ],
        "limits": []
      },
      {
        "slot": 48,
        "skill_id": 48,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          49,
          47,
          111
        ],
        "limits": []
      },
      {
        "slot": 49,
        "skill_id": 49,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          13,
          48,
          50,
          103
        ],
        "limits": []
      },
      {
        "slot": 50,
        "skill_id": 50,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          49,
          95,
          51
        ],
        "limits": []
      },
      {
        "slot": 51,
        "skill_id": 51,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          52,
          50,
          94
        ],
        "limits": []
      },
      {
        "slot": 52,
        "skill_id": 52,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          19,
          51,
          90
        ],
        "limits": []
      },
      {
        "slot": 53,
        "skill_id": 53,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          24,
          54,
          55
        ],
        "limits": []
      },
      {
        "slot": 54,
        "skill_id": 54,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          53,
          55
        ],
        "limits": []
      },
      {
        "slot": 55,
        "skill_id": 55,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          53,
          54,
          56
        ],
        "limits": []
      },
      {
        "slot": 56,
        "skill_id": 56,
        "name": "覚醒石スロット(5時)",
        "type": 1,
        "stats": [],
        "requires": [
          55,
          28
        ],
        "limits": []
      },
      {
        "slot": 57,
        "skill_id": 57,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          23,
          58
        ],
        "limits": []
      },
      {
        "slot": 58,
        "skill_id": 58,
        "name": "『破壊者』",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 12
          }
        ],
        "requires": [
          57,
          59
        ],
        "limits": []
      },
      {
        "slot": 59,
        "skill_id": 59,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          58,
          29
        ],
        "limits": []
      },
      {
        "slot": 65,
        "skill_id": 65,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          22,
          71,
          66
        ],
        "limits": []
      },
      {
        "slot": 66,
        "skill_id": 66,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          65,
          67,
          72
        ],
        "limits": []
      },
      {
        "slot": 67,
        "skill_id": 67,
        "name": "貫通力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 6
          }
        ],
        "requires": [
          66,
          68
        ],
        "limits": []
      },
      {
        "slot": 68,
        "skill_id": 68,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          67,
          72,
          32
        ],
        "limits": []
      },
      {
        "slot": 69,
        "skill_id": 69,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          70,
          72,
          32
        ],
        "limits": []
      },
      {
        "slot": 70,
        "skill_id": 70,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          71,
          69
        ],
        "limits": []
      },
      {
        "slot": 71,
        "skill_id": 71,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          65,
          72,
          70
        ],
        "limits": []
      },
      {
        "slot": 72,
        "skill_id": 72,
        "name": "『クリティカル確率』",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 3
          }
        ],
        "requires": [
          66,
          71,
          68,
          69
        ],
        "limits": []
      },
      {
        "slot": 73,
        "skill_id": 73,
        "name": "幸運(%)",
        "type": 0,
        "stats": [
          {
            "type": 19,
            "name": "幸運_乗算",
            "value": 1
          }
        ],
        "requires": [
          76,
          74
        ],
        "limits": []
      },
      {
        "slot": 74,
        "skill_id": 74,
        "name": "筋力/魔法力＆幸運(%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          },
          {
            "type": 19,
            "name": "幸運_乗算",
            "value": 1
          }
        ],
        "requires": [
          73,
          75,
          34
        ],
        "limits": []
      },
      {
        "slot": 75,
        "skill_id": 75,
        "name": "筋力(%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          76,
          74
        ],
        "limits": []
      },
      {
        "slot": 76,
        "skill_id": 76,
        "name": "筋力/魔法力＆幸運",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 1000
          },
          {
            "type": 18,
            "name": "幸運",
            "value": 1000
          }
        ],
        "requires": [
          21,
          75,
          73
        ],
        "limits": []
      },
      {
        "slot": 77,
        "skill_id": 77,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          78,
          79,
          35
        ],
        "limits": []
      },
      {
        "slot": 78,
        "skill_id": 78,
        "name": "一般モンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 2
          }
        ],
        "requires": [
          79,
          77
        ],
        "limits": []
      },
      {
        "slot": 79,
        "skill_id": 79,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          20,
          77,
          78
        ],
        "limits": []
      },
      {
        "slot": 80,
        "skill_id": 80,
        "name": "『追加ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 588,
            "name": "追加ダメ_乗算",
            "value": 2
          },
          {
            "type": 440,
            "name": "CT減少",
            "value": 50
          }
        ],
        "requires": [
          87,
          81
        ],
        "limits": []
      },
      {
        "slot": 81,
        "skill_id": 81,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          80,
          82
        ],
        "limits": []
      },
      {
        "slot": 82,
        "skill_id": 82,
        "name": "追加ダメージ＆武器攻撃力",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          },
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          81,
          83,
          36
        ],
        "limits": []
      },
      {
        "slot": 83,
        "skill_id": 83,
        "name": "武器攻撃力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          84,
          82
        ],
        "limits": []
      },
      {
        "slot": 84,
        "skill_id": 84,
        "name": "『武器攻撃力』",
        "type": 0,
        "stats": [
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 2
          }
        ],
        "requires": [
          85,
          83
        ],
        "limits": []
      },
      {
        "slot": 85,
        "skill_id": 85,
        "name": "武器攻撃力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          86,
          84
        ],
        "limits": []
      },
      {
        "slot": 86,
        "skill_id": 86,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          19,
          85,
          87
        ],
        "limits": []
      },
      {
        "slot": 87,
        "skill_id": 87,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          86,
          80
        ],
        "limits": []
      },
      {
        "slot": 88,
        "skill_id": 88,
        "name": "ボスモンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 2
          }
        ],
        "requires": [
          90,
          89
        ],
        "limits": []
      },
      {
        "slot": 89,
        "skill_id": 89,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          90,
          88,
          37
        ],
        "limits": []
      },
      {
        "slot": 90,
        "skill_id": 90,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          52,
          88,
          89
        ],
        "limits": []
      },
      {
        "slot": 91,
        "skill_id": 91,
        "name": "筋力/魔法力 (%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          94,
          92
        ],
        "limits": []
      },
      {
        "slot": 92,
        "skill_id": 92,
        "name": "筋力/魔法力＆体力(%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          },
          {
            "type": 27,
            "name": "体力_乗算",
            "value": 1
          }
        ],
        "requires": [
          91,
          93,
          38
        ],
        "limits": []
      },
      {
        "slot": 93,
        "skill_id": 93,
        "name": "体力(%)",
        "type": 0,
        "stats": [
          {
            "type": 27,
            "name": "体力_乗算",
            "value": 1
          }
        ],
        "requires": [
          94,
          92
        ],
        "limits": []
      },
      {
        "slot": 94,
        "skill_id": 94,
        "name": "筋力/魔法力＆体力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 1000
          },
          {
            "type": 26,
            "name": "体力",
            "value": 1000
          }
        ],
        "requires": [
          51,
          91,
          93
        ],
        "limits": []
      },
      {
        "slot": 95,
        "skill_id": 95,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          50,
          96,
          101
        ],
        "limits": []
      },
      {
        "slot": 96,
        "skill_id": 96,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          95,
          97,
          102
        ],
        "limits": []
      },
      {
        "slot": 97,
        "skill_id": 97,
        "name": "最大ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 16
          }
        ],
        "requires": [
          96,
          98
        ],
        "limits": []
      },
      {
        "slot": 98,
        "skill_id": 98,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          97,
          102,
          40
        ],
        "limits": []
      },
      {
        "slot": 99,
        "skill_id": 99,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          100,
          102,
          40
        ],
        "limits": []
      },
      {
        "slot": 100,
        "skill_id": 100,
        "name": "最小ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          101,
          99
        ],
        "limits": []
      },
      {
        "slot": 101,
        "skill_id": 101,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          95,
          100,
          102
        ],
        "limits": []
      },
      {
        "slot": 102,
        "skill_id": 102,
        "name": "『最小/最大ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 13
          }
        ],
        "requires": [
          96,
          101,
          98,
          99
        ],
        "limits": []
      },
      {
        "slot": 103,
        "skill_id": 103,
        "name": "最大HP[強化]",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          49,
          104
        ],
        "limits": []
      },
      {
        "slot": 104,
        "skill_id": 104,
        "name": "『最大HP』",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 5
          }
        ],
        "requires": [
          103,
          105
        ],
        "limits": []
      },
      {
        "slot": 105,
        "skill_id": 105,
        "name": "最大HP[強化]",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          104,
          43
        ],
        "limits": []
      },
      {
        "slot": 111,
        "skill_id": 111,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          48,
          112,
          113
        ],
        "limits": []
      },
      {
        "slot": 112,
        "skill_id": 112,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          111,
          113
        ],
        "limits": []
      },
      {
        "slot": 113,
        "skill_id": 113,
        "name": "体力(%)",
        "type": 0,
        "stats": [
          {
            "type": 27,
            "name": "体力_乗算",
            "value": 1
          }
        ],
        "requires": [
          111,
          112,
          114
        ],
        "limits": []
      },
      {
        "slot": 114,
        "skill_id": 114,
        "name": "覚醒石スロット(7時)",
        "type": 1,
        "stats": [],
        "requires": [
          113,
          44
        ],
        "limits": []
      },
      {
        "slot": 115,
        "skill_id": 115,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          }
        ],
        "requires": [
          31,
          180,
          116
        ],
        "limits": []
      },
      {
        "slot": 116,
        "skill_id": 116,
        "name": "体力(%)",
        "type": 0,
        "stats": [
          {
            "type": 27,
            "name": "体力_乗算",
            "value": 1
          }
        ],
        "requires": [
          115,
          117
        ],
        "limits": []
      },
      {
        "slot": 117,
        "skill_id": 117,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          116,
          118,
          215
        ],
        "limits": []
      },
      {
        "slot": 118,
        "skill_id": 118,
        "name": "抵抗",
        "type": 0,
        "stats": [
          {
            "type": 70,
            "name": "抵抗",
            "value": 200
          }
        ],
        "requires": [
          124,
          117
        ],
        "limits": []
      },
      {
        "slot": 124,
        "skill_id": 124,
        "name": "覚醒石スロット(11時)",
        "type": 1,
        "stats": [],
        "requires": [
          118,
          132
        ],
        "limits": []
      },
      {
        "slot": 125,
        "skill_id": 125,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          34,
          126,
          129
        ],
        "limits": []
      },
      {
        "slot": 126,
        "skill_id": 126,
        "name": "一般モンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 2
          }
        ],
        "requires": [
          125,
          127
        ],
        "limits": []
      },
      {
        "slot": 127,
        "skill_id": 127,
        "name": "一般モンスター支配力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 4
          }
        ],
        "requires": [
          126,
          128
        ],
        "limits": []
      },
      {
        "slot": 128,
        "skill_id": 128,
        "name": "一般モンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 2
          }
        ],
        "requires": [
          127,
          129
        ],
        "limits": []
      },
      {
        "slot": 129,
        "skill_id": 129,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          125,
          128,
          130
        ],
        "limits": []
      },
      {
        "slot": 130,
        "skill_id": 130,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          129,
          131,
          133
        ],
        "limits": []
      },
      {
        "slot": 131,
        "skill_id": 131,
        "name": "一般モンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 2
          }
        ],
        "requires": [
          130,
          132
        ],
        "limits": []
      },
      {
        "slot": 132,
        "skill_id": 132,
        "name": "一般モンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 567,
            "name": "一般追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          124,
          131,
          133
        ],
        "limits": []
      },
      {
        "slot": 133,
        "skill_id": 133,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          130,
          132,
          229
        ],
        "limits": []
      },
      {
        "slot": 134,
        "skill_id": 134,
        "name": "『蔑視』",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": -3
          },
          {
            "type": 573,
            "name": "一般支配",
            "value": 25
          }
        ],
        "requires": [
          35
        ],
        "limits": []
      },
      {
        "slot": 135,
        "skill_id": 135,
        "name": "筋力/魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          36,
          136,
          140,
          141
        ],
        "limits": []
      },
      {
        "slot": 136,
        "skill_id": 136,
        "name": "筋力/魔法力＆最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 1000
          },
          {
            "type": 462,
            "name": "最小",
            "value": 8
          }
        ],
        "requires": [
          135,
          137
        ],
        "limits": []
      },
      {
        "slot": 137,
        "skill_id": 137,
        "name": "『最小ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 590,
            "name": "最小_乗算",
            "value": 3
          }
        ],
        "requires": [
          136,
          138
        ],
        "limits": []
      },
      {
        "slot": 138,
        "skill_id": 138,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 8
          }
        ],
        "requires": [
          137,
          139,
          239
        ],
        "limits": []
      },
      {
        "slot": 139,
        "skill_id": 139,
        "name": "『最大ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 591,
            "name": "最大_乗算",
            "value": 3
          }
        ],
        "requires": [
          140,
          138
        ],
        "limits": []
      },
      {
        "slot": 140,
        "skill_id": 140,
        "name": "筋力/魔法力＆最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 1000
          },
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          135,
          139
        ],
        "limits": []
      },
      {
        "slot": 141,
        "skill_id": 141,
        "name": "筋力/魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          135,
          142,
          144
        ],
        "limits": []
      },
      {
        "slot": 142,
        "skill_id": 142,
        "name": "筋力/魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          141,
          143
        ],
        "limits": []
      },
      {
        "slot": 143,
        "skill_id": 143,
        "name": "『クリティカルダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 592,
            "name": "クリダメ_乗算",
            "value": 3
          }
        ],
        "requires": [
          142,
          144
        ],
        "limits": []
      },
      {
        "slot": 144,
        "skill_id": 144,
        "name": "筋力/魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          141,
          143
        ],
        "limits": []
      },
      {
        "slot": 145,
        "skill_id": 145,
        "name": "『決断』",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": -3
          },
          {
            "type": 574,
            "name": "ボス支配",
            "value": 25
          }
        ],
        "requires": [
          37
        ],
        "limits": []
      },
      {
        "slot": 146,
        "skill_id": 146,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          38,
          147,
          150
        ],
        "limits": []
      },
      {
        "slot": 147,
        "skill_id": 147,
        "name": "ボスモンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 2
          }
        ],
        "requires": [
          146,
          148
        ],
        "limits": []
      },
      {
        "slot": 148,
        "skill_id": 148,
        "name": "ボスモンスター支配力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 4
          }
        ],
        "requires": [
          147,
          149
        ],
        "limits": []
      },
      {
        "slot": 149,
        "skill_id": 149,
        "name": "ボスモンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 2
          }
        ],
        "requires": [
          150,
          148
        ],
        "limits": []
      },
      {
        "slot": 150,
        "skill_id": 150,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          146,
          149,
          151
        ],
        "limits": []
      },
      {
        "slot": 151,
        "skill_id": 151,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          150,
          152,
          154
        ],
        "limits": []
      },
      {
        "slot": 152,
        "skill_id": 152,
        "name": "ボスモンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 2
          }
        ],
        "requires": [
          151,
          153
        ],
        "limits": []
      },
      {
        "slot": 153,
        "skill_id": 153,
        "name": "ボスモンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 571,
            "name": "ボス追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          152,
          154,
          159
        ],
        "limits": []
      },
      {
        "slot": 154,
        "skill_id": 154,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          151,
          153,
          248
        ],
        "limits": []
      },
      {
        "slot": 159,
        "skill_id": 159,
        "name": "覚醒石スロット(1時)",
        "type": 1,
        "stats": [],
        "requires": [
          161,
          153
        ],
        "limits": []
      },
      {
        "slot": 161,
        "skill_id": 161,
        "name": "防御力",
        "type": 0,
        "stats": [
          {
            "type": 216,
            "name": "防御",
            "value": 200
          }
        ],
        "requires": [
          159,
          162
        ],
        "limits": []
      },
      {
        "slot": 162,
        "skill_id": 162,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          163,
          161,
          253
        ],
        "limits": []
      },
      {
        "slot": 163,
        "skill_id": 163,
        "name": "筋力/魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          164,
          162
        ],
        "limits": []
      },
      {
        "slot": 164,
        "skill_id": 164,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          }
        ],
        "requires": [
          41,
          163,
          199
        ],
        "limits": []
      },
      {
        "slot": 165,
        "skill_id": 165,
        "name": "『すばしこい人』",
        "type": 0,
        "stats": [],
        "requires": [
          27
        ],
        "limits": []
      },
      {
        "slot": 166,
        "skill_id": 166,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          28,
          167,
          169
        ],
        "limits": []
      },
      {
        "slot": 167,
        "skill_id": 167,
        "name": "全ステータス[強化]",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          166,
          168
        ],
        "limits": []
      },
      {
        "slot": 168,
        "skill_id": 168,
        "name": "『全ステータス＆筋力』",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          },
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          167,
          169,
          202
        ],
        "limits": []
      },
      {
        "slot": 169,
        "skill_id": 169,
        "name": "筋力/魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          166,
          168
        ],
        "limits": []
      },
      {
        "slot": 170,
        "skill_id": 170,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          29,
          171
        ],
        "limits": []
      },
      {
        "slot": 171,
        "skill_id": 171,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          170,
          172
        ],
        "limits": []
      },
      {
        "slot": 172,
        "skill_id": 172,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          171,
          173
        ],
        "limits": []
      },
      {
        "slot": 173,
        "skill_id": 173,
        "name": "『鋼鉄体力』",
        "type": 0,
        "stats": [],
        "requires": [
          172
        ],
        "limits": []
      },
      {
        "slot": 174,
        "skill_id": 174,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          30,
          179,
          175
        ],
        "limits": []
      },
      {
        "slot": 175,
        "skill_id": 175,
        "name": "最大ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 16
          }
        ],
        "requires": [
          174,
          176
        ],
        "limits": []
      },
      {
        "slot": 176,
        "skill_id": 176,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          175,
          177,
          211
        ],
        "limits": []
      },
      {
        "slot": 177,
        "skill_id": 177,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          176,
          178,
          211
        ],
        "limits": []
      },
      {
        "slot": 178,
        "skill_id": 178,
        "name": "最小ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          179,
          177
        ],
        "limits": []
      },
      {
        "slot": 179,
        "skill_id": 179,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          30,
          174,
          178
        ],
        "limits": []
      },
      {
        "slot": 180,
        "skill_id": 180,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          115,
          181,
          182
        ],
        "limits": []
      },
      {
        "slot": 181,
        "skill_id": 181,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          180,
          182
        ],
        "limits": []
      },
      {
        "slot": 182,
        "skill_id": 182,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          180,
          181,
          224
        ],
        "limits": []
      },
      {
        "slot": 183,
        "skill_id": 183,
        "name": "『残酷な苦痛』",
        "type": 0,
        "stats": [],
        "requires": [
          45
        ],
        "limits": []
      },
      {
        "slot": 184,
        "skill_id": 184,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          44,
          185
        ],
        "limits": []
      },
      {
        "slot": 185,
        "skill_id": 185,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          184,
          186,
          187,
          188
        ],
        "limits": []
      },
      {
        "slot": 186,
        "skill_id": 186,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          185,
          187
        ],
        "limits": []
      },
      {
        "slot": 187,
        "skill_id": 187,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          185,
          186,
          188,
          276
        ],
        "limits": []
      },
      {
        "slot": 188,
        "skill_id": 188,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          185,
          187
        ],
        "limits": []
      },
      {
        "slot": 189,
        "skill_id": 189,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          43,
          190
        ],
        "limits": []
      },
      {
        "slot": 190,
        "skill_id": 190,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          189,
          191
        ],
        "limits": []
      },
      {
        "slot": 191,
        "skill_id": 191,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          190,
          192
        ],
        "limits": []
      },
      {
        "slot": 192,
        "skill_id": 192,
        "name": "『暴走機関車』",
        "type": 0,
        "stats": [],
        "requires": [
          191
        ],
        "limits": []
      },
      {
        "slot": 193,
        "skill_id": 193,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          42,
          194,
          198
        ],
        "limits": []
      },
      {
        "slot": 194,
        "skill_id": 194,
        "name": "クリティカル確率",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 1
          }
        ],
        "requires": [
          193,
          195
        ],
        "limits": []
      },
      {
        "slot": 195,
        "skill_id": 195,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          194,
          196,
          268
        ],
        "limits": []
      },
      {
        "slot": 196,
        "skill_id": 196,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          195,
          197,
          268
        ],
        "limits": []
      },
      {
        "slot": 197,
        "skill_id": 197,
        "name": "貫通力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 6
          }
        ],
        "requires": [
          196,
          198
        ],
        "limits": []
      },
      {
        "slot": 198,
        "skill_id": 198,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          42,
          193,
          197
        ],
        "limits": []
      },
      {
        "slot": 199,
        "skill_id": 199,
        "name": "スタン抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 408,
            "name": "スタン抵抗",
            "value": 20
          }
        ],
        "requires": [
          164,
          200,
          201
        ],
        "limits": []
      },
      {
        "slot": 200,
        "skill_id": 200,
        "name": "スタン抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 408,
            "name": "スタン抵抗",
            "value": 20
          }
        ],
        "requires": [
          199,
          201
        ],
        "limits": []
      },
      {
        "slot": 201,
        "skill_id": 201,
        "name": "スタン抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 408,
            "name": "スタン抵抗",
            "value": 20
          }
        ],
        "requires": [
          199,
          200,
          262
        ],
        "limits": []
      },
      {
        "slot": 202,
        "skill_id": 202,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          168,
          203,
          207
        ],
        "limits": []
      },
      {
        "slot": 203,
        "skill_id": 203,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          202,
          204
        ],
        "limits": []
      },
      {
        "slot": 204,
        "skill_id": 204,
        "name": "スキルレベルアップ",
        "type": 0,
        "stats": [],
        "requires": [
          203,
          205,
          206
        ],
        "limits": []
      },
      {
        "slot": 205,
        "skill_id": 205,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          204
        ],
        "limits": [
          206
        ]
      },
      {
        "slot": 206,
        "skill_id": 206,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          204
        ],
        "limits": [
          205
        ]
      },
      {
        "slot": 207,
        "skill_id": 207,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          202,
          208,
          211
        ],
        "limits": []
      },
      {
        "slot": 208,
        "skill_id": 208,
        "name": "幸運",
        "type": 0,
        "stats": [
          {
            "type": 18,
            "name": "幸運",
            "value": 1000
          }
        ],
        "requires": [
          207,
          209
        ],
        "limits": []
      },
      {
        "slot": 209,
        "skill_id": 209,
        "name": "幸運",
        "type": 0,
        "stats": [
          {
            "type": 18,
            "name": "幸運",
            "value": 1000
          }
        ],
        "requires": [
          208,
          210
        ],
        "limits": []
      },
      {
        "slot": 210,
        "skill_id": 210,
        "name": "『超越者』",
        "type": 0,
        "stats": [],
        "requires": [
          209
        ],
        "limits": []
      },
      {
        "slot": 211,
        "skill_id": 211,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          207,
          176,
          177,
          212
        ],
        "limits": []
      },
      {
        "slot": 212,
        "skill_id": 212,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          211,
          213,
          214
        ],
        "limits": []
      },
      {
        "slot": 213,
        "skill_id": 213,
        "name": "『毒気』",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": -20
          },
          {
            "type": 573,
            "name": "一般支配",
            "value": 25
          }
        ],
        "requires": [
          212,
          214
        ],
        "limits": []
      },
      {
        "slot": 214,
        "skill_id": 214,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          212,
          213,
          228
        ],
        "limits": []
      },
      {
        "slot": 215,
        "skill_id": 215,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          117,
          216,
          219
        ],
        "limits": []
      },
      {
        "slot": 216,
        "skill_id": 216,
        "name": "ダメージ減少(%)",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 1
          }
        ],
        "requires": [
          215,
          217,
          218
        ],
        "limits": []
      },
      {
        "slot": 217,
        "skill_id": 217,
        "name": "ダメージ減少(%)",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 1
          }
        ],
        "requires": [
          216,
          218
        ],
        "limits": []
      },
      {
        "slot": 218,
        "skill_id": 218,
        "name": "『スキルマスター』",
        "type": 0,
        "stats": [
          {
            "type": 614,
            "name": "タゲ数",
            "value": 1
          }
        ],
        "requires": [
          216,
          217
        ],
        "limits": []
      },
      {
        "slot": 219,
        "skill_id": 219,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          215,
          220,
          224
        ],
        "limits": []
      },
      {
        "slot": 220,
        "skill_id": 220,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          219,
          221,
          223
        ],
        "limits": []
      },
      {
        "slot": 221,
        "skill_id": 221,
        "name": "ターゲット数",
        "type": 0,
        "stats": [],
        "requires": [
          220,
          222
        ],
        "limits": []
      },
      {
        "slot": 222,
        "skill_id": 222,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          221,
          223
        ],
        "limits": []
      },
      {
        "slot": 223,
        "skill_id": 223,
        "name": "ターゲット数",
        "type": 0,
        "stats": [],
        "requires": [
          220,
          222
        ],
        "limits": []
      },
      {
        "slot": 224,
        "skill_id": 224,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          182,
          228,
          219,
          225
        ],
        "limits": []
      },
      {
        "slot": 225,
        "skill_id": 225,
        "name": "最大HP[強化]",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          224,
          226,
          227
        ],
        "limits": []
      },
      {
        "slot": 226,
        "skill_id": 226,
        "name": "最大HP(%)",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 1
          }
        ],
        "requires": [
          225,
          227
        ],
        "limits": []
      },
      {
        "slot": 227,
        "skill_id": 227,
        "name": "最大HP(%)",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 1
          }
        ],
        "requires": [
          225,
          226
        ],
        "limits": []
      },
      {
        "slot": 228,
        "skill_id": 228,
        "name": "『スキルマスター』",
        "type": 0,
        "stats": [
          {
            "type": 614,
            "name": "タゲ数",
            "value": 1
          }
        ],
        "requires": [
          214,
          224
        ],
        "limits": []
      },
      {
        "slot": 229,
        "skill_id": 229,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          133,
          230,
          234
        ],
        "limits": []
      },
      {
        "slot": 230,
        "skill_id": 230,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          229,
          231,
          233
        ],
        "limits": []
      },
      {
        "slot": 231,
        "skill_id": 231,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          230,
          232
        ],
        "limits": []
      },
      {
        "slot": 232,
        "skill_id": 232,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [],
        "requires": [
          231,
          233
        ],
        "limits": []
      },
      {
        "slot": 233,
        "skill_id": 233,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          230,
          232
        ],
        "limits": []
      },
      {
        "slot": 234,
        "skill_id": 234,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          238,
          235,
          229,
          239
        ],
        "limits": []
      },
      {
        "slot": 235,
        "skill_id": 235,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          234,
          236,
          237
        ],
        "limits": []
      },
      {
        "slot": 236,
        "skill_id": 236,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 10
          }
        ],
        "requires": [
          235,
          237
        ],
        "limits": []
      },
      {
        "slot": 237,
        "skill_id": 237,
        "name": "『最大ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 20
          }
        ],
        "requires": [
          235,
          236
        ],
        "limits": []
      },
      {
        "slot": 238,
        "skill_id": 238,
        "name": "『英雄本性』",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 3
          }
        ],
        "requires": [
          234
        ],
        "limits": []
      },
      {
        "slot": 239,
        "skill_id": 239,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          138,
          234,
          240,
          243
        ],
        "limits": []
      },
      {
        "slot": 240,
        "skill_id": 240,
        "name": "ターゲット数増加",
        "type": 0,
        "stats": [],
        "requires": [
          239,
          241
        ],
        "limits": []
      },
      {
        "slot": 241,
        "skill_id": 241,
        "name": "ターゲット数増加",
        "type": 0,
        "stats": [],
        "requires": [
          240,
          242
        ],
        "limits": []
      },
      {
        "slot": 242,
        "skill_id": 242,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          241
        ],
        "limits": []
      },
      {
        "slot": 243,
        "skill_id": 243,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          244,
          247,
          248,
          239
        ],
        "limits": []
      },
      {
        "slot": 244,
        "skill_id": 244,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          243,
          245,
          246
        ],
        "limits": []
      },
      {
        "slot": 245,
        "skill_id": 245,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          244,
          246
        ],
        "limits": []
      },
      {
        "slot": 246,
        "skill_id": 246,
        "name": "『最小ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 40
          }
        ],
        "requires": [
          244,
          245
        ],
        "limits": []
      },
      {
        "slot": 247,
        "skill_id": 247,
        "name": "『本能的感覚』",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 50
          },
          {
            "type": 461,
            "name": "最大",
            "value": 10
          }
        ],
        "requires": [
          243
        ],
        "limits": []
      },
      {
        "slot": 248,
        "skill_id": 248,
        "name": "筋力＆魔法",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          154,
          243,
          249
        ],
        "limits": []
      },
      {
        "slot": 249,
        "skill_id": 249,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          248,
          250,
          252
        ],
        "limits": []
      },
      {
        "slot": 250,
        "skill_id": 250,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          249,
          251
        ],
        "limits": []
      },
      {
        "slot": 251,
        "skill_id": 251,
        "name": "ターゲット数",
        "type": 0,
        "stats": [],
        "requires": [
          250,
          252
        ],
        "limits": []
      },
      {
        "slot": 252,
        "skill_id": 252,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          249,
          251
        ],
        "limits": []
      },
      {
        "slot": 253,
        "skill_id": 253,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          162,
          254,
          257
        ],
        "limits": []
      },
      {
        "slot": 254,
        "skill_id": 254,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          253,
          255,
          256
        ],
        "limits": []
      },
      {
        "slot": 255,
        "skill_id": 255,
        "name": "『素早さ』",
        "type": 0,
        "stats": [],
        "requires": [
          254,
          256
        ],
        "limits": []
      },
      {
        "slot": 256,
        "skill_id": 256,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          }
        ],
        "requires": [
          254,
          255
        ],
        "limits": []
      },
      {
        "slot": 257,
        "skill_id": 257,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          253,
          258,
          262
        ],
        "limits": []
      },
      {
        "slot": 258,
        "skill_id": 258,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          257,
          259,
          261
        ],
        "limits": []
      },
      {
        "slot": 259,
        "skill_id": 259,
        "name": "ターゲット数",
        "type": 0,
        "stats": [],
        "requires": [
          258,
          260
        ],
        "limits": []
      },
      {
        "slot": 260,
        "skill_id": 260,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          259,
          261
        ],
        "limits": []
      },
      {
        "slot": 261,
        "skill_id": 261,
        "name": "ターゲット数",
        "type": 0,
        "stats": [],
        "requires": [
          258,
          260
        ],
        "limits": []
      },
      {
        "slot": 262,
        "skill_id": 262,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          201,
          263,
          264,
          257
        ],
        "limits": []
      },
      {
        "slot": 263,
        "skill_id": 263,
        "name": "『スキルマスター』",
        "type": 0,
        "stats": [
          {
            "type": 614,
            "name": "タゲ数",
            "value": 1
          }
        ],
        "requires": [
          262,
          270
        ],
        "limits": []
      },
      {
        "slot": 264,
        "skill_id": 264,
        "name": "混乱抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 448,
            "name": "混乱抵抗",
            "value": 20
          }
        ],
        "requires": [
          262,
          265,
          267
        ],
        "limits": []
      },
      {
        "slot": 265,
        "skill_id": 265,
        "name": "混乱抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 448,
            "name": "混乱抵抗",
            "value": 20
          }
        ],
        "requires": [
          264,
          266
        ],
        "limits": []
      },
      {
        "slot": 266,
        "skill_id": 266,
        "name": "覚醒石スロット(3時)",
        "type": 1,
        "stats": [],
        "requires": [
          265,
          267
        ],
        "limits": []
      },
      {
        "slot": 267,
        "skill_id": 267,
        "name": "混乱抵抗力",
        "type": 0,
        "stats": [
          {
            "type": 448,
            "name": "混乱抵抗",
            "value": 20
          }
        ],
        "requires": [
          264,
          266
        ],
        "limits": []
      },
      {
        "slot": 268,
        "skill_id": 268,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          195,
          196,
          269,
          272
        ],
        "limits": []
      },
      {
        "slot": 269,
        "skill_id": 269,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 12
          }
        ],
        "requires": [
          268,
          270,
          271
        ],
        "limits": []
      },
      {
        "slot": 270,
        "skill_id": 270,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 12
          }
        ],
        "requires": [
          269,
          271,
          263
        ],
        "limits": []
      },
      {
        "slot": 271,
        "skill_id": 271,
        "name": "『致命傷』",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": -10
          },
          {
            "type": 574,
            "name": "ボス支配",
            "value": 25
          }
        ],
        "requires": [
          269,
          270
        ],
        "limits": []
      },
      {
        "slot": 272,
        "skill_id": 272,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          276,
          273,
          268
        ],
        "limits": []
      },
      {
        "slot": 273,
        "skill_id": 273,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          272,
          274
        ],
        "limits": []
      },
      {
        "slot": 274,
        "skill_id": 274,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          273,
          275
        ],
        "limits": []
      },
      {
        "slot": 275,
        "skill_id": 275,
        "name": "『ノーブレス』",
        "type": 0,
        "stats": [],
        "requires": [
          274
        ],
        "limits": []
      },
      {
        "slot": 276,
        "skill_id": 276,
        "name": "体力",
        "type": 0,
        "stats": [
          {
            "type": 26,
            "name": "体力",
            "value": 500
          }
        ],
        "requires": [
          187,
          272,
          277
        ],
        "limits": []
      },
      {
        "slot": 277,
        "skill_id": 277,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          276,
          278,
          280
        ],
        "limits": []
      },
      {
        "slot": 278,
        "skill_id": 278,
        "name": "スキルレベルアップ",
        "type": 0,
        "stats": [],
        "requires": [
          277,
          279
        ],
        "limits": []
      },
      {
        "slot": 279,
        "skill_id": 279,
        "name": "スキルレベルアップ",
        "type": 0,
        "stats": [],
        "requires": [
          278,
          280,
          281,
          282
        ],
        "limits": []
      },
      {
        "slot": 280,
        "skill_id": 280,
        "name": "スキルレベルアップ",
        "type": 0,
        "stats": [],
        "requires": [
          277,
          279
        ],
        "limits": []
      },
      {
        "slot": 281,
        "skill_id": 281,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          279
        ],
        "limits": [
          282
        ]
      },
      {
        "slot": 282,
        "skill_id": 282,
        "name": "スキル",
        "type": 0,
        "stats": [],
        "requires": [
          279
        ],
        "limits": [
          281
        ]
      },
      {
        "slot": 283,
        "skill_id": 283,
        "name": "虐殺者",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          },
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          17,
          18,
          19
        ],
        "limits": []
      }
    ],
    "coords": {
      "1": {
        "x": 942,
        "y": 919,
        "width": 55,
        "height": 60
      },
      "2": {
        "x": 887,
        "y": 893,
        "width": 26,
        "height": 30
      },
      "3": {
        "x": 836,
        "y": 853,
        "width": 26,
        "height": 30
      },
      "4": {
        "x": 789,
        "y": 887,
        "width": 26,
        "height": 30
      },
      "5": {
        "x": 742,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "6": {
        "x": 792,
        "y": 791,
        "width": 26,
        "height": 30
      },
      "7": {
        "x": 708,
        "y": 793,
        "width": 36,
        "height": 38
      },
      "8": {
        "x": 1027,
        "y": 893,
        "width": 26,
        "height": 30
      },
      "9": {
        "x": 1078,
        "y": 853,
        "width": 26,
        "height": 30
      },
      "10": {
        "x": 1126,
        "y": 887,
        "width": 26,
        "height": 30
      },
      "11": {
        "x": 1175,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "12": {
        "x": 1123,
        "y": 791,
        "width": 26,
        "height": 30
      },
      "13": {
        "x": 1197,
        "y": 793,
        "width": 36,
        "height": 38
      },
      "14": {
        "x": 957,
        "y": 879,
        "width": 26,
        "height": 30
      },
      "15": {
        "x": 926,
        "y": 832,
        "width": 26,
        "height": 30
      },
      "16": {
        "x": 988,
        "y": 832,
        "width": 26,
        "height": 30
      },
      "17": {
        "x": 908,
        "y": 783,
        "width": 26,
        "height": 30
      },
      "18": {
        "x": 1006,
        "y": 783,
        "width": 26,
        "height": 30
      },
      "19": {
        "x": 957,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "20": {
        "x": 859,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "21": {
        "x": 763,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "22": {
        "x": 666,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "23": {
        "x": 666,
        "y": 759,
        "width": 26,
        "height": 30
      },
      "24": {
        "x": 666,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "25": {
        "x": 666,
        "y": 946,
        "width": 26,
        "height": 30
      },
      "27": {
        "x": 463,
        "y": 946,
        "width": 26,
        "height": 30
      },
      "28": {
        "x": 463,
        "y": 848,
        "width": 26,
        "height": 30
      },
      "29": {
        "x": 463,
        "y": 735,
        "width": 26,
        "height": 30
      },
      "30": {
        "x": 463,
        "y": 612,
        "width": 26,
        "height": 30
      },
      "31": {
        "x": 463,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "32": {
        "x": 528,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "33": {
        "x": 652,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "34": {
        "x": 756,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "35": {
        "x": 857,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "36": {
        "x": 957,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "37": {
        "x": 1057,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "38": {
        "x": 1158,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "39": {
        "x": 1262,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "40": {
        "x": 1386,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "41": {
        "x": 1471,
        "y": 481,
        "width": 26,
        "height": 30
      },
      "42": {
        "x": 1471,
        "y": 622,
        "width": 26,
        "height": 30
      },
      "43": {
        "x": 1471,
        "y": 735,
        "width": 26,
        "height": 30
      },
      "44": {
        "x": 1471,
        "y": 838,
        "width": 26,
        "height": 30
      },
      "45": {
        "x": 1471,
        "y": 946,
        "width": 26,
        "height": 30
      },
      "47": {
        "x": 1248,
        "y": 946,
        "width": 26,
        "height": 30
      },
      "48": {
        "x": 1248,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "49": {
        "x": 1248,
        "y": 759,
        "width": 26,
        "height": 30
      },
      "50": {
        "x": 1248,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "51": {
        "x": 1151,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "52": {
        "x": 1055,
        "y": 703,
        "width": 26,
        "height": 30
      },
      "53": {
        "x": 628,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "54": {
        "x": 597,
        "y": 891,
        "width": 26,
        "height": 30
      },
      "55": {
        "x": 564,
        "y": 848,
        "width": 26,
        "height": 30
      },
      "56": {
        "x": 499,
        "y": 874,
        "width": 60,
        "height": 60
      },
      "57": {
        "x": 616,
        "y": 759,
        "width": 26,
        "height": 30
      },
      "58": {
        "x": 549,
        "y": 743,
        "width": 54,
        "height": 59
      },
      "59": {
        "x": 508,
        "y": 759,
        "width": 26,
        "height": 30
      },
      "65": {
        "x": 614,
        "y": 658,
        "width": 26,
        "height": 30
      },
      "66": {
        "x": 571,
        "y": 626,
        "width": 26,
        "height": 30
      },
      "67": {
        "x": 523,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "68": {
        "x": 528,
        "y": 535,
        "width": 26,
        "height": 30
      },
      "69": {
        "x": 571,
        "y": 508,
        "width": 26,
        "height": 30
      },
      "70": {
        "x": 609,
        "y": 537,
        "width": 36,
        "height": 38
      },
      "71": {
        "x": 614,
        "y": 599,
        "width": 26,
        "height": 30
      },
      "72": {
        "x": 557,
        "y": 551,
        "width": 54,
        "height": 59
      },
      "73": {
        "x": 656,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "74": {
        "x": 713,
        "y": 539,
        "width": 36,
        "height": 38
      },
      "75": {
        "x": 752,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "76": {
        "x": 726,
        "y": 640,
        "width": 26,
        "height": 30
      },
      "77": {
        "x": 813,
        "y": 559,
        "width": 26,
        "height": 30
      },
      "78": {
        "x": 842,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "79": {
        "x": 817,
        "y": 625,
        "width": 26,
        "height": 30
      },
      "80": {
        "x": 889,
        "y": 576,
        "width": 54,
        "height": 59
      },
      "81": {
        "x": 925,
        "y": 556,
        "width": 26,
        "height": 30
      },
      "82": {
        "x": 957,
        "y": 539,
        "width": 26,
        "height": 30
      },
      "83": {
        "x": 989,
        "y": 556,
        "width": 26,
        "height": 30
      },
      "84": {
        "x": 997,
        "y": 576,
        "width": 54,
        "height": 59
      },
      "85": {
        "x": 989,
        "y": 628,
        "width": 26,
        "height": 30
      },
      "86": {
        "x": 957,
        "y": 645,
        "width": 26,
        "height": 30
      },
      "87": {
        "x": 925,
        "y": 628,
        "width": 26,
        "height": 30
      },
      "88": {
        "x": 1062,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "89": {
        "x": 1102,
        "y": 559,
        "width": 26,
        "height": 30
      },
      "90": {
        "x": 1097,
        "y": 625,
        "width": 26,
        "height": 30
      },
      "91": {
        "x": 1153,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "92": {
        "x": 1189,
        "y": 539,
        "width": 36,
        "height": 38
      },
      "93": {
        "x": 1247,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "94": {
        "x": 1188,
        "y": 640,
        "width": 26,
        "height": 30
      },
      "95": {
        "x": 1300,
        "y": 658,
        "width": 26,
        "height": 30
      },
      "96": {
        "x": 1300,
        "y": 599,
        "width": 26,
        "height": 30
      },
      "97": {
        "x": 1295,
        "y": 537,
        "width": 36,
        "height": 38
      },
      "98": {
        "x": 1343,
        "y": 508,
        "width": 26,
        "height": 30
      },
      "99": {
        "x": 1386,
        "y": 535,
        "width": 26,
        "height": 30
      },
      "100": {
        "x": 1381,
        "y": 587,
        "width": 36,
        "height": 38
      },
      "101": {
        "x": 1343,
        "y": 626,
        "width": 26,
        "height": 30
      },
      "102": {
        "x": 1329,
        "y": 551,
        "width": 54,
        "height": 59
      },
      "103": {
        "x": 1295,
        "y": 754,
        "width": 36,
        "height": 38
      },
      "104": {
        "x": 1347,
        "y": 743,
        "width": 54,
        "height": 59
      },
      "105": {
        "x": 1417,
        "y": 754,
        "width": 36,
        "height": 38
      },
      "111": {
        "x": 1305,
        "y": 858,
        "width": 26,
        "height": 30
      },
      "112": {
        "x": 1336,
        "y": 890,
        "width": 26,
        "height": 30
      },
      "113": {
        "x": 1364,
        "y": 853,
        "width": 36,
        "height": 38
      },
      "114": {
        "x": 1408,
        "y": 889,
        "width": 60,
        "height": 60
      },
      "115": {
        "x": 458,
        "y": 401,
        "width": 36,
        "height": 38
      },
      "116": {
        "x": 458,
        "y": 332,
        "width": 36,
        "height": 38
      },
      "117": {
        "x": 463,
        "y": 253,
        "width": 26,
        "height": 30
      },
      "118": {
        "x": 510,
        "y": 287,
        "width": 26,
        "height": 30
      },
      "124": {
        "x": 544,
        "y": 314,
        "width": 60,
        "height": 60
      },
      "125": {
        "x": 756,
        "y": 436,
        "width": 26,
        "height": 30
      },
      "126": {
        "x": 791,
        "y": 410,
        "width": 36,
        "height": 38
      },
      "127": {
        "x": 797,
        "y": 362,
        "width": 36,
        "height": 38
      },
      "128": {
        "x": 755,
        "y": 335,
        "width": 36,
        "height": 38
      },
      "129": {
        "x": 719,
        "y": 357,
        "width": 26,
        "height": 30
      },
      "130": {
        "x": 690,
        "y": 308,
        "width": 26,
        "height": 30
      },
      "131": {
        "x": 643,
        "y": 307,
        "width": 36,
        "height": 38
      },
      "132": {
        "x": 629,
        "y": 270,
        "width": 36,
        "height": 38
      },
      "133": {
        "x": 667,
        "y": 255,
        "width": 26,
        "height": 30
      },
      "134": {
        "x": 843,
        "y": 412,
        "width": 54,
        "height": 59
      },
      "135": {
        "x": 957,
        "y": 423,
        "width": 26,
        "height": 30
      },
      "136": {
        "x": 868,
        "y": 364,
        "width": 36,
        "height": 38
      },
      "137": {
        "x": 859,
        "y": 280,
        "width": 54,
        "height": 59
      },
      "138": {
        "x": 952,
        "y": 240,
        "width": 36,
        "height": 38
      },
      "139": {
        "x": 1027,
        "y": 280,
        "width": 54,
        "height": 59
      },
      "140": {
        "x": 1036,
        "y": 364,
        "width": 36,
        "height": 38
      },
      "141": {
        "x": 952,
        "y": 365,
        "width": 36,
        "height": 38
      },
      "142": {
        "x": 918,
        "y": 331,
        "width": 36,
        "height": 38
      },
      "143": {
        "x": 943,
        "y": 281,
        "width": 54,
        "height": 59
      },
      "144": {
        "x": 986,
        "y": 331,
        "width": 36,
        "height": 38
      },
      "145": {
        "x": 1043,
        "y": 412,
        "width": 54,
        "height": 59
      },
      "146": {
        "x": 1158,
        "y": 437,
        "width": 26,
        "height": 30
      },
      "147": {
        "x": 1113,
        "y": 410,
        "width": 36,
        "height": 38
      },
      "148": {
        "x": 1107,
        "y": 362,
        "width": 36,
        "height": 38
      },
      "149": {
        "x": 1145,
        "y": 335,
        "width": 36,
        "height": 38
      },
      "150": {
        "x": 1194,
        "y": 357,
        "width": 26,
        "height": 30
      },
      "151": {
        "x": 1223,
        "y": 309,
        "width": 26,
        "height": 30
      },
      "152": {
        "x": 1261,
        "y": 309,
        "width": 36,
        "height": 38
      },
      "153": {
        "x": 1275,
        "y": 269,
        "width": 36,
        "height": 38
      },
      "154": {
        "x": 1247,
        "y": 252,
        "width": 26,
        "height": 30
      },
      "159": {
        "x": 1346,
        "y": 314,
        "width": 60,
        "height": 60
      },
      "161": {
        "x": 1421,
        "y": 293,
        "width": 26,
        "height": 30
      },
      "162": {
        "x": 1471,
        "y": 255,
        "width": 26,
        "height": 30
      },
      "163": {
        "x": 1466,
        "y": 325,
        "width": 36,
        "height": 38
      },
      "164": {
        "x": 1466,
        "y": 401,
        "width": 36,
        "height": 38
      },
      "165": {
        "x": 385,
        "y": 958,
        "width": 54,
        "height": 59
      },
      "166": {
        "x": 402,
        "y": 843,
        "width": 36,
        "height": 38
      },
      "167": {
        "x": 355,
        "y": 890,
        "width": 36,
        "height": 38
      },
      "168": {
        "x": 297,
        "y": 832,
        "width": 54,
        "height": 59
      },
      "169": {
        "x": 355,
        "y": 796,
        "width": 36,
        "height": 38
      },
      "170": {
        "x": 420,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "171": {
        "x": 380,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "172": {
        "x": 340,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "173": {
        "x": 280,
        "y": 719,
        "width": 54,
        "height": 59
      },
      "174": {
        "x": 398,
        "y": 641,
        "width": 26,
        "height": 30
      },
      "175": {
        "x": 352,
        "y": 654,
        "width": 36,
        "height": 38
      },
      "176": {
        "x": 317,
        "y": 641,
        "width": 26,
        "height": 30
      },
      "177": {
        "x": 317,
        "y": 582,
        "width": 26,
        "height": 30
      },
      "178": {
        "x": 352,
        "y": 561,
        "width": 36,
        "height": 38
      },
      "179": {
        "x": 398,
        "y": 582,
        "width": 26,
        "height": 30
      },
      "180": {
        "x": 349,
        "y": 406,
        "width": 26,
        "height": 30
      },
      "181": {
        "x": 311,
        "y": 439,
        "width": 26,
        "height": 30
      },
      "182": {
        "x": 290,
        "y": 387,
        "width": 26,
        "height": 30
      },
      "183": {
        "x": 1521,
        "y": 958,
        "width": 54,
        "height": 59
      },
      "184": {
        "x": 1512,
        "y": 838,
        "width": 26,
        "height": 30
      },
      "185": {
        "x": 1553,
        "y": 838,
        "width": 26,
        "height": 30
      },
      "186": {
        "x": 1609,
        "y": 882,
        "width": 36,
        "height": 38
      },
      "187": {
        "x": 1609,
        "y": 833,
        "width": 36,
        "height": 38
      },
      "188": {
        "x": 1609,
        "y": 784,
        "width": 36,
        "height": 38
      },
      "189": {
        "x": 1504,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "190": {
        "x": 1544,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "191": {
        "x": 1584,
        "y": 730,
        "width": 36,
        "height": 38
      },
      "192": {
        "x": 1624,
        "y": 719,
        "width": 54,
        "height": 59
      },
      "193": {
        "x": 1536,
        "y": 651,
        "width": 26,
        "height": 30
      },
      "194": {
        "x": 1572,
        "y": 664,
        "width": 36,
        "height": 38
      },
      "195": {
        "x": 1618,
        "y": 651,
        "width": 26,
        "height": 30
      },
      "196": {
        "x": 1618,
        "y": 593,
        "width": 26,
        "height": 30
      },
      "197": {
        "x": 1572,
        "y": 570,
        "width": 36,
        "height": 38
      },
      "198": {
        "x": 1536,
        "y": 593,
        "width": 26,
        "height": 30
      },
      "199": {
        "x": 1520,
        "y": 406,
        "width": 26,
        "height": 30
      },
      "200": {
        "x": 1567,
        "y": 435,
        "width": 26,
        "height": 30
      },
      "201": {
        "x": 1564,
        "y": 376,
        "width": 26,
        "height": 30
      },
      "202": {
        "x": 250,
        "y": 848,
        "width": 26,
        "height": 30
      },
      "203": {
        "x": 245,
        "y": 924,
        "width": 36,
        "height": 38
      },
      "204": {
        "x": 179,
        "y": 924,
        "width": 36,
        "height": 38
      },
      "205": {
        "x": 79,
        "y": 907,
        "width": 70,
        "height": 70
      },
      "207": {
        "x": 250,
        "y": 775,
        "width": 26,
        "height": 30
      },
      "208": {
        "x": 199,
        "y": 744,
        "width": 26,
        "height": 30
      },
      "209": {
        "x": 153,
        "y": 716,
        "width": 26,
        "height": 30
      },
      "210": {
        "x": 139,
        "y": 623,
        "width": 54,
        "height": 59
      },
      "211": {
        "x": 250,
        "y": 612,
        "width": 26,
        "height": 30
      },
      "212": {
        "x": 209,
        "y": 547,
        "width": 36,
        "height": 38
      },
      "213": {
        "x": 132,
        "y": 488,
        "width": 54,
        "height": 59
      },
      "214": {
        "x": 196,
        "y": 451,
        "width": 36,
        "height": 38
      },
      "215": {
        "x": 377,
        "y": 208,
        "width": 26,
        "height": 30
      },
      "216": {
        "x": 372,
        "y": 138,
        "width": 36,
        "height": 38
      },
      "217": {
        "x": 404,
        "y": 100,
        "width": 36,
        "height": 38
      },
      "218": {
        "x": 331,
        "y": 77,
        "width": 54,
        "height": 59
      },
      "219": {
        "x": 304,
        "y": 246,
        "width": 26,
        "height": 30
      },
      "220": {
        "x": 268,
        "y": 192,
        "width": 36,
        "height": 38
      },
      "221": {
        "x": 288,
        "y": 122,
        "width": 36,
        "height": 38
      },
      "222": {
        "x": 205,
        "y": 96,
        "width": 54,
        "height": 59
      },
      "223": {
        "x": 206,
        "y": 173,
        "width": 36,
        "height": 38
      },
      "224": {
        "x": 201,
        "y": 322,
        "width": 26,
        "height": 30
      },
      "225": {
        "x": 166,
        "y": 268,
        "width": 26,
        "height": 30
      },
      "226": {
        "x": 134,
        "y": 212,
        "width": 36,
        "height": 38
      },
      "227": {
        "x": 101,
        "y": 256,
        "width": 36,
        "height": 38
      },
      "228": {
        "x": 187,
        "y": 373,
        "width": 54,
        "height": 59
      },
      "229": {
        "x": 667,
        "y": 195,
        "width": 26,
        "height": 30
      },
      "230": {
        "x": 583,
        "y": 190,
        "width": 36,
        "height": 38
      },
      "231": {
        "x": 523,
        "y": 235,
        "width": 36,
        "height": 38
      },
      "232": {
        "x": 486,
        "y": 172,
        "width": 36,
        "height": 38
      },
      "233": {
        "x": 525,
        "y": 116,
        "width": 70,
        "height": 70
      },
      "234": {
        "x": 790,
        "y": 195,
        "width": 26,
        "height": 30
      },
      "235": {
        "x": 785,
        "y": 142,
        "width": 36,
        "height": 38
      },
      "236": {
        "x": 753,
        "y": 101,
        "width": 36,
        "height": 38
      },
      "237": {
        "x": 810,
        "y": 81,
        "width": 54,
        "height": 59
      },
      "238": {
        "x": 740,
        "y": 242,
        "width": 54,
        "height": 59
      },
      "239": {
        "x": 957,
        "y": 195,
        "width": 26,
        "height": 30
      },
      "240": {
        "x": 952,
        "y": 148,
        "width": 36,
        "height": 38
      },
      "241": {
        "x": 952,
        "y": 104,
        "width": 36,
        "height": 38
      },
      "242": {
        "x": 943,
        "y": 39,
        "width": 54,
        "height": 59
      },
      "243": {
        "x": 1124,
        "y": 195,
        "width": 26,
        "height": 30
      },
      "244": {
        "x": 1119,
        "y": 142,
        "width": 36,
        "height": 38
      },
      "245": {
        "x": 1151,
        "y": 102,
        "width": 36,
        "height": 38
      },
      "246": {
        "x": 1078,
        "y": 82,
        "width": 54,
        "height": 59
      },
      "247": {
        "x": 1147,
        "y": 242,
        "width": 54,
        "height": 59
      },
      "248": {
        "x": 1247,
        "y": 195,
        "width": 26,
        "height": 30
      },
      "249": {
        "x": 1330,
        "y": 190,
        "width": 36,
        "height": 38
      },
      "250": {
        "x": 1377,
        "y": 242,
        "width": 36,
        "height": 38
      },
      "251": {
        "x": 1425,
        "y": 190,
        "width": 36,
        "height": 38
      },
      "252": {
        "x": 1360,
        "y": 129,
        "width": 70,
        "height": 70
      },
      "253": {
        "x": 1535,
        "y": 255,
        "width": 26,
        "height": 30
      },
      "254": {
        "x": 1530,
        "y": 196,
        "width": 36,
        "height": 38
      },
      "255": {
        "x": 1480,
        "y": 141,
        "width": 54,
        "height": 59
      },
      "256": {
        "x": 1559,
        "y": 149,
        "width": 36,
        "height": 38
      },
      "257": {
        "x": 1535,
        "y": 315,
        "width": 26,
        "height": 30
      },
      "258": {
        "x": 1632,
        "y": 310,
        "width": 36,
        "height": 38
      },
      "259": {
        "x": 1680,
        "y": 263,
        "width": 36,
        "height": 38
      },
      "260": {
        "x": 1717,
        "y": 293,
        "width": 70,
        "height": 70
      },
      "261": {
        "x": 1680,
        "y": 358,
        "width": 36,
        "height": 38
      },
      "262": {
        "x": 1619,
        "y": 376,
        "width": 26,
        "height": 30
      },
      "263": {
        "x": 1701,
        "y": 429,
        "width": 54,
        "height": 59
      },
      "264": {
        "x": 1619,
        "y": 460,
        "width": 26,
        "height": 30
      },
      "265": {
        "x": 1602,
        "y": 501,
        "width": 26,
        "height": 30
      },
      "266": {
        "x": 1640,
        "y": 508,
        "width": 60,
        "height": 60
      },
      "267": {
        "x": 1666,
        "y": 473,
        "width": 26,
        "height": 30
      },
      "268": {
        "x": 1684,
        "y": 622,
        "width": 26,
        "height": 30
      },
      "269": {
        "x": 1727,
        "y": 589,
        "width": 36,
        "height": 38
      },
      "270": {
        "x": 1757,
        "y": 522,
        "width": 36,
        "height": 38
      },
      "271": {
        "x": 1810,
        "y": 570,
        "width": 54,
        "height": 59
      },
      "272": {
        "x": 1684,
        "y": 767,
        "width": 26,
        "height": 30
      },
      "273": {
        "x": 1720,
        "y": 743,
        "width": 26,
        "height": 30
      },
      "274": {
        "x": 1776,
        "y": 743,
        "width": 26,
        "height": 30
      },
      "275": {
        "x": 1816,
        "y": 676,
        "width": 54,
        "height": 59
      },
      "276": {
        "x": 1684,
        "y": 838,
        "width": 26,
        "height": 30
      },
      "277": {
        "x": 1679,
        "y": 897,
        "width": 36,
        "height": 38
      },
      "278": {
        "x": 1646,
        "y": 932,
        "width": 36,
        "height": 38
      },
      "279": {
        "x": 1679,
        "y": 965,
        "width": 36,
        "height": 38
      },
      "280": {
        "x": 1712,
        "y": 932,
        "width": 36,
        "height": 38
      },
      "281": {
        "x": 1776,
        "y": 948,
        "width": 70,
        "height": 70
      },
      "283": {
        "x": 952,
        "y": 747,
        "width": 36,
        "height": 38
      }
    },
    "bgImages": [
      {
        "id": "Awaken_Skill_BG_01",
        "x": 0,
        "y": 0,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_02.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill_BG_02",
        "x": 970,
        "y": 0,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_04.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill_BG_03",
        "x": 0,
        "y": 530,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_06.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill_BG_04",
        "x": 970,
        "y": 530,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_08.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      }
    ]
  },
  "awaken2": {
    "name": "覚醒2",
    "nodes": [
      {
        "slot": 1,
        "skill_id": 200001,
        "name": "【解き放たれし力】",
        "type": 0,
        "stats": [],
        "requires": [
          2,
          28,
          258
        ],
        "limits": []
      },
      {
        "slot": 2,
        "skill_id": 200002,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          1,
          3,
          29
        ],
        "limits": []
      },
      {
        "slot": 3,
        "skill_id": 200003,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          2,
          4,
          263
        ],
        "limits": []
      },
      {
        "slot": 4,
        "skill_id": 200004,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          3,
          80,
          279,
          5
        ],
        "limits": []
      },
      {
        "slot": 5,
        "skill_id": 200005,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          4,
          6
        ],
        "limits": []
      },
      {
        "slot": 6,
        "skill_id": 200006,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          5,
          88,
          102,
          7
        ],
        "limits": []
      },
      {
        "slot": 7,
        "skill_id": 200007,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          6,
          281,
          8
        ],
        "limits": []
      },
      {
        "slot": 8,
        "skill_id": 200008,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          7,
          282,
          9
        ],
        "limits": []
      },
      {
        "slot": 9,
        "skill_id": 200009,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          8,
          140,
          11,
          10
        ],
        "limits": []
      },
      {
        "slot": 10,
        "skill_id": 200010,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          9,
          11,
          293
        ],
        "limits": []
      },
      {
        "slot": 11,
        "skill_id": 200011,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          9,
          10,
          12
        ],
        "limits": []
      },
      {
        "slot": 12,
        "skill_id": 200012,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          11,
          13
        ],
        "limits": []
      },
      {
        "slot": 13,
        "skill_id": 200013,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          12,
          14,
          283
        ],
        "limits": []
      },
      {
        "slot": 14,
        "skill_id": 200014,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          13,
          15
        ],
        "limits": []
      },
      {
        "slot": 15,
        "skill_id": 200015,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          14,
          16,
          144
        ],
        "limits": []
      },
      {
        "slot": 16,
        "skill_id": 200016,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          15,
          17
        ],
        "limits": []
      },
      {
        "slot": 17,
        "skill_id": 200017,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          16,
          18,
          287
        ],
        "limits": []
      },
      {
        "slot": 18,
        "skill_id": 200018,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          17,
          19
        ],
        "limits": []
      },
      {
        "slot": 19,
        "skill_id": 200019,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          18,
          21,
          20
        ],
        "limits": []
      },
      {
        "slot": 20,
        "skill_id": 200020,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          19,
          21,
          295
        ],
        "limits": []
      },
      {
        "slot": 21,
        "skill_id": 200021,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          19,
          20,
          22,
          156
        ],
        "limits": []
      },
      {
        "slot": 22,
        "skill_id": 200022,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          21,
          23,
          292
        ],
        "limits": []
      },
      {
        "slot": 23,
        "skill_id": 200023,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          22,
          24,
          291
        ],
        "limits": []
      },
      {
        "slot": 24,
        "skill_id": 200024,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          23,
          25,
          214,
          228
        ],
        "limits": []
      },
      {
        "slot": 25,
        "skill_id": 200025,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          24,
          26
        ],
        "limits": []
      },
      {
        "slot": 26,
        "skill_id": 200026,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          25,
          27,
          206,
          280
        ],
        "limits": []
      },
      {
        "slot": 27,
        "skill_id": 200027,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          26,
          28,
          267
        ],
        "limits": []
      },
      {
        "slot": 28,
        "skill_id": 200028,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          1,
          27,
          165
        ],
        "limits": []
      },
      {
        "slot": 29,
        "skill_id": 200029,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          2,
          30
        ],
        "limits": []
      },
      {
        "slot": 30,
        "skill_id": 200030,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          29,
          40,
          37
        ],
        "limits": []
      },
      {
        "slot": 31,
        "skill_id": 200031,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 32,
        "skill_id": 200032,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 33,
        "skill_id": 200033,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 34,
        "skill_id": 200034,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 35,
        "skill_id": 200035,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 36,
        "skill_id": 200036,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 37,
        "skill_id": 200037,
        "name": "武器攻撃力&属性力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          }
        ],
        "requires": [
          30,
          38,
          39
        ],
        "limits": []
      },
      {
        "slot": 38,
        "skill_id": 200038,
        "name": "武器攻撃力&属性力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          37,
          39
        ],
        "limits": []
      },
      {
        "slot": 39,
        "skill_id": 200039,
        "name": "武器攻撃力&属性力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          }
        ],
        "requires": [
          38,
          37,
          80
        ],
        "limits": []
      },
      {
        "slot": 40,
        "skill_id": 200040,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          30,
          41
        ],
        "limits": []
      },
      {
        "slot": 41,
        "skill_id": 200041,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          40,
          42,
          47,
          48
        ],
        "limits": []
      },
      {
        "slot": 42,
        "skill_id": 200042,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          41,
          43
        ],
        "limits": []
      },
      {
        "slot": 43,
        "skill_id": 200043,
        "name": "ボスモンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 574,
            "name": "ボス支配",
            "value": 15
          }
        ],
        "requires": [
          42,
          44
        ],
        "limits": []
      },
      {
        "slot": 44,
        "skill_id": 200044,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          43,
          81
        ],
        "limits": []
      },
      {
        "slot": 45,
        "skill_id": 200045,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          46,
          81
        ],
        "limits": []
      },
      {
        "slot": 46,
        "skill_id": 200046,
        "name": "一般モンスター支配力",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 15
          }
        ],
        "requires": [
          45,
          47
        ],
        "limits": []
      },
      {
        "slot": 47,
        "skill_id": 200047,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          46,
          41
        ],
        "limits": []
      },
      {
        "slot": 48,
        "skill_id": 200048,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          41,
          56
        ],
        "limits": []
      },
      {
        "slot": 49,
        "skill_id": 200049,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 50,
        "skill_id": 200050,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 51,
        "skill_id": 200051,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 52,
        "skill_id": 200052,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 53,
        "skill_id": 200053,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 54,
        "skill_id": 200054,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 55,
        "skill_id": 200055,
        "name": "未使用データ",
        "type": 0,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [],
        "limits": []
      },
      {
        "slot": 56,
        "skill_id": 200056,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          48,
          57,
          64
        ],
        "limits": []
      },
      {
        "slot": 57,
        "skill_id": 200057,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          56,
          61,
          58
        ],
        "limits": []
      },
      {
        "slot": 58,
        "skill_id": 200058,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          57,
          59
        ],
        "limits": []
      },
      {
        "slot": 59,
        "skill_id": 200059,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 16
          }
        ],
        "requires": [
          58,
          60
        ],
        "limits": []
      },
      {
        "slot": 60,
        "skill_id": 200060,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 25
          }
        ],
        "requires": [
          59
        ],
        "limits": []
      },
      {
        "slot": 61,
        "skill_id": 200061,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          57,
          62
        ],
        "limits": []
      },
      {
        "slot": 62,
        "skill_id": 200062,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          61,
          63
        ],
        "limits": []
      },
      {
        "slot": 63,
        "skill_id": 200063,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 30
          }
        ],
        "requires": [
          62
        ],
        "limits": []
      },
      {
        "slot": 64,
        "skill_id": 200064,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          56,
          65,
          75
        ],
        "limits": []
      },
      {
        "slot": 65,
        "skill_id": 200065,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          64,
          66,
          69,
          72
        ],
        "limits": []
      },
      {
        "slot": 66,
        "skill_id": 200066,
        "name": "ダメージ減少(%)",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 1
          }
        ],
        "requires": [
          65,
          67
        ],
        "limits": []
      },
      {
        "slot": 67,
        "skill_id": 200067,
        "name": "ダメージ減少(%)",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 1
          }
        ],
        "requires": [
          66,
          68
        ],
        "limits": []
      },
      {
        "slot": 68,
        "skill_id": 200068,
        "name": "『ダメージ減少(%)』",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 2
          }
        ],
        "requires": [
          67
        ],
        "limits": []
      },
      {
        "slot": 69,
        "skill_id": 200069,
        "name": "最大HP(%)減少、クリティカルダメージ増加",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": -1
          },
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          65,
          70
        ],
        "limits": []
      },
      {
        "slot": 70,
        "skill_id": 200070,
        "name": "最大HP(%)減少、クリティカルダメージ増加",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": -1
          },
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          69,
          71
        ],
        "limits": []
      },
      {
        "slot": 71,
        "skill_id": 200071,
        "name": "『野獣特質』",
        "type": 0,
        "stats": [],
        "requires": [
          70
        ],
        "limits": []
      },
      {
        "slot": 72,
        "skill_id": 200072,
        "name": "命中率減少、移動速度増加",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": -10
          },
          {
            "type": 106,
            "name": "移動",
            "value": 15
          }
        ],
        "requires": [
          65,
          73
        ],
        "limits": []
      },
      {
        "slot": 73,
        "skill_id": 200073,
        "name": "命中率減少、移動速度増加",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": -10
          },
          {
            "type": 106,
            "name": "移動",
            "value": 15
          }
        ],
        "requires": [
          72,
          74
        ],
        "limits": []
      },
      {
        "slot": 74,
        "skill_id": 200074,
        "name": "『追撃』",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": -10
          },
          {
            "type": 106,
            "name": "移動",
            "value": 30
          }
        ],
        "requires": [
          73
        ],
        "limits": []
      },
      {
        "slot": 75,
        "skill_id": 200075,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          64,
          76,
          84
        ],
        "limits": []
      },
      {
        "slot": 76,
        "skill_id": 200076,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          75,
          77,
          79
        ],
        "limits": []
      },
      {
        "slot": 77,
        "skill_id": 200077,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          76,
          78
        ],
        "limits": []
      },
      {
        "slot": 78,
        "skill_id": 200078,
        "name": "『乱闘』",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 60
          }
        ],
        "requires": [
          77,
          79
        ],
        "limits": []
      },
      {
        "slot": 79,
        "skill_id": 200079,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          76,
          78
        ],
        "limits": []
      },
      {
        "slot": 80,
        "skill_id": 200080,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          4,
          39,
          81
        ],
        "limits": []
      },
      {
        "slot": 81,
        "skill_id": 200081,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          80,
          44,
          45,
          82
        ],
        "limits": []
      },
      {
        "slot": 82,
        "skill_id": 200082,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          81,
          83
        ],
        "limits": []
      },
      {
        "slot": 83,
        "skill_id": 200083,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          82,
          84
        ],
        "limits": []
      },
      {
        "slot": 84,
        "skill_id": 200084,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          75,
          83,
          85,
          101
        ],
        "limits": []
      },
      {
        "slot": 85,
        "skill_id": 200085,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          84,
          101,
          86,
          113
        ],
        "limits": []
      },
      {
        "slot": 86,
        "class_skills": {
          "24": {
            "skill_id": 224086,
            "name": "【スパイラルチャージ】",
            "description": "▲覚醒スキル▲\\n\\n<スパイラルチャージ>\\n→後続動作の斬り攻撃を強化する\\n→スキル使用中、敵から受けるダメージ20%減少\\n→フルチャージ時、スパイラルサモン召喚\\n\\n[86スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225086,
            "name": "【飛燕剣_回撃】",
            "description": "▲覚醒スキル▲\\n\\n<飛燕剣_回撃>\\n→剣を周りに浮かばせ、防御と攻撃を同時にとる剣術\\n→スキル使用時、方向キー(↓)を入力すると、バックターンしながら攻撃\\n→飛燕剣_回撃[マスター]の効果が動作毎に適用される\\n→スキル使用中、受けるダメージ20%減少\\n\\n[86スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226086,
            "name": "【パワーブリッツ】",
            "description": "▲覚醒スキル▲\\n\\n<パワーブリッツ>\\n→ガントレットの推進力を利用して敵を浮かせた後、打ち下ろす近接技\\n→2段階コンボ攻撃に変更される(パワーブリッツ[マスター]習得時、3コンボ攻撃に変更される)\\n→スキルクールタイが10秒に変更される\\n→攻撃に当たった敵を空中に浮かせる\\n→3番目の攻撃使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→3番目の攻撃直後、ディスペア連携使用時の集める動作を短縮する(ディスペア覚醒スロットを習得した場合のみ適用)\\n→'不屈'の受けるダメージ減少効果が30%に強化される\\n\\n[86スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227086,
            "name": "【[インファイター]フック】",
            "description": "▲覚醒スキル▲\\n\\n<[インファイター]フック>\\n→簡潔な動作で的の隙を狙うフック攻撃\\n→サイキックムーブバック、サイキックムーブバックと連携して使用可能\\n\\n[86スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228086,
            "name": "【デスソウル[カウンター]】",
            "description": "▲覚醒スキル▲\\n\\n<デスソウル[カウンター]>\\n→鎌の回転力を利用して攻撃と回避を同時に行うデスソウルのカウンター技\\n→スキル使用時、方向キー(↓)入力で、より短い距離を回避\\n→攻撃が当たった敵に、出血効果を100%の確率で適用させる\\n→0.1秒毎に出血ダメージ10回発生(2回まで重複可能)\\n→スキル使用時、最大HPの100%に該当する値をシールドとして生成\\n→スキル使用中、受けるダメージ20%減少\\n→スキルクールタイム2倍増加\\n\\n[86スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229086,
            "name": "【ラルガメンテ】",
            "description": "▲覚醒スキル▲\\n\\n<ラルガメンテ>\\n→優雅な指揮動作で部隊を掌握する\\n→スキル使用時、最大HPの100%に該当する値をシールドとして生成\\n→3段階コンボ攻撃に変更される\\n→動作毎にト音記号を召喚する\\n\\n[86スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230086,
            "name": "【秘技_乱】",
            "description": "▲覚醒スキル▲\\n\\n<秘技_乱>\\n→闇に忍び斬撃を飛ばす仲間を呼び出す\\n\\n[86スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231086,
            "name": "【ロールスナイプ】",
            "description": "▲覚醒スキル▲\\n\\n<ロールスナイプ>\\n→後方に迅速に回避すると同時に射撃する技\\n→スキル使用時、方向キー(↓)入力で、より遠くまで回避しながら攻撃\\n→特殊弾を追加発射\\n\\n[86スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232086,
            "name": "【DS-DR】",
            "description": "▲覚醒スキル▲\\n\\n<DS-DR>\\n→ガーディアンボールのドローンを呼び出して目標区域を殲滅する\\n→スキル使用中、ノックバック効果を受けない\\n\\n[86スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236086,
            "name": "【天覇皇斬&龍昇槍撃】",
            "description": "▲覚醒スキル▲\\n\\n<天覇皇斬>\\n→力を極限まで集めて切り落とす一撃の剣\\n→天覇皇斬[強化]の効果でチャージ攻撃時、追加ダメージが10回発生して、昇天龍追加召喚\\n→チャージ攻撃に当たった敵は1秒間スタン\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n<龍昇槍撃>\\n→槍を猛烈に振り回しながら龍のオーラを集めて前方に一気に放出する\\n→すべての打撃にスタン適用\\n→龍刺し攻撃に当たった敵は、追加ダメージ10回発生\\n→スキル使用中、敵から受けるダメージ20%に強化される\\n→スキル使用中、ノックバック効果を受けない\\n\\n[86スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237086,
            "name": "【ケナインブレイド】",
            "description": "▲覚醒スキル▲\\n\\n<ケナインブレイド>\\n→鋭い牙を連想させる打ち下ろしで敵を粉砕する\\n→2回連続使用可能\\n→スキル使用時、方向キー(↑)入力で前方に走りながら攻撃する\\n→スキル使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→動作毎に狂戦士の牙を召喚\\n→秘技状態の場合は2つ召喚\\n\\n[86スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238086,
            "name": "【ソードブレス&ハンマークラッシュⅢ】",
            "description": "▲覚醒スキル▲\\n\\n<ソードブレス>\\n→剣を斬り上げながら前方に進み、浮き上がるシャイニングウェーブを召喚する神聖なる剣\\n→シャイニングウェーブ召喚\\n→スキル使用中、受けるダメージ20%減少\\n\\n<ハンマークラッシュⅢ>\\n→キーを入力したまま3回まで神聖力を集めると強力な一撃を放つ\\n→1番目と3番目の集める動作に、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→スキル使用中、受けるダメージ30%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[86スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239086,
            "name": "【天龍脚Ⅲ】",
            "description": "▲覚醒スキル▲\\n\\n<天龍脚Ⅲ>\\n→鋭い気を足に練り込み空中で広げる連続技\\n→スキル使用中、バックステップでキャンセル可能\\n→3動作使用時、バックステップクールタイム初期化\\n→それぞれの動作の攻撃に当たった敵は、傷効果発生\\n→1動作：傷10回発生\\n→2動作：深い傷10回発生\\n→3動作：致命的な傷10回発生\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n\\n[86スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240086,
            "name": "【ストーンスピア】",
            "description": "▲覚醒スキル▲\\n\\n<ストーンスピア>\\n→巨大な石を槍へと変化させ自由自在に飛ばす魔法\\n→3段階コンボ攻撃に変更される\\n→スキル使用時、方向キー(↑,↓)入力で、後方または上段に回避しながらスキル使用\\n→動作毎に岩石槍を追加召喚\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n\\n[86スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241086,
            "name": "【エレクトリックショック】",
            "description": "▲覚醒スキル▲\\n\\n<エレクトリックショック>\\n→ギターで敵を飛ばした後、演奏で電気エネルギーを集めて雷を打ち下ろす\\n→2段階コンボスキルに変更される\\n→スキル使用時、方向キー(↓)を入力すると後方に移動しながら攻撃可能\\n→エレクトリックショック[強化]習得時、動作毎にエレクトリックウェーブを召喚\\n→2番目の動作にはエレクトリックウェーブを2つ召喚\\n\\n[86スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242086,
            "name": "【マスカレード&アローショット&ワイドショット】",
            "description": "▲覚醒スキル▲\\n\\n<マスカレード>\\n→柔軟な体で曲芸を披露しながら短剣を連続で投擲する技\\n→2回連続使用可能\\n→攻撃に当たった敵は、追加ダメージ5回発生(1、2動作の追加ダメージは個別適用される)\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n<アローショット>\\n→無数の矢を連続して発射する\\n→消耗資源がEPに変更される\\n→キー入力を維持する間、連続使用可能\\n→スキル使用時、30%の確率で補助矢を発射\\n→スキル使用中、敵から受けるダメージ20%減少\\n\\n<ワイドショット>\\n→すべてを貫通する大型ボルトを装備して射撃する\\n→3回連続使用可能\\n→クールタイムが2倍増加\\n→動作毎にスクリューボルト召喚\\n→スクリューボルトには標識が発生しない\\n\\n[86スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243086,
            "name": "【ゴールデンショットⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<ゴールデンショットⅡ>\\n→特殊な弾倉を装填し、より強くなった弾丸で敵を制圧する\\n→2回連続使用可能\\n→装填中の弾丸により効果が追加される\\n-マグナム弾：1.5秒間束縛\\n-徹甲弾：追加ダメージ10回発生\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n\\n[86スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244086,
            "name": "【ライトニング】",
            "description": "▲覚醒スキル▲\\n\\n<ライトニング>\\n→エネルギーを吸収する補助ロボットとエネルギーを放出するMGの合同技\\n→スキル使用中、ノックバック効果を受けない\\n→補助ロボット追加召喚\\n\\n[86スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245086,
            "name": "【ソウルマスターⅣ】",
            "description": "▲覚醒スキル▲\\n\\n<ソウルマスターⅣ>\\n\\n[ブルーソウル]\\n→リリオープの力をもらって敵を攻撃する\\n→3段階コンボスキルに変更される\\n→方向キー(↑、↓)入力時、前後に移動可能\\n→スキル使用中、ノックバック効果を受けない\\n\\n[ダークソウル]\\n→ピクスを召喚して前方の敵を攻撃\\n→召喚動作が簡潔になる\\n\\n[86スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249086,
            "name": "【トゥインクル】",
            "description": "▲覚醒スキル▲\\n\\n<トゥインクル>\\n→無数の光のカードを呼び出し、一気に爆発させる\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n\\n[86スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252086,
            "name": "【[◆]クランブル】",
            "description": "▲覚醒スキル▲\\n\\n<[◆]クランブル>\\n→火の力を込めたカードを投げてトルネードを生成するn→[◆]アルゴススキル効果が100%確率で発動される([◆]アルゴススキル習得時のみ適用)\\n→攻撃が当たった敵は1.5秒間スタン\\n\\n[86スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256086,
            "name": "【魅惑の影&影裂き】",
            "description": "▲覚醒スキル▲\\n\\n<魅惑の影>\\n→巨大な薔薇の蔓で敵を眩惑させた後、生え続ける棘で無差別攻撃\\n→最大6回連続使用可能\\n→魅惑の影[強化]の効果が影薔薇召喚に変更される\\n→発生したダメージの0.1%をHPとして吸収\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→スキルクールタイムが12秒に変更される\\n\\n<影裂き>\\n→影の球体を破き、散らばった影を前方に送らせ敵を闇に包む\\n→スキル使用時、一般スキルのクールタイムを1秒即時減少させる\\n\\n[86スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260086,
            "name": "【ルイナ】",
            "description": "▲覚醒スキル▲\\n\\n<ルイナ>\\n\\n[神聖態勢]\\n→前方により強力な光の爆発を起こす\\n→スキル使用中、ノックバック効果を受けない\\n\\n[憤怒態勢]\\n→より速いスピードで前方に移動する\\n→移動軌跡に2つの残像を残し敵を追加攻撃する\\n\\n[86スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264086,
            "name": "【フレイムバースト】",
            "description": "▲覚醒スキル▲\\n\\n<フレイムバースト>\\n→ギガントポールに火炎を巻いて大きく振り回して火の道を作る\\n→スキルクールタイム50%増加\\n→スキル使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[86スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268086,
            "name": "【デッドリーショット】",
            "description": "▲覚醒スキル▲\\n\\n<デッドリーショット>\\n→前方に強力な刺す攻撃を加える\\n→スキル使用中、ノックバック効果を受けない\\n→スキル使用中、敵から受けるダメージ20%減少\\n\\n[86スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269086,
            "name": "【テンテーション[レッド]】",
            "description": "▲覚醒スキル▲\\n\\n<テンテーション[レッド]>\\n→一層美しく光るルビーを生成して、敵を誘惑する\\n→スキル使用時、方向キー(↑、↓)を入力するとルビーの速度調整可能\\n\\n[86スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273086,
            "name": "【ダークブロウ】",
            "description": "▲覚醒スキル▲\\n\\n<ダークブロウ>\\n\\n[マジックランス]\\n→魔力キャノンを発射した後、後続爆発攻撃を起こす\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[ヘビーランス]\\n→闇の力を一か所に集めて強く打ち放つ\\n→スキルクールタイ50%減少\\n→ダークオーラ追加召喚\\n\\n[86スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274086,
            "name": "【ウインドブレード:獲得】",
            "description": "▲覚醒スキル▲\\n\\n<ウインドブレード:獲得>\\n→風に乗って飛び上がり、より鋭い風で敵を斬り上げる\\n→ウィンドエッジ追加召喚\\n\\n[86スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275086,
            "name": "【アクアショット】",
            "description": "▲覚醒スキル▲\\n\\n<アクアショット>\\n→鋭く水を集め、敵を連続で刺す\\n→2段階コンボスキルに変更される\\n→ウォーターフォース3段階進入時、バブルスパウト召喚(クールタイム減少効果未適用)\\n\\n[86スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278086,
            "name": "【ライジングブレイド】",
            "description": "▲覚醒スキル▲\\n\\n<ライジングブレイド>\\n→より素早い切り上げと切り落とす連携攻撃\\n→ライジングブレイド[マスター]の効果で召喚される剣技が強化される\\n→スキル使用時、方向キー(↑、↓)を入力して剣技の速度調整可能\\n\\n【ゲート通過効果】\\n→攻撃が当たった敵は、追加ダメージ10回発生\\n※ゲート通過後、1秒以内に使用した場合に適用される\\n\\n[86スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281086,
            "name": "【納刀・夕立】",
            "description": "▲覚醒スキル▲\\n\\n<納刀・夕立>\\n→夕立のように吹き付ける剣撃を残す納刀術\\n連携した納刀により効果が変更される\\n→納刀使用後、連携可能\\n→納刀共通：夕立剣撃召喚(納刀・霧雲発動時、打撃回数2倍)\\n→納刀・霧雨と連携時、無敵効果1秒延長(納刀・霧雲発動時2秒延長)\\n→納刀・天泣と連携時、敵を2秒間束縛(納刀・霧雲発動時、敵を2秒間スタン)\\n→納刀・五月雨と連携時、敵に追加ダメージ10回発生(納刀・霧雲発動時、20回発生)\\n\\n[86スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [
          85
        ],
        "limits": []
      },
      {
        "slot": 87,
        "class_skills": {
          "24": {
            "skill_id": 224087,
            "name": "[未使用]ハイランダー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225087,
            "name": "[未使用]ソードダンサー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226087,
            "name": "[未使用]ダークナイト今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227087,
            "name": "[未使用]サイキッカー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228087,
            "name": "[未使用]ファントムメイジ今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229087,
            "name": "[未使用]マエストロ今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230087,
            "name": "[未使用]ローグマスター今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231087,
            "name": "[未使用]ジャッジメント今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232087,
            "name": "[未使用]スターシーカー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236087,
            "name": "[未使用]デストロイヤー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237087,
            "name": "[未使用]フェイタルブレイド今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238087,
            "name": "[未使用]ホーリーセイバー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239087,
            "name": "[未使用]セフィロト今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240087,
            "name": "[未使用]アークメイジ今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241087,
            "name": "[未使用]グランシンフォニア今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242087,
            "name": "[未使用]ウィンドストーカー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243087,
            "name": "[未使用]フライシュッツ今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244087,
            "name": "[未使用]マニピュレーター今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245087,
            "name": "[未使用]ソウルテイカー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249087,
            "name": "[未使用]アークマスター今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252087,
            "name": "[未使用]フォースマスター今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256087,
            "name": "[未使用]ブラックソード今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260087,
            "name": "[未使用]デミゴッド今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264087,
            "name": "[未使用]アグニ今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268087,
            "name": "[未使用]ダークチェイサー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269087,
            "name": "[未使用]ジュエルスター今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273087,
            "name": "[未使用]シャドウウォーカー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274087,
            "name": "[未使用]ウィンディア今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275087,
            "name": "[未使用]レイニア今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278087,
            "name": "[未使用]ゲートキーパー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281087,
            "name": "[未使用]スターセイバー今後使用予定",
            "description": "[87スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [],
        "limits": []
      },
      {
        "slot": 88,
        "skill_id": 200088,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          6,
          95,
          89
        ],
        "limits": []
      },
      {
        "slot": 89,
        "skill_id": 200089,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          88,
          90,
          94
        ],
        "limits": []
      },
      {
        "slot": 90,
        "skill_id": 200090,
        "name": "はしご移動速度",
        "type": 0,
        "stats": [
          {
            "type": 118,
            "name": "はしご速度",
            "value": 100
          }
        ],
        "requires": [
          89,
          91
        ],
        "limits": []
      },
      {
        "slot": 91,
        "skill_id": 200091,
        "name": "ロープ移動速度",
        "type": 0,
        "stats": [
          {
            "type": 114,
            "name": "ロープ速度",
            "value": 100
          }
        ],
        "requires": [
          90,
          92
        ],
        "limits": []
      },
      {
        "slot": 92,
        "skill_id": 200092,
        "name": "『闊歩』",
        "type": 0,
        "stats": [],
        "requires": [
          91,
          93
        ],
        "limits": []
      },
      {
        "slot": 93,
        "skill_id": 200093,
        "name": "移動速度[強化]",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 15
          }
        ],
        "requires": [
          92,
          94
        ],
        "limits": []
      },
      {
        "slot": 94,
        "skill_id": 200094,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          89,
          93
        ],
        "limits": []
      },
      {
        "slot": 95,
        "skill_id": 200095,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          88,
          96,
          100
        ],
        "limits": []
      },
      {
        "slot": 96,
        "skill_id": 200096,
        "name": "命中率",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          }
        ],
        "requires": [
          95,
          97,
          99
        ],
        "limits": []
      },
      {
        "slot": 97,
        "skill_id": 200097,
        "name": "命中率",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          }
        ],
        "requires": [
          96,
          98
        ],
        "limits": []
      },
      {
        "slot": 98,
        "skill_id": 200098,
        "name": "『命中率』",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 10
          }
        ],
        "requires": [
          97,
          99
        ],
        "limits": []
      },
      {
        "slot": 99,
        "skill_id": 200099,
        "name": "命中率",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 5
          }
        ],
        "requires": [
          96,
          98
        ],
        "limits": []
      },
      {
        "slot": 100,
        "skill_id": 200100,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          95,
          101
        ],
        "limits": []
      },
      {
        "slot": 101,
        "skill_id": 200101,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          84,
          85,
          100,
          118
        ],
        "limits": []
      },
      {
        "slot": 102,
        "skill_id": 200102,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          6,
          103,
          104,
          105
        ],
        "limits": []
      },
      {
        "slot": 103,
        "skill_id": 200103,
        "name": "防御および抵抗",
        "type": 0,
        "stats": [
          {
            "type": 597,
            "name": "防御抵抗",
            "value": 2
          }
        ],
        "requires": [
          102,
          106,
          107,
          108
        ],
        "limits": []
      },
      {
        "slot": 104,
        "skill_id": 200104,
        "name": "防御および抵抗",
        "type": 0,
        "stats": [
          {
            "type": 597,
            "name": "防御抵抗",
            "value": 2
          }
        ],
        "requires": [
          102,
          108,
          109,
          110
        ],
        "limits": []
      },
      {
        "slot": 105,
        "skill_id": 200105,
        "name": "防御および抵抗",
        "type": 0,
        "stats": [
          {
            "type": 597,
            "name": "防御抵抗",
            "value": 2
          }
        ],
        "requires": [
          102,
          110,
          111,
          112
        ],
        "limits": []
      },
      {
        "slot": 106,
        "skill_id": 200106,
        "name": "『一騎当千』",
        "type": 0,
        "stats": [
          {
            "type": 614,
            "name": "タゲ数",
            "value": 2
          }
        ],
        "requires": [
          103
        ],
        "limits": []
      },
      {
        "slot": 107,
        "skill_id": 200107,
        "name": "『混乱抵抗力』",
        "type": 0,
        "stats": [
          {
            "type": 448,
            "name": "混乱抵抗",
            "value": 150
          }
        ],
        "requires": [
          103
        ],
        "limits": []
      },
      {
        "slot": 108,
        "skill_id": 200108,
        "name": "『ダメージ減少(%)』",
        "type": 0,
        "stats": [
          {
            "type": 86,
            "name": "ダメ減%",
            "value": 1
          }
        ],
        "requires": [
          103,
          104
        ],
        "limits": []
      },
      {
        "slot": 109,
        "skill_id": 200109,
        "name": "『筋力/魔法力効率』",
        "type": 0,
        "stats": [
          {
            "type": 200,
            "name": "効率",
            "value": 3
          },
          {
            "type": 208,
            "name": "効率",
            "value": 3
          }
        ],
        "requires": [
          104
        ],
        "limits": []
      },
      {
        "slot": 110,
        "skill_id": 200110,
        "name": "『スタン抵抗力』",
        "type": 0,
        "stats": [
          {
            "type": 408,
            "name": "スタン抵抗",
            "value": 150
          }
        ],
        "requires": [
          104,
          105
        ],
        "limits": []
      },
      {
        "slot": 111,
        "skill_id": 200111,
        "name": "『堅城鉄壁』",
        "type": 0,
        "stats": [],
        "requires": [
          105
        ],
        "limits": []
      },
      {
        "slot": 112,
        "skill_id": 200112,
        "name": "『反撃開始』",
        "type": 0,
        "stats": [],
        "requires": [
          105
        ],
        "limits": []
      },
      {
        "slot": 113,
        "skill_id": 200113,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          85,
          116,
          114,
          117
        ],
        "limits": []
      },
      {
        "slot": 114,
        "skill_id": 200114,
        "name": "ボスモンスターダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 8000
          }
        ],
        "requires": [
          113,
          115
        ],
        "limits": []
      },
      {
        "slot": 115,
        "skill_id": 200115,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          114,
          116,
          117,
          119
        ],
        "limits": []
      },
      {
        "slot": 116,
        "skill_id": 200116,
        "name": "一般モンスターダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 8000
          }
        ],
        "requires": [
          113,
          115
        ],
        "limits": []
      },
      {
        "slot": 117,
        "skill_id": 200117,
        "name": "追加ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 4000
          }
        ],
        "requires": [
          113,
          115
        ],
        "limits": []
      },
      {
        "slot": 118,
        "skill_id": 200118,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          101,
          131
        ],
        "limits": []
      },
      {
        "slot": 119,
        "skill_id": 200119,
        "name": "『追加ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 588,
            "name": "追加ダメ_乗算",
            "value": 3
          }
        ],
        "requires": [
          115,
          120,
          130
        ],
        "limits": []
      },
      {
        "slot": 120,
        "skill_id": 200120,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 2000
          }
        ],
        "requires": [
          119,
          121
        ],
        "limits": []
      },
      {
        "slot": 121,
        "skill_id": 200121,
        "name": "最大HP[強化]",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 4000
          }
        ],
        "requires": [
          120,
          122
        ],
        "limits": []
      },
      {
        "slot": 122,
        "skill_id": 200122,
        "name": "『強靭な身体』",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 1
          },
          {
            "type": 30,
            "name": "HP",
            "value": 4000
          }
        ],
        "requires": [
          121,
          123
        ],
        "limits": []
      },
      {
        "slot": 123,
        "skill_id": 200123,
        "name": "最大HP(%)[強化]",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 2
          }
        ],
        "requires": [
          122,
          124
        ],
        "limits": []
      },
      {
        "slot": 124,
        "skill_id": 200124,
        "name": "最大HP(%)",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 1
          }
        ],
        "requires": [
          123,
          125
        ],
        "limits": []
      },
      {
        "slot": 125,
        "skill_id": 200125,
        "name": "『完璧主義』",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 2
          },
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 2
          }
        ],
        "requires": [
          124,
          126
        ],
        "limits": []
      },
      {
        "slot": 126,
        "skill_id": 200126,
        "name": "全ステータス(%)[強化]",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 2
          }
        ],
        "requires": [
          125,
          127
        ],
        "limits": []
      },
      {
        "slot": 127,
        "skill_id": 200127,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          }
        ],
        "requires": [
          126,
          128
        ],
        "limits": []
      },
      {
        "slot": 128,
        "skill_id": 200128,
        "name": "『威風堂堂』",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 2
          },
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          127,
          129
        ],
        "limits": []
      },
      {
        "slot": 129,
        "skill_id": 200129,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 500
          }
        ],
        "requires": [
          128,
          130
        ],
        "limits": []
      },
      {
        "slot": 130,
        "skill_id": 200130,
        "name": "全ステータス[強化]",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          119,
          129
        ],
        "limits": []
      },
      {
        "slot": 131,
        "skill_id": 200131,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          118,
          139
        ],
        "limits": []
      },
      {
        "slot": 132,
        "skill_id": 200132,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 20
          }
        ],
        "requires": [
          133
        ],
        "limits": []
      },
      {
        "slot": 133,
        "skill_id": 200133,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          134,
          132
        ],
        "limits": []
      },
      {
        "slot": 134,
        "skill_id": 200134,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          133,
          135
        ],
        "limits": []
      },
      {
        "slot": 135,
        "skill_id": 200135,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          134,
          136,
          139
        ],
        "limits": []
      },
      {
        "slot": 136,
        "skill_id": 200136,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          135,
          137
        ],
        "limits": []
      },
      {
        "slot": 137,
        "skill_id": 200137,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          136,
          138
        ],
        "limits": []
      },
      {
        "slot": 138,
        "skill_id": 200138,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 40
          }
        ],
        "requires": [
          137
        ],
        "limits": []
      },
      {
        "slot": 139,
        "skill_id": 200139,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          135,
          131,
          140
        ],
        "limits": []
      },
      {
        "slot": 140,
        "skill_id": 200140,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          139,
          9
        ],
        "limits": []
      },
      {
        "slot": 141,
        "skill_id": 200141,
        "name": "『先導者』",
        "type": 0,
        "stats": [],
        "requires": [
          142,
          150,
          151
        ],
        "limits": []
      },
      {
        "slot": 142,
        "skill_id": 200142,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          141,
          143
        ],
        "limits": []
      },
      {
        "slot": 143,
        "skill_id": 200143,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          142,
          144
        ],
        "limits": []
      },
      {
        "slot": 144,
        "skill_id": 200144,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          143,
          15,
          145
        ],
        "limits": []
      },
      {
        "slot": 145,
        "skill_id": 200145,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          144,
          146
        ],
        "limits": []
      },
      {
        "slot": 146,
        "skill_id": 200146,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          145,
          147
        ],
        "limits": []
      },
      {
        "slot": 147,
        "skill_id": 200147,
        "name": "『開拓者』",
        "type": 0,
        "stats": [],
        "requires": [
          146,
          155,
          148
        ],
        "limits": []
      },
      {
        "slot": 148,
        "skill_id": 200148,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          147,
          149
        ],
        "limits": []
      },
      {
        "slot": 149,
        "skill_id": 200149,
        "name": "『征服者』",
        "type": 0,
        "stats": [],
        "requires": [
          148,
          150
        ],
        "limits": []
      },
      {
        "slot": 150,
        "skill_id": 200150,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          149,
          141
        ],
        "limits": []
      },
      {
        "slot": 151,
        "skill_id": 200151,
        "name": "最大ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 16
          }
        ],
        "requires": [
          141,
          152
        ],
        "limits": []
      },
      {
        "slot": 152,
        "skill_id": 200152,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          151,
          153
        ],
        "limits": []
      },
      {
        "slot": 153,
        "skill_id": 200153,
        "name": "覚醒石スロット6時最下段",
        "type": 1,
        "stats": [],
        "requires": [
          152,
          154
        ],
        "limits": []
      },
      {
        "slot": 154,
        "skill_id": 200154,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          153,
          155
        ],
        "limits": []
      },
      {
        "slot": 155,
        "skill_id": 200155,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          154,
          147
        ],
        "limits": []
      },
      {
        "slot": 156,
        "skill_id": 200156,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          21,
          157
        ],
        "limits": []
      },
      {
        "slot": 157,
        "skill_id": 200157,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          156,
          257,
          161
        ],
        "limits": []
      },
      {
        "slot": 158,
        "skill_id": 200158,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 20
          }
        ],
        "requires": [
          159
        ],
        "limits": []
      },
      {
        "slot": 159,
        "skill_id": 200159,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          158,
          160
        ],
        "limits": []
      },
      {
        "slot": 160,
        "skill_id": 200160,
        "name": "バックアタックダメージ",
        "type": 0,
        "stats": [
          {
            "type": 494,
            "name": "BA",
            "value": 10
          }
        ],
        "requires": [
          159,
          161
        ],
        "limits": []
      },
      {
        "slot": 161,
        "skill_id": 200161,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          157,
          160,
          162
        ],
        "limits": []
      },
      {
        "slot": 162,
        "skill_id": 200162,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          161,
          163
        ],
        "limits": []
      },
      {
        "slot": 163,
        "skill_id": 200163,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 20
          }
        ],
        "requires": [
          162,
          164
        ],
        "limits": []
      },
      {
        "slot": 164,
        "skill_id": 200164,
        "name": "近距離ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 611,
            "name": "近距離ダメ",
            "value": 40
          }
        ],
        "requires": [
          163
        ],
        "limits": []
      },
      {
        "slot": 165,
        "skill_id": 200165,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          28,
          166
        ],
        "limits": []
      },
      {
        "slot": 166,
        "skill_id": 200166,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          165,
          176,
          173
        ],
        "limits": []
      },
      {
        "slot": 167,
        "skill_id": 200167,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 168,
        "skill_id": 200168,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 169,
        "skill_id": 200169,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 170,
        "skill_id": 200170,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 171,
        "skill_id": 200171,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 172,
        "skill_id": 200172,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 173,
        "skill_id": 200173,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          166,
          174,
          175
        ],
        "limits": []
      },
      {
        "slot": 174,
        "skill_id": 200174,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          173,
          175
        ],
        "limits": []
      },
      {
        "slot": 175,
        "skill_id": 200175,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          174,
          173,
          206
        ],
        "limits": []
      },
      {
        "slot": 176,
        "skill_id": 200176,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          166,
          177
        ],
        "limits": []
      },
      {
        "slot": 177,
        "skill_id": 200177,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          176,
          184,
          183,
          178
        ],
        "limits": []
      },
      {
        "slot": 178,
        "skill_id": 200178,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 500
          }
        ],
        "requires": [
          177,
          179
        ],
        "limits": []
      },
      {
        "slot": 179,
        "skill_id": 200179,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 3
          }
        ],
        "requires": [
          178,
          180
        ],
        "limits": []
      },
      {
        "slot": 180,
        "skill_id": 200180,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 500
          }
        ],
        "requires": [
          179,
          207
        ],
        "limits": []
      },
      {
        "slot": 181,
        "skill_id": 200181,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          207,
          182
        ],
        "limits": []
      },
      {
        "slot": 182,
        "skill_id": 200182,
        "name": "最大HP(%)",
        "type": 0,
        "stats": [
          {
            "type": 31,
            "name": "HP_乗算",
            "value": 5
          }
        ],
        "requires": [
          181,
          183
        ],
        "limits": []
      },
      {
        "slot": 183,
        "skill_id": 200183,
        "name": "最大HP",
        "type": 0,
        "stats": [
          {
            "type": 30,
            "name": "HP",
            "value": 1000
          }
        ],
        "requires": [
          182,
          177
        ],
        "limits": []
      },
      {
        "slot": 184,
        "skill_id": 200184,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          177,
          192
        ],
        "limits": []
      },
      {
        "slot": 185,
        "skill_id": 200185,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 186,
        "skill_id": 200186,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 187,
        "skill_id": 200187,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 188,
        "skill_id": 200188,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 189,
        "skill_id": 200189,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 190,
        "skill_id": 200190,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 191,
        "skill_id": 200191,
        "name": "未使用データ",
        "type": 0,
        "stats": [],
        "requires": [],
        "limits": []
      },
      {
        "slot": 192,
        "skill_id": 200192,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          184,
          193,
          200
        ],
        "limits": []
      },
      {
        "slot": 193,
        "skill_id": 200193,
        "name": "クリティカル",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 1
          },
          {
            "type": 464,
            "name": "クリダメ",
            "value": 4
          }
        ],
        "requires": [
          192,
          194,
          197
        ],
        "limits": []
      },
      {
        "slot": 194,
        "skill_id": 200194,
        "name": "クリティカルダメージ",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 8
          }
        ],
        "requires": [
          193,
          195
        ],
        "limits": []
      },
      {
        "slot": 195,
        "skill_id": 200195,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          194,
          196
        ],
        "limits": []
      },
      {
        "slot": 196,
        "skill_id": 200196,
        "name": "『クリティカルダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 25
          }
        ],
        "requires": [
          195
        ],
        "limits": []
      },
      {
        "slot": 197,
        "skill_id": 200197,
        "name": "クリティカル確率",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 1
          }
        ],
        "requires": [
          193,
          198
        ],
        "limits": []
      },
      {
        "slot": 198,
        "skill_id": 200198,
        "name": "クリティカル確率[強化]",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 2
          }
        ],
        "requires": [
          197,
          199
        ],
        "limits": []
      },
      {
        "slot": 199,
        "skill_id": 200199,
        "name": "『クリティカル確率』",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 3
          }
        ],
        "requires": [
          198
        ],
        "limits": []
      },
      {
        "slot": 200,
        "skill_id": 200200,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          192,
          201
        ],
        "limits": []
      },
      {
        "slot": 201,
        "skill_id": 200201,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          200,
          202,
          210
        ],
        "limits": []
      },
      {
        "slot": 202,
        "skill_id": 200202,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          201,
          203,
          205
        ],
        "limits": []
      },
      {
        "slot": 203,
        "skill_id": 200203,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          202,
          204
        ],
        "limits": []
      },
      {
        "slot": 204,
        "class_skills": {
          "24": {
            "skill_id": 224204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルのクールタイムをテレポートスキルと共有しないように変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→テレポートスキルをバックステップスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281204,
            "name": "『模倣』",
            "description": "【特殊効果】\\n\\n→バックステップスキルをテレポートスキルに変更する\\n→スキルクールタイム：10秒\\n→一般スキルと連携した特殊効果は未適用\\n\\n[204スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [
          203,
          205
        ],
        "limits": []
      },
      {
        "slot": 205,
        "skill_id": 200205,
        "name": "移動速度",
        "type": 0,
        "stats": [
          {
            "type": 106,
            "name": "移動",
            "value": 10
          }
        ],
        "requires": [
          202,
          204
        ],
        "limits": []
      },
      {
        "slot": 206,
        "skill_id": 200206,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          26,
          175,
          207
        ],
        "limits": []
      },
      {
        "slot": 207,
        "skill_id": 200207,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          206,
          208,
          181,
          180
        ],
        "limits": []
      },
      {
        "slot": 208,
        "skill_id": 200208,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          207,
          209
        ],
        "limits": []
      },
      {
        "slot": 209,
        "skill_id": 200209,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          208,
          210
        ],
        "limits": []
      },
      {
        "slot": 210,
        "skill_id": 200210,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          201,
          209,
          211,
          227
        ],
        "limits": []
      },
      {
        "slot": 211,
        "skill_id": 200211,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 10
          }
        ],
        "requires": [
          210,
          227,
          239,
          212
        ],
        "limits": []
      },
      {
        "slot": 212,
        "class_skills": {
          "24": {
            "skill_id": 224212,
            "name": "【スパイラルラッシュ】",
            "description": "▲覚醒スキル▲\\n\\n<スパイラルラッシュ>\\n→より強力な3連続の斬り攻撃を加える\\n→スキル使用時、方向キー(↑、↓)入力で移動距離が変更される\\n→それぞれの動作の攻撃に当たった敵は、追加ダメージ発生\\n→1、2動作：追加ダメージ5回発生、3動作：10回発生\\n\\n[212スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225212,
            "name": "【飛燕破天】",
            "description": "▲覚醒スキル▲\\n\\n<飛燕破天>\\n→飛び回る飛剣を自在に振り回し、空間を一気に制圧する\\n→3段階コンボスキルに変更される\\n→飛燕破天[マスター]の効果で召喚される大剣が強化される\\n→3番目の攻撃使用時、より多くの大剣を召喚する\\n→スキル使用中、敵から受けるダメージ20%減少\\n\\n[212スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226212,
            "name": "【カオスガントレット】",
            "description": "▲覚醒スキル▲\\n\\n<カオスガントレット>\\n→岩のような拳を形象化して打ち下ろす\\n→「カオスガントレット[マスター]」、「カオスガントレット[覚醒]」を影響を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227212,
            "name": "【サイキッククラック】",
            "description": "▲覚醒スキル▲\\n\\n<サイキッククラック>\\n→広い範囲に重力地帯を生成して敵の動きを制限する\\n→敵の移動速度減少効果が、80%減少に強化される\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228212,
            "name": "【デスソウル[リップ]】",
            "description": "▲覚醒スキル▲\\n\\n<デスソウル[リップ]>\\n→死神と共に鎌を振り回して死角のない斬撃を与える\\n→2回連続使用可能\\n→スキル使用時、死神追加召喚\\n→スキル使用中、敵から受けるダメージ20%減少\\n\\n[212スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229212,
            "name": "【ファシナション】",
            "description": "▲覚醒スキル▲\\n\\n<ファシナション>\\n→ピアニストが幻想的な独奏を繰り広げ、観客にリズミカルな演奏を披露する\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230212,
            "name": "【秘技_爆】",
            "description": "▲覚醒スキル▲\\n\\n<秘技_爆>\\n→暗闇の中でローグが跳躍し爆薬を装備した手裏剣を投げる\\n\\n[212スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231212,
            "name": "【アサルトラッシュ】",
            "description": "▲覚醒スキル▲\\n\\n<アサルトラッシュ>\\n→ショットガン弾丸を撃ちながら跳躍したあと、前方に移動しながらライン上の敵を斬り上げる\\n→2段階コンボスキルに変更される\\n→スキル使用時、方向キー(↑)入力でショットガン射撃、方向キー(↓)入力で突進斬りを使用可能\\n→スタン持続時間が1.5秒に減少\\n→すべての打撃にスタン効果が適用される\\n→「ガンマスター」、「ブレイドマスター」効果が同時に適用される(敵移動速度減少効果を除く)\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n\\n[212スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232212,
            "name": "【イノベーション】",
            "description": "▲覚醒スキル▲\\n\\n<イノベーション>\\n→DS-BGの召喚数が1つに減少する\\n→2回使用時、DS-EM760を召喚\\n\\n[212スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236212,
            "name": "【十字切り&槍龍風】",
            "description": "▲覚醒スキル▲\\n\\n<十字切り>\\n→両手剣に気を注ぎ込み無作為に斬りながら放出する\\n→剣技召喚\\n→スキル使用時、方向キー(↑、↓)入力で剣技の速度調整可能\\n→剣技の攻撃に当たった敵は、2秒間移動速度80%減少\\n→スキル使用中、受けるダメージ20%減少\\n\\n<槍龍風>\\n→地盤を崩すほどの回転力を利用した強化された槍龍風\\n→破壊された地盤が敵にダメージを与える\\n→スキル使用中、受けるダメージ減少効果が20%に強化される\\n\\n[212スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237212,
            "name": "【スピリット】",
            "description": "▲覚醒スキル▲\\n\\n<スピリット>\\n→猛烈な気勢の刺し攻撃と共に突進する技\\n→スキル使用中、敵から受けるダメージ20%減少\\n→最初の攻撃に当たった敵は、追加ダメージ10回発生\\n→2番目の攻撃に竜巻召喚\\n\\n[212スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238212,
            "name": "【ガードラッシュ&ダブルヒット】",
            "description": "▲覚醒スキル▲\\n\\n<ガードラッシュ>\\n→光の力を込めてより速く突進する\\n→突進経路に光の道召喚\\n→デバインガードのダメージ減少効果が20%に強化される\\n\\n<ダブルヒット>\\n→2段階コンボ攻撃に変更される\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→発生したダメージの0.1%をHPとして吸収\\n→スキルクールタイム8秒に増加\\n\\n[212スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239212,
            "name": "【エネルギー波】",
            "description": "▲覚醒スキル▲\\n\\n<エネルギー波>\\n→両手に集めた気を一つに合わせて強力なエネルギーの形で発散する\\n→移動速度減少効果が、2秒間スタン効果に変更される\\n→スキル使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240212,
            "name": "【セスティナ】",
            "description": "▲覚醒スキル▲\\n\\n<セスティナ>\\n→鋭い氷の結晶で敵を制圧する\\n→2段階コンボスキルに変更される\\n→スキル使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→1動作：攻撃が当たった敵はウォータードロップ効果(3秒間追加ダメージ10回発生)適用\\n→2動作：ウォータードロップ効果が発動し、短い時間に追加ダメージを10回素早く発生させる\\n→ウォータードロップ効果を持つ敵を打撃時、2.5秒間スタン効果適用\\n\\n[212スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241212,
            "name": "【メガデス】",
            "description": "▲覚醒スキル▲\\n\\n<メガデス>\\n\\n[戦闘]\\n→前方に強力な音波攻撃を撃つ\\n→2段階コンボ攻撃に変更される\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→発生したダメージの0.1%をHPとして吸収\\n→前方に移動する音波を召喚\\n\\n[支援]\\n→自分とパーティーメンバーの一般/ボスモンスターダメージをレベル毎に1%ずつ増加させる\\n\\n[212スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242212,
            "name": "【ダークプレニック&バックステップアロー&リミッター解除】",
            "description": "▲覚醒スキル▲\\n\\n<ダークプレニック>\\n→毒霧の中に身を隠し、敵を斬り上げる\\n→スキル使用時、最大HPの50%+スキルレベル毎に10%に該当する値をシールドとして生成\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n<バックステップアロー>\\n→素早い動作で回避と同時に射撃する技\\n→3段階コンボ攻撃に変更される\\n→スキル使用時、方向キー(↑)入力で跳躍射撃に変更(最大2回使用可能)、方向キー(↓)入力で後方のより遠い距離を移動しながら射撃する\\n→2番目、3番目の動作に爆破矢を追加射撃する\\n→スキルクールタイムが4秒に変更される\\n\\n<リミッター解除>\\n→ロープに乗って飛び上がって空中から爆薬ボルトを乱射する\\n→キー入力維持時、最大3回連続使用可能\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243212,
            "name": "【ステップバック】",
            "description": "▲覚醒スキル▲\\n\\n<ステップバック>\\n→より素早くなった動作で敵の攻撃を回避した後、攻撃する\\n→弾丸の軌跡の周りに追加爆発が発生する\\n\\n[212スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244212,
            "name": "【ガエボルグⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<ガエボルグⅡ>\\n→無数のレザーロボットを呼び出して無差別レザー爆撃を加える\\n→装甲展開の受けるダメージ減少効果がスキルレベル毎に2%に増加\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245212,
            "name": "【スウィフトソウル】",
            "description": "▲覚醒スキル▲\\n\\n<スウィフトソウル>\\n→マルパスの力を受けて前方の敵を攻撃する\\n→スキル使用中、敵から受けるダメージ20%減少\\n→マルパスの羽追加召喚\\n\\n[212スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249212,
            "name": "【ワイルドカード】",
            "description": "▲覚醒スキル▲\\n\\n<ワイルドカード>\\n→カードに宿った魔力を一気に放出する\\n→スキル使用時、方向キー(↑、↓)入力で後方に移動する\\n→動作毎にカードを追加召喚(3番目の動作から2つ召喚)\\n→発生したダメージの0.1%をHPとして吸収\\n→攻撃が当たった敵は、1秒間束縛\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252212,
            "name": "【[▲]スペシャルキック】",
            "description": "▲覚醒スキル▲\\n\\n<[▲]スペシャルキック>\\n→マナカードを活用した華麗な足蹴り攻撃\\n→シールド効果が動作毎に適用される\\n→3番目の動作にエレメンタルカードを追加召喚\\n\\n[212スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256212,
            "name": "【破壊の影&影暗襲】",
            "description": "▲覚醒スキル▲\\n\\n<破壊の影>\\n→影の中から姿を現した破壊の魔獣が影で敵を包む\\n→破壊の影[強化]が召喚数を増やさない代わり、スタン時間を2秒に強化\\n\\n<影暗襲>\\n→影でより鋭く剣を研ぎすました後、素早く貫く\\n→最大チャージ段階が2段階に変更される\\n→2チャージ攻撃時、敵を1.5秒間スタンさせて、影割りを追加で召喚する\\n→スキル使用中、受けるダメージ20%減少\\n\\n[212スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260212,
            "name": "【クレンテ】",
            "description": "▲覚醒スキル▲\\n\\n<クレンテ>\\n\\n[神聖態勢]\\n→強化された光の地帯を召喚する\\n→スキル使用中、ノックバック効果を受けない\\n\\n[憤怒態勢]\\n→前方の敵を無作為に叩く\\n→スキル使用中、ノックバック効果を受けない\\n→スキル使用中、敵から受けるダメージ20%減少\\n→攻撃成功時、発生したダメージの0.1%の値を自分のHPとして吸収する\\n→連続2回使用可能\\n→クレンテ残像追加召喚\\n\\n[212スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264212,
            "name": "【ギガンティックバースト】",
            "description": "▲覚醒スキル▲\\n\\n<ギガンティックバースト>\\n→前方に突進してギガントポールを加速させて強く打ち上げる\\n→2段階コンボスキルに変更される\\n\\n[212スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268212,
            "name": "【チェーンウィップ】",
            "description": "▲覚醒スキル▲\\n\\n<チェーンウィップ>\\n→空中に跳躍した後、地上に向けてチェーンソードを振り回す\\n\\n[212スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269212,
            "name": "【フェニックス[レインボー]】",
            "description": "▲覚醒スキル▲\\n\\n<フェニックス[レインボー]>\\n→フェニックスに体を任せ、上空に飛びながら宝石の破片をまき散らす\\n→3段階コンボスキルに変更される\\n→2、3コンボに大型ダイヤモンドを追加召喚(ガーネット、アメシスト破片の効果を削除)\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n→被ダメージ中、使用可能\\n→スキル使用時、方向キー(↑,↓)入力で移動距離およびジャンプの高さ変更可能\\n\\n[212スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273212,
            "name": "【ダークバースト】",
            "description": "▲覚醒スキル▲\\n\\n<ダークバースト>\\n\\n《マジックランス》\\n→跳躍しながら敵を斬り上げた後、強く打ち下ろす\\n→3段階コンボスキルに変更される\\n→ダークバースト[マスター]のシールド効果が最大HPの100%に強化される\\n→スキル使用中、敵から受けるダメージ20%減少\\n\\n《ヘビーランス》\\n→打撃回数増加\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274212,
            "name": "【ゲール:獲得】",
            "description": "▲覚醒スキル▲\\n\\n<ゲール:獲得>\\n→周りの風を集めた後、放出する\\n→2段階コンボスキルに変更される\\n→敵移動速度減少効果が束縛効果に変更される\\n→与えたダメージの0.1%をHPとして吸収\\n→スキル使用中、受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275212,
            "name": "【ウォーターキャノン】",
            "description": "▲覚醒スキル▲\\n\\n<ウォーターキャノン>\\n→傘に強力な暴風の力を込めて前方に水を発射する\\n→スキル使用中、敵から受けるダメージ20%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[212スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278212,
            "name": "【ミスティックゲート】",
            "description": "▲覚醒スキル▲\\n\\n<ミスティックゲート>\\n→ゲートの向こうの世界で未知のものをぶち撒けて焦土化させる\\n→最後の爆破攻撃に当たった敵は1秒間スタン\\n→被ダメージ中、使用可能\\n\\n【ゲート通過効果】\\n→スキル使用中、敵から受けるダメージ20%減少\\n※ゲート通過後、1秒以内に使用した場合に適用される\\n\\n[212スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281212,
            "name": "【渦流斬り】",
            "description": "▲覚醒スキル▲\\n\\n<渦流斬り>\\n→波のような動きで広い範囲を襲う抜剣術\\n→被ダメージ中、使用可能\\n\\n[212スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [
          211
        ],
        "limits": []
      },
      {
        "slot": 213,
        "class_skills": {
          "24": {
            "skill_id": 224213,
            "name": "[未使用]ハイランダー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225213,
            "name": "[未使用]ソードダンサー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226213,
            "name": "[未使用]ダークナイト今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227213,
            "name": "[未使用]サイキッカー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228213,
            "name": "[未使用]ファントムメイジ今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229213,
            "name": "[未使用]マエストロ今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230213,
            "name": "[未使用]ローグマスター今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231213,
            "name": "[未使用]ジャッジメント今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232213,
            "name": "[未使用]スターシーカー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236213,
            "name": "[未使用]デストロイヤー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237213,
            "name": "[未使用]フェイタルブレイド今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238213,
            "name": "[未使用]ホーリーセイバー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239213,
            "name": "[未使用]セフィロト今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240213,
            "name": "[未使用]アークメイジ今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241213,
            "name": "[未使用]グランシンフォニア今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242213,
            "name": "[未使用]ウィンドストーカー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243213,
            "name": "[未使用]フライシュッツ今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244213,
            "name": "[未使用]マニピュレーター今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245213,
            "name": "[未使用]ソウルテイカー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249213,
            "name": "[未使用]アークマスター今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252213,
            "name": "[未使用]フォースマスター今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256213,
            "name": "[未使用]ブラックソード今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260213,
            "name": "[未使用]デミゴッド今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264213,
            "name": "[未使用]アグニ今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268213,
            "name": "[未使用]ダークチェイサー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269213,
            "name": "[未使用]ジュエルスター今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273213,
            "name": "[未使用]シャドウウォーカー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274213,
            "name": "[未使用]ウィンディア今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275213,
            "name": "[未使用]レイニア今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278213,
            "name": "[未使用]ゲートキーパー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281213,
            "name": "[未使用]スターセイバー今後使用予定",
            "description": "[213スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [],
        "limits": []
      },
      {
        "slot": 214,
        "skill_id": 200214,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          24,
          221,
          215
        ],
        "limits": []
      },
      {
        "slot": 215,
        "skill_id": 200215,
        "name": "モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          },
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          214,
          216,
          220
        ],
        "limits": []
      },
      {
        "slot": 216,
        "skill_id": 200216,
        "name": "ボスモンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          215,
          217
        ],
        "limits": []
      },
      {
        "slot": 217,
        "skill_id": 200217,
        "name": "ボスモンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 571,
            "name": "ボス追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          216,
          218
        ],
        "limits": []
      },
      {
        "slot": 218,
        "skill_id": 200218,
        "name": "『支配力』",
        "type": 0,
        "stats": [
          {
            "type": 573,
            "name": "一般支配",
            "value": 10
          },
          {
            "type": 574,
            "name": "ボス支配",
            "value": 10
          }
        ],
        "requires": [
          217,
          219
        ],
        "limits": []
      },
      {
        "slot": 219,
        "skill_id": 200219,
        "name": "一般モンスターダメージ(%)",
        "type": 0,
        "stats": [
          {
            "type": 567,
            "name": "一般追加ダメ_乗算",
            "value": 1
          }
        ],
        "requires": [
          218,
          220
        ],
        "limits": []
      },
      {
        "slot": 220,
        "skill_id": 200220,
        "name": "一般モンスターダメージ",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 3000
          }
        ],
        "requires": [
          219,
          215
        ],
        "limits": []
      },
      {
        "slot": 221,
        "skill_id": 200221,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          214,
          226,
          222
        ],
        "limits": []
      },
      {
        "slot": 222,
        "skill_id": 200222,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          221,
          223,
          225
        ],
        "limits": []
      },
      {
        "slot": 223,
        "skill_id": 200223,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          222,
          224
        ],
        "limits": []
      },
      {
        "slot": 224,
        "skill_id": 200224,
        "name": "『貫通力』",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 6
          }
        ],
        "requires": [
          223,
          225
        ],
        "limits": []
      },
      {
        "slot": 225,
        "skill_id": 200225,
        "name": "貫通力",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 3
          }
        ],
        "requires": [
          222,
          224
        ],
        "limits": []
      },
      {
        "slot": 226,
        "skill_id": 200226,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          221,
          227
        ],
        "limits": []
      },
      {
        "slot": 227,
        "skill_id": 200227,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          210,
          226,
          211,
          244
        ],
        "limits": []
      },
      {
        "slot": 228,
        "skill_id": 200228,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          24,
          229,
          237
        ],
        "limits": []
      },
      {
        "slot": 229,
        "skill_id": 200229,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          228,
          230,
          231
        ],
        "limits": []
      },
      {
        "slot": 230,
        "skill_id": 200230,
        "name": "『[初級]スキルレベル』",
        "type": 0,
        "stats": [
          {
            "type": 643,
            "name": "スキルLv初級",
            "value": 1
          }
        ],
        "requires": [
          229
        ],
        "limits": []
      },
      {
        "slot": 231,
        "skill_id": 200231,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          229,
          232,
          233
        ],
        "limits": []
      },
      {
        "slot": 232,
        "skill_id": 200232,
        "name": "『[中級]スキルレベル』",
        "type": 0,
        "stats": [
          {
            "type": 644,
            "name": "スキルLv中級",
            "value": 1
          }
        ],
        "requires": [
          231
        ],
        "limits": []
      },
      {
        "slot": 233,
        "skill_id": 200233,
        "name": "スキルクールタイム",
        "type": 0,
        "stats": [
          {
            "type": 440,
            "name": "CT減少",
            "value": 20
          }
        ],
        "requires": [
          231,
          234,
          235
        ],
        "limits": []
      },
      {
        "slot": 234,
        "skill_id": 200234,
        "name": "『スキルクールタイム』",
        "type": 0,
        "stats": [
          {
            "type": 440,
            "name": "CT減少",
            "value": 40
          }
        ],
        "requires": [
          233
        ],
        "limits": []
      },
      {
        "slot": 235,
        "skill_id": 200235,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          233,
          237,
          236
        ],
        "limits": []
      },
      {
        "slot": 236,
        "skill_id": 200236,
        "name": "『[最上級]スキルレベル』",
        "type": 0,
        "stats": [
          {
            "type": 646,
            "name": "スキルLv最上級",
            "value": 1
          }
        ],
        "requires": [
          235
        ],
        "limits": []
      },
      {
        "slot": 237,
        "skill_id": 200237,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 5
          }
        ],
        "requires": [
          235,
          228,
          238
        ],
        "limits": []
      },
      {
        "slot": 238,
        "skill_id": 200238,
        "name": "『[上級]スキルレベル』",
        "type": 0,
        "stats": [
          {
            "type": 645,
            "name": "スキルLv上級",
            "value": 1
          }
        ],
        "requires": [
          237
        ],
        "limits": []
      },
      {
        "slot": 239,
        "skill_id": 200239,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          211,
          240,
          243,
          242
        ],
        "limits": []
      },
      {
        "slot": 240,
        "skill_id": 200240,
        "name": "ボスモンスターダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 570,
            "name": "ボス追加ダメ",
            "value": 8000
          }
        ],
        "requires": [
          239,
          241
        ],
        "limits": []
      },
      {
        "slot": 241,
        "skill_id": 200241,
        "name": "追加ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 2000
          }
        ],
        "requires": [
          240,
          242,
          243,
          245
        ],
        "limits": []
      },
      {
        "slot": 242,
        "skill_id": 200242,
        "name": "一般モンスターダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 566,
            "name": "一般追加ダメ",
            "value": 8000
          }
        ],
        "requires": [
          239,
          241
        ],
        "limits": []
      },
      {
        "slot": 243,
        "skill_id": 200243,
        "name": "追加ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 496,
            "name": "追加ダメ",
            "value": 4000
          }
        ],
        "requires": [
          239,
          241
        ],
        "limits": []
      },
      {
        "slot": 244,
        "skill_id": 200244,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          227,
          257
        ],
        "limits": []
      },
      {
        "slot": 245,
        "skill_id": 200245,
        "name": "『追加ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 588,
            "name": "追加ダメ_乗算",
            "value": 3
          }
        ],
        "requires": [
          241,
          246,
          256
        ],
        "limits": []
      },
      {
        "slot": 246,
        "skill_id": 200246,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          245,
          247
        ],
        "limits": []
      },
      {
        "slot": 247,
        "skill_id": 200247,
        "name": "筋力および魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          246,
          248
        ],
        "limits": []
      },
      {
        "slot": 248,
        "skill_id": 200248,
        "name": "『威圧』",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          },
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          247,
          249
        ],
        "limits": []
      },
      {
        "slot": 249,
        "skill_id": 200249,
        "name": "筋力および魔法力(%)[強化]",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 2
          }
        ],
        "requires": [
          248,
          250
        ],
        "limits": []
      },
      {
        "slot": 250,
        "skill_id": 200250,
        "name": "筋力および魔法力(%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          249,
          251
        ],
        "limits": []
      },
      {
        "slot": 251,
        "skill_id": 200251,
        "name": "『暴君』",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 2
          },
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 2
          }
        ],
        "requires": [
          250,
          252
        ],
        "limits": []
      },
      {
        "slot": 252,
        "skill_id": 200252,
        "name": "武器攻撃力&属性力(%)",
        "type": 0,
        "stats": [
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 2
          }
        ],
        "requires": [
          251,
          253
        ],
        "limits": []
      },
      {
        "slot": 253,
        "skill_id": 200253,
        "name": "武器攻撃力&属性力(%)",
        "type": 0,
        "stats": [
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 1
          }
        ],
        "requires": [
          252,
          254
        ],
        "limits": []
      },
      {
        "slot": 254,
        "skill_id": 200254,
        "name": "『鋭さ』",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          },
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 1
          }
        ],
        "requires": [
          253,
          255
        ],
        "limits": []
      },
      {
        "slot": 255,
        "skill_id": 200255,
        "name": "武器攻撃力&属性力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          254,
          256
        ],
        "limits": []
      },
      {
        "slot": 256,
        "skill_id": 200256,
        "name": "武器攻撃力&属性力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          }
        ],
        "requires": [
          255,
          245
        ],
        "limits": []
      },
      {
        "slot": 257,
        "skill_id": 200257,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          244,
          157
        ],
        "limits": []
      },
      {
        "slot": 258,
        "skill_id": 200258,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          1,
          259,
          262,
          265
        ],
        "limits": []
      },
      {
        "slot": 259,
        "skill_id": 200259,
        "name": "筋力および魔法力[強化]",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 2000
          }
        ],
        "requires": [
          258,
          260
        ],
        "limits": []
      },
      {
        "slot": 260,
        "skill_id": 200260,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          259,
          261
        ],
        "limits": []
      },
      {
        "slot": 261,
        "skill_id": 200261,
        "name": "全ステータス[強化]",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          260,
          262
        ],
        "limits": []
      },
      {
        "slot": 262,
        "skill_id": 200262,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          261,
          258
        ],
        "limits": []
      },
      {
        "slot": 263,
        "skill_id": 200263,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          3,
          264
        ],
        "limits": []
      },
      {
        "slot": 264,
        "skill_id": 200264,
        "name": "筋力および魔法力(%)",
        "type": 0,
        "stats": [
          {
            "type": 595,
            "name": "筋力魔力_乗算",
            "value": 1
          }
        ],
        "requires": [
          263,
          265
        ],
        "limits": []
      },
      {
        "slot": 265,
        "skill_id": 200265,
        "name": "筋力および魔法力",
        "type": 0,
        "stats": [
          {
            "type": 594,
            "name": "筋力魔力",
            "value": 500
          }
        ],
        "requires": [
          264,
          266,
          258,
          268
        ],
        "limits": []
      },
      {
        "slot": 266,
        "skill_id": 200266,
        "name": "全ステータス(%)",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 1
          }
        ],
        "requires": [
          265,
          267
        ],
        "limits": []
      },
      {
        "slot": 267,
        "skill_id": 200267,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 250
          }
        ],
        "requires": [
          266,
          27
        ],
        "limits": []
      },
      {
        "slot": 268,
        "skill_id": 200268,
        "name": "最小ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 10
          }
        ],
        "requires": [
          265,
          269
        ],
        "limits": []
      },
      {
        "slot": 269,
        "skill_id": 200269,
        "name": "最小ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 462,
            "name": "最小",
            "value": 20
          }
        ],
        "requires": [
          268,
          270
        ],
        "limits": []
      },
      {
        "slot": 270,
        "skill_id": 200270,
        "name": "『最小ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 590,
            "name": "最小_乗算",
            "value": 3
          }
        ],
        "requires": [
          269,
          271
        ],
        "limits": []
      },
      {
        "slot": 271,
        "skill_id": 200271,
        "name": "最小/最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 585,
            "name": "最大最小",
            "value": 8
          }
        ],
        "requires": [
          270,
          272
        ],
        "limits": []
      },
      {
        "slot": 272,
        "skill_id": 200272,
        "name": "最大ダメージ",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 8
          }
        ],
        "requires": [
          271,
          273
        ],
        "limits": []
      },
      {
        "slot": 273,
        "skill_id": 200273,
        "name": "覚醒石スロットセンター9時",
        "type": 1,
        "stats": [],
        "requires": [
          272,
          274
        ],
        "limits": []
      },
      {
        "slot": 274,
        "skill_id": 200274,
        "name": "最大ダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 461,
            "name": "最大",
            "value": 16
          }
        ],
        "requires": [
          273,
          275
        ],
        "limits": []
      },
      {
        "slot": 275,
        "skill_id": 200275,
        "name": "『最大ダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 591,
            "name": "最大_乗算",
            "value": 3
          }
        ],
        "requires": [
          274,
          276
        ],
        "limits": []
      },
      {
        "slot": 276,
        "skill_id": 200276,
        "name": "クリティカルダメージ[強化]",
        "type": 0,
        "stats": [
          {
            "type": 464,
            "name": "クリダメ",
            "value": 16
          }
        ],
        "requires": [
          275,
          277
        ],
        "limits": []
      },
      {
        "slot": 277,
        "skill_id": 200277,
        "name": "『クリティカルダメージ』",
        "type": 0,
        "stats": [
          {
            "type": 592,
            "name": "クリダメ_乗算",
            "value": 3
          }
        ],
        "requires": [
          276,
          278
        ],
        "limits": []
      },
      {
        "slot": 278,
        "skill_id": 200278,
        "name": "覚醒石スロットセンター",
        "type": 1,
        "stats": [],
        "requires": [
          277
        ],
        "limits": []
      },
      {
        "slot": 279,
        "skill_id": 200279,
        "name": "『命中率』",
        "type": 0,
        "stats": [
          {
            "type": 466,
            "name": "命中率",
            "value": 20
          }
        ],
        "requires": [
          4
        ],
        "limits": []
      },
      {
        "slot": 280,
        "skill_id": 200280,
        "name": "『貫通力』",
        "type": 0,
        "stats": [
          {
            "type": 463,
            "name": "貫通",
            "value": 15
          }
        ],
        "requires": [
          26
        ],
        "limits": []
      },
      {
        "slot": 281,
        "skill_id": 200281,
        "name": "未使用データ",
        "type": 1,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [
          7
        ],
        "limits": []
      },
      {
        "slot": 282,
        "skill_id": 200282,
        "name": "『スキルマスター』",
        "type": 0,
        "stats": [
          {
            "type": 614,
            "name": "タゲ数",
            "value": 1
          }
        ],
        "requires": [
          8
        ],
        "limits": []
      },
      {
        "slot": 283,
        "skill_id": 200283,
        "name": "全ステータス",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 500
          }
        ],
        "requires": [
          13,
          286,
          284
        ],
        "limits": []
      },
      {
        "slot": 284,
        "skill_id": 200284,
        "name": "全ステータス[強化]",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          283,
          285
        ],
        "limits": []
      },
      {
        "slot": 285,
        "skill_id": 200285,
        "name": "『全ステータス』",
        "type": 0,
        "stats": [
          {
            "type": 456,
            "name": "全ステ%",
            "value": 3
          }
        ],
        "requires": [
          284,
          286
        ],
        "limits": []
      },
      {
        "slot": 286,
        "skill_id": 200286,
        "name": "全ステータス[強化]",
        "type": 0,
        "stats": [
          {
            "type": 455,
            "name": "全ステ",
            "value": 1000
          }
        ],
        "requires": [
          285,
          283
        ],
        "limits": []
      },
      {
        "slot": 287,
        "skill_id": 200287,
        "name": "武器攻撃力&属性力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 10
          }
        ],
        "requires": [
          17,
          288,
          290
        ],
        "limits": []
      },
      {
        "slot": 288,
        "skill_id": 200288,
        "name": "武器攻撃力&属性力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          }
        ],
        "requires": [
          287,
          289
        ],
        "limits": []
      },
      {
        "slot": 289,
        "skill_id": 200289,
        "name": "『武器攻撃力&属性力』",
        "type": 0,
        "stats": [
          {
            "type": 587,
            "name": "武器属性_乗算",
            "value": 3
          }
        ],
        "requires": [
          288,
          290
        ],
        "limits": []
      },
      {
        "slot": 290,
        "skill_id": 200290,
        "name": "武器攻撃力&属性力",
        "type": 0,
        "stats": [
          {
            "type": 586,
            "name": "武器属性",
            "value": 20
          }
        ],
        "requires": [
          289,
          287
        ],
        "limits": []
      },
      {
        "slot": 291,
        "skill_id": 200291,
        "name": "未使用データ",
        "type": 1,
        "stats": [
          {
            "type": 128,
            "name": "Ely獲得量",
            "value": 1
          }
        ],
        "requires": [
          23
        ],
        "limits": []
      },
      {
        "slot": 292,
        "skill_id": 200292,
        "name": "『クリティカル確率』",
        "type": 0,
        "stats": [
          {
            "type": 465,
            "name": "クリ率",
            "value": 3
          }
        ],
        "requires": [
          22
        ],
        "limits": []
      },
      {
        "slot": 293,
        "class_skills": {
          "24": {
            "skill_id": 224293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n→最初の攻撃が当たった敵への強力な出血効果は適用されない\\n\\n[293スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281293,
            "name": "【コアⅠ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅠ>\\n→覚醒したコアⅠスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[293スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [
          10
        ],
        "limits": []
      },
      {
        "slot": 294,
        "class_skills": {
          "24": {
            "skill_id": 224294,
            "name": "[未使用]ハイランダー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225294,
            "name": "[未使用]ソードダンサー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226294,
            "name": "[未使用]ダークナイト今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227294,
            "name": "[未使用]サイキッカー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228294,
            "name": "[未使用]ファントムメイジ今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229294,
            "name": "[未使用]マエストロ今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230294,
            "name": "[未使用]ローグマスター今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231294,
            "name": "[未使用]ジャッジメント今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232294,
            "name": "[未使用]スターシーカー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236294,
            "name": "[未使用]デストロイヤー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237294,
            "name": "[未使用]フェイタルブレイド今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238294,
            "name": "[未使用]ホーリーセイバー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239294,
            "name": "[未使用]セフィロト今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240294,
            "name": "[未使用]アークメイジ今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241294,
            "name": "[未使用]グランシンフォニア今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242294,
            "name": "[未使用]ウィンドストーカー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243294,
            "name": "[未使用]フライシュッツ今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244294,
            "name": "[未使用]マニピュレーター今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245294,
            "name": "[未使用]ソウルテイカー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249294,
            "name": "[未使用]アークマスター今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252294,
            "name": "[未使用]フォースマスター今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256294,
            "name": "[未使用]ブラックソード今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260294,
            "name": "[未使用]デミゴッド今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264294,
            "name": "[未使用]アグニ今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268294,
            "name": "[未使用]ダークチェイサー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269294,
            "name": "[未使用]ジュエルスター今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273294,
            "name": "[未使用]シャドウウォーカー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274294,
            "name": "[未使用]ウィンディア今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275294,
            "name": "[未使用]レイニア今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278294,
            "name": "[未使用]ゲートキーパー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281294,
            "name": "[未使用]スターセイバー今後使用予定",
            "description": "[294スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [],
        "limits": []
      },
      {
        "slot": 295,
        "class_skills": {
          "24": {
            "skill_id": 224295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "25": {
            "skill_id": 225295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "26": {
            "skill_id": 226295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "27": {
            "skill_id": 227295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "28": {
            "skill_id": 228295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "29": {
            "skill_id": 229295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "30": {
            "skill_id": 230295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "31": {
            "skill_id": 231295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "32": {
            "skill_id": 232295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "36": {
            "skill_id": 236295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→攻撃が当たった敵に追加ダメージ10回発生\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "37": {
            "skill_id": 237295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "38": {
            "skill_id": 238295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキル使用中、ノックバック効果を受けない\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→周りのキャラクターに与える効果が強化される\\n→シールド効果が最大HPの150%に強化される\\n→受けるダメージ減少効果が20%に強化される\\n\\n[295スロット]",
            "stats": []
          },
          "39": {
            "skill_id": 239295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "40": {
            "skill_id": 240295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "41": {
            "skill_id": 241295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "42": {
            "skill_id": 242295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "43": {
            "skill_id": 243295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "44": {
            "skill_id": 244295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "45": {
            "skill_id": 245295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "49": {
            "skill_id": 249295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "52": {
            "skill_id": 252295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→エレメンタル、ダークネス、マナーカードのうち、一つの属性のハリケーンを召喚\\n→エレメンタルカード：ターゲット数+2\\n→ダークネスカード：攻撃が当たった敵は1.5秒間束縛\\n→マナカード:攻撃が当たった敵は、1.5秒間移動速度90%減少\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "56": {
            "skill_id": 256295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "60": {
            "skill_id": 260295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "64": {
            "skill_id": 264295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "68": {
            "skill_id": 268295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "69": {
            "skill_id": 269295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→キーを押し続けることで最大2回連続使用可能\\n→スキルダメージ強化\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "73": {
            "skill_id": 273295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "74": {
            "skill_id": 274295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "75": {
            "skill_id": 275295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "78": {
            "skill_id": 278295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→召喚オブジェクトの能力値がレベル毎に1%ずつ増加されるように変更(ただし、基本能力値がキャラクター能力値の80%から始まる)\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          },
          "81": {
            "skill_id": 281295,
            "name": "【コアⅡ】",
            "description": "▲覚醒スキル▲\\n\\n<コアⅡ>\\n→覚醒したコアⅡスキルを使用して敵を制圧する\\n→スキルダメージ強化\\n→スキル使用中、ノックバック効果を受けない\\n\\n[295スロット]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [
          20
        ],
        "limits": []
      },
      {
        "slot": 296,
        "class_skills": {
          "24": {
            "skill_id": 224296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "25": {
            "skill_id": 225296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "26": {
            "skill_id": 226296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "27": {
            "skill_id": 227296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "28": {
            "skill_id": 228296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "29": {
            "skill_id": 229296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "30": {
            "skill_id": 230296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "31": {
            "skill_id": 231296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "32": {
            "skill_id": 232296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "36": {
            "skill_id": 236296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "37": {
            "skill_id": 237296,
            "name": "[???] ?? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "38": {
            "skill_id": 238296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "39": {
            "skill_id": 239296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "40": {
            "skill_id": 240296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "41": {
            "skill_id": 241296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "42": {
            "skill_id": 242296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "43": {
            "skill_id": 243296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "44": {
            "skill_id": 244296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "45": {
            "skill_id": 245296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "49": {
            "skill_id": 249296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "52": {
            "skill_id": 252296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "56": {
            "skill_id": 256296,
            "name": "[???] ?? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "60": {
            "skill_id": 260296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "64": {
            "skill_id": 264296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "68": {
            "skill_id": 268296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "69": {
            "skill_id": 269296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "73": {
            "skill_id": 273296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "74": {
            "skill_id": 274296,
            "name": "[???] ??? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "75": {
            "skill_id": 275296,
            "name": "[???] ???? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "78": {
            "skill_id": 278296,
            "name": "[???] ????? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          },
          "81": {
            "skill_id": 281296,
            "name": "[???] ?? ?? ??",
            "description": "[ 296 ?? ]",
            "stats": []
          }
        },
        "type": 0,
        "requires": [],
        "limits": []
      }
    ],
    "coords": {
      "1": {
        "x": 942,
        "y": 80,
        "width": 56,
        "height": 60
      },
      "2": {
        "x": 894,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "3": {
        "x": 850,
        "y": 250,
        "width": 26,
        "height": 28
      },
      "4": {
        "x": 791,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "5": {
        "x": 720,
        "y": 476,
        "width": 26,
        "height": 28
      },
      "6": {
        "x": 649,
        "y": 601,
        "width": 26,
        "height": 28
      },
      "7": {
        "x": 593,
        "y": 696,
        "width": 26,
        "height": 28
      },
      "8": {
        "x": 548,
        "y": 774,
        "width": 26,
        "height": 28
      },
      "9": {
        "x": 499,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "10": {
        "x": 459,
        "y": 917,
        "width": 36,
        "height": 38
      },
      "11": {
        "x": 580,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "12": {
        "x": 677,
        "y": 819,
        "width": 26,
        "height": 28
      },
      "13": {
        "x": 763,
        "y": 779,
        "width": 26,
        "height": 28
      },
      "14": {
        "x": 860,
        "y": 733,
        "width": 26,
        "height": 28
      },
      "15": {
        "x": 957,
        "y": 692,
        "width": 26,
        "height": 28
      },
      "16": {
        "x": 1054,
        "y": 733,
        "width": 26,
        "height": 28
      },
      "17": {
        "x": 1151,
        "y": 779,
        "width": 26,
        "height": 28
      },
      "18": {
        "x": 1237,
        "y": 819,
        "width": 26,
        "height": 28
      },
      "19": {
        "x": 1334,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "20": {
        "x": 1445,
        "y": 917,
        "width": 36,
        "height": 38
      },
      "21": {
        "x": 1415,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "22": {
        "x": 1366,
        "y": 774,
        "width": 26,
        "height": 28
      },
      "23": {
        "x": 1321,
        "y": 696,
        "width": 26,
        "height": 28
      },
      "24": {
        "x": 1265,
        "y": 601,
        "width": 26,
        "height": 28
      },
      "25": {
        "x": 1194,
        "y": 476,
        "width": 26,
        "height": 28
      },
      "26": {
        "x": 1123,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "27": {
        "x": 1064,
        "y": 250,
        "width": 26,
        "height": 28
      },
      "28": {
        "x": 1020,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "29": {
        "x": 814,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "30": {
        "x": 734,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "37": {
        "x": 756,
        "y": 220,
        "width": 36,
        "height": 38
      },
      "38": {
        "x": 799,
        "y": 265,
        "width": 26,
        "height": 28
      },
      "39": {
        "x": 738,
        "y": 294,
        "width": 36,
        "height": 38
      },
      "40": {
        "x": 665,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "41": {
        "x": 596,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "42": {
        "x": 620,
        "y": 218,
        "width": 26,
        "height": 28
      },
      "43": {
        "x": 634,
        "y": 249,
        "width": 54,
        "height": 55
      },
      "44": {
        "x": 620,
        "y": 308,
        "width": 26,
        "height": 28
      },
      "45": {
        "x": 571,
        "y": 308,
        "width": 26,
        "height": 28
      },
      "46": {
        "x": 533,
        "y": 249,
        "width": 54,
        "height": 55
      },
      "47": {
        "x": 571,
        "y": 218,
        "width": 26,
        "height": 28
      },
      "48": {
        "x": 503,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "56": {
        "x": 410,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "57": {
        "x": 410,
        "y": 211,
        "width": 26,
        "height": 28
      },
      "58": {
        "x": 453,
        "y": 229,
        "width": 26,
        "height": 28
      },
      "59": {
        "x": 459,
        "y": 260,
        "width": 36,
        "height": 38
      },
      "60": {
        "x": 427,
        "y": 293,
        "width": 54,
        "height": 55
      },
      "61": {
        "x": 367,
        "y": 229,
        "width": 26,
        "height": 28
      },
      "62": {
        "x": 351,
        "y": 260,
        "width": 36,
        "height": 38
      },
      "63": {
        "x": 365,
        "y": 293,
        "width": 54,
        "height": 55
      },
      "64": {
        "x": 314,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "65": {
        "x": 247,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "66": {
        "x": 253,
        "y": 135,
        "width": 26,
        "height": 28
      },
      "67": {
        "x": 230,
        "y": 100,
        "width": 26,
        "height": 28
      },
      "68": {
        "x": 166,
        "y": 73,
        "width": 54,
        "height": 55
      },
      "69": {
        "x": 209,
        "y": 152,
        "width": 26,
        "height": 28
      },
      "70": {
        "x": 172,
        "y": 130,
        "width": 26,
        "height": 28
      },
      "71": {
        "x": 108,
        "y": 86,
        "width": 54,
        "height": 55
      },
      "72": {
        "x": 214,
        "y": 197,
        "width": 26,
        "height": 28
      },
      "73": {
        "x": 174,
        "y": 194,
        "width": 26,
        "height": 28
      },
      "74": {
        "x": 122,
        "y": 144,
        "width": 54,
        "height": 55
      },
      "75": {
        "x": 314,
        "y": 273,
        "width": 26,
        "height": 28
      },
      "76": {
        "x": 243,
        "y": 273,
        "width": 26,
        "height": 28
      },
      "77": {
        "x": 215,
        "y": 241,
        "width": 26,
        "height": 28
      },
      "78": {
        "x": 165,
        "y": 259,
        "width": 54,
        "height": 55
      },
      "79": {
        "x": 215,
        "y": 305,
        "width": 26,
        "height": 28
      },
      "80": {
        "x": 706,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "81": {
        "x": 596,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "82": {
        "x": 502,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "83": {
        "x": 408,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "84": {
        "x": 314,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "85": {
        "x": 211,
        "y": 347,
        "width": 36,
        "height": 38
      },
      "86": {
        "x": 83,
        "y": 327,
        "width": 76,
        "height": 76
      },
      "88": {
        "x": 560,
        "y": 548,
        "width": 26,
        "height": 28
      },
      "89": {
        "x": 587,
        "y": 511,
        "width": 26,
        "height": 28
      },
      "90": {
        "x": 637,
        "y": 508,
        "width": 26,
        "height": 28
      },
      "91": {
        "x": 651,
        "y": 464,
        "width": 36,
        "height": 38
      },
      "92": {
        "x": 620,
        "y": 410,
        "width": 54,
        "height": 55
      },
      "93": {
        "x": 573,
        "y": 426,
        "width": 36,
        "height": 38
      },
      "94": {
        "x": 560,
        "y": 471,
        "width": 26,
        "height": 28
      },
      "95": {
        "x": 478,
        "y": 500,
        "width": 26,
        "height": 28
      },
      "96": {
        "x": 478,
        "y": 452,
        "width": 26,
        "height": 28
      },
      "97": {
        "x": 509,
        "y": 421,
        "width": 26,
        "height": 28
      },
      "98": {
        "x": 473,
        "y": 382,
        "width": 36,
        "height": 38
      },
      "99": {
        "x": 447,
        "y": 421,
        "width": 26,
        "height": 28
      },
      "100": {
        "x": 386,
        "y": 447,
        "width": 26,
        "height": 28
      },
      "101": {
        "x": 314,
        "y": 403,
        "width": 26,
        "height": 28
      },
      "102": {
        "x": 560,
        "y": 627,
        "width": 26,
        "height": 28
      },
      "103": {
        "x": 487,
        "y": 586,
        "width": 36,
        "height": 38
      },
      "104": {
        "x": 487,
        "y": 645,
        "width": 36,
        "height": 38
      },
      "105": {
        "x": 525,
        "y": 690,
        "width": 36,
        "height": 38
      },
      "106": {
        "x": 387,
        "y": 505,
        "width": 54,
        "height": 55
      },
      "107": {
        "x": 364,
        "y": 551,
        "width": 54,
        "height": 55
      },
      "108": {
        "x": 350,
        "y": 606,
        "width": 54,
        "height": 55
      },
      "109": {
        "x": 352,
        "y": 663,
        "width": 54,
        "height": 55
      },
      "110": {
        "x": 372,
        "y": 715,
        "width": 54,
        "height": 55
      },
      "111": {
        "x": 404,
        "y": 762,
        "width": 54,
        "height": 55
      },
      "112": {
        "x": 447,
        "y": 797,
        "width": 54,
        "height": 55
      },
      "113": {
        "x": 216,
        "y": 418,
        "width": 26,
        "height": 28
      },
      "114": {
        "x": 266,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "115": {
        "x": 216,
        "y": 524,
        "width": 26,
        "height": 28
      },
      "116": {
        "x": 156,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "117": {
        "x": 211,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "118": {
        "x": 314,
        "y": 672,
        "width": 26,
        "height": 28
      },
      "119": {
        "x": 202,
        "y": 658,
        "width": 54,
        "height": 55
      },
      "120": {
        "x": 170,
        "y": 643,
        "width": 26,
        "height": 28
      },
      "121": {
        "x": 151,
        "y": 599,
        "width": 36,
        "height": 38
      },
      "122": {
        "x": 122,
        "y": 535,
        "width": 54,
        "height": 55
      },
      "123": {
        "x": 111,
        "y": 599,
        "width": 36,
        "height": 38
      },
      "124": {
        "x": 102,
        "y": 643,
        "width": 26,
        "height": 28
      },
      "125": {
        "x": 46,
        "y": 658,
        "width": 54,
        "height": 55
      },
      "126": {
        "x": 100,
        "y": 705,
        "width": 36,
        "height": 38
      },
      "127": {
        "x": 122,
        "y": 747,
        "width": 26,
        "height": 28
      },
      "128": {
        "x": 122,
        "y": 781,
        "width": 54,
        "height": 55
      },
      "129": {
        "x": 150,
        "y": 747,
        "width": 26,
        "height": 28
      },
      "130": {
        "x": 162,
        "y": 705,
        "width": 36,
        "height": 38
      },
      "131": {
        "x": 314,
        "y": 763,
        "width": 26,
        "height": 28
      },
      "132": {
        "x": 150,
        "y": 953,
        "width": 36,
        "height": 38
      },
      "133": {
        "x": 132,
        "y": 927,
        "width": 26,
        "height": 28
      },
      "134": {
        "x": 141,
        "y": 886,
        "width": 26,
        "height": 28
      },
      "135": {
        "x": 181,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "136": {
        "x": 221,
        "y": 886,
        "width": 26,
        "height": 28
      },
      "137": {
        "x": 230,
        "y": 927,
        "width": 26,
        "height": 28
      },
      "138": {
        "x": 202,
        "y": 953,
        "width": 36,
        "height": 38
      },
      "139": {
        "x": 314,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "140": {
        "x": 400,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "141": {
        "x": 797,
        "y": 850,
        "width": 54,
        "height": 55
      },
      "142": {
        "x": 849,
        "y": 813,
        "width": 26,
        "height": 28
      },
      "143": {
        "x": 903,
        "y": 795,
        "width": 26,
        "height": 28
      },
      "144": {
        "x": 957,
        "y": 790,
        "width": 26,
        "height": 28
      },
      "145": {
        "x": 1011,
        "y": 795,
        "width": 26,
        "height": 28
      },
      "146": {
        "x": 1065,
        "y": 813,
        "width": 26,
        "height": 28
      },
      "147": {
        "x": 1089,
        "y": 850,
        "width": 54,
        "height": 55
      },
      "148": {
        "x": 1025,
        "y": 859,
        "width": 36,
        "height": 38
      },
      "149": {
        "x": 943,
        "y": 850,
        "width": 54,
        "height": 55
      },
      "150": {
        "x": 879,
        "y": 859,
        "width": 36,
        "height": 38
      },
      "151": {
        "x": 844,
        "y": 910,
        "width": 36,
        "height": 38
      },
      "152": {
        "x": 901,
        "y": 932,
        "width": 26,
        "height": 28
      },
      "153": {
        "x": 940,
        "y": 922,
        "width": 60,
        "height": 60
      },
      "154": {
        "x": 1016,
        "y": 932,
        "width": 26,
        "height": 28
      },
      "155": {
        "x": 1064,
        "y": 909,
        "width": 36,
        "height": 38
      },
      "156": {
        "x": 1514,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "157": {
        "x": 1600,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "158": {
        "x": 1702,
        "y": 953,
        "width": 36,
        "height": 38
      },
      "159": {
        "x": 1684,
        "y": 927,
        "width": 26,
        "height": 28
      },
      "160": {
        "x": 1693,
        "y": 886,
        "width": 26,
        "height": 28
      },
      "161": {
        "x": 1733,
        "y": 864,
        "width": 26,
        "height": 28
      },
      "162": {
        "x": 1773,
        "y": 886,
        "width": 26,
        "height": 28
      },
      "163": {
        "x": 1782,
        "y": 927,
        "width": 26,
        "height": 28
      },
      "164": {
        "x": 1754,
        "y": 953,
        "width": 36,
        "height": 38
      },
      "165": {
        "x": 1100,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "166": {
        "x": 1180,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "173": {
        "x": 1148,
        "y": 220,
        "width": 36,
        "height": 38
      },
      "174": {
        "x": 1115,
        "y": 265,
        "width": 26,
        "height": 28
      },
      "175": {
        "x": 1166,
        "y": 294,
        "width": 36,
        "height": 38
      },
      "176": {
        "x": 1249,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "177": {
        "x": 1318,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "178": {
        "x": 1343,
        "y": 218,
        "width": 26,
        "height": 28
      },
      "179": {
        "x": 1353,
        "y": 249,
        "width": 54,
        "height": 55
      },
      "180": {
        "x": 1343,
        "y": 308,
        "width": 26,
        "height": 28
      },
      "181": {
        "x": 1294,
        "y": 308,
        "width": 26,
        "height": 28
      },
      "182": {
        "x": 1252,
        "y": 249,
        "width": 54,
        "height": 55
      },
      "183": {
        "x": 1294,
        "y": 218,
        "width": 26,
        "height": 28
      },
      "184": {
        "x": 1411,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "192": {
        "x": 1504,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "193": {
        "x": 1504,
        "y": 211,
        "width": 26,
        "height": 28
      },
      "194": {
        "x": 1547,
        "y": 229,
        "width": 26,
        "height": 28
      },
      "195": {
        "x": 1553,
        "y": 260,
        "width": 36,
        "height": 38
      },
      "196": {
        "x": 1521,
        "y": 293,
        "width": 54,
        "height": 55
      },
      "197": {
        "x": 1461,
        "y": 229,
        "width": 26,
        "height": 28
      },
      "198": {
        "x": 1445,
        "y": 260,
        "width": 36,
        "height": 38
      },
      "199": {
        "x": 1459,
        "y": 293,
        "width": 54,
        "height": 55
      },
      "200": {
        "x": 1600,
        "y": 174,
        "width": 26,
        "height": 28
      },
      "201": {
        "x": 1600,
        "y": 273,
        "width": 26,
        "height": 28
      },
      "202": {
        "x": 1671,
        "y": 273,
        "width": 26,
        "height": 28
      },
      "203": {
        "x": 1699,
        "y": 241,
        "width": 26,
        "height": 28
      },
      "204": {
        "x": 1721,
        "y": 259,
        "width": 54,
        "height": 55
      },
      "205": {
        "x": 1699,
        "y": 305,
        "width": 26,
        "height": 28
      },
      "206": {
        "x": 1208,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "207": {
        "x": 1318,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "208": {
        "x": 1412,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "209": {
        "x": 1506,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "210": {
        "x": 1600,
        "y": 352,
        "width": 26,
        "height": 28
      },
      "211": {
        "x": 1693,
        "y": 347,
        "width": 36,
        "height": 38
      },
      "212": {
        "x": 1781,
        "y": 327,
        "width": 76,
        "height": 76
      },
      "214": {
        "x": 1354,
        "y": 548,
        "width": 26,
        "height": 28
      },
      "215": {
        "x": 1327,
        "y": 511,
        "width": 26,
        "height": 28
      },
      "216": {
        "x": 1354,
        "y": 471,
        "width": 26,
        "height": 28
      },
      "217": {
        "x": 1331,
        "y": 426,
        "width": 36,
        "height": 38
      },
      "218": {
        "x": 1266,
        "y": 410,
        "width": 54,
        "height": 55
      },
      "219": {
        "x": 1253,
        "y": 464,
        "width": 36,
        "height": 38
      },
      "220": {
        "x": 1277,
        "y": 508,
        "width": 26,
        "height": 28
      },
      "221": {
        "x": 1436,
        "y": 500,
        "width": 26,
        "height": 28
      },
      "222": {
        "x": 1436,
        "y": 452,
        "width": 26,
        "height": 28
      },
      "223": {
        "x": 1467,
        "y": 421,
        "width": 26,
        "height": 28
      },
      "224": {
        "x": 1431,
        "y": 382,
        "width": 36,
        "height": 38
      },
      "225": {
        "x": 1405,
        "y": 421,
        "width": 26,
        "height": 28
      },
      "226": {
        "x": 1528,
        "y": 447,
        "width": 26,
        "height": 28
      },
      "227": {
        "x": 1600,
        "y": 403,
        "width": 26,
        "height": 28
      },
      "228": {
        "x": 1404,
        "y": 624,
        "width": 36,
        "height": 38
      },
      "229": {
        "x": 1451,
        "y": 599,
        "width": 36,
        "height": 38
      },
      "230": {
        "x": 1442,
        "y": 534,
        "width": 54,
        "height": 55
      },
      "231": {
        "x": 1498,
        "y": 624,
        "width": 36,
        "height": 38
      },
      "232": {
        "x": 1536,
        "y": 591,
        "width": 54,
        "height": 55
      },
      "233": {
        "x": 1498,
        "y": 668,
        "width": 36,
        "height": 38
      },
      "234": {
        "x": 1536,
        "y": 685,
        "width": 54,
        "height": 55
      },
      "235": {
        "x": 1451,
        "y": 693,
        "width": 36,
        "height": 38
      },
      "236": {
        "x": 1442,
        "y": 740,
        "width": 54,
        "height": 55
      },
      "237": {
        "x": 1404,
        "y": 668,
        "width": 36,
        "height": 38
      },
      "238": {
        "x": 1350,
        "y": 685,
        "width": 54,
        "height": 55
      },
      "239": {
        "x": 1698,
        "y": 418,
        "width": 26,
        "height": 28
      },
      "240": {
        "x": 1748,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "241": {
        "x": 1698,
        "y": 524,
        "width": 26,
        "height": 28
      },
      "242": {
        "x": 1638,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "243": {
        "x": 1693,
        "y": 466,
        "width": 36,
        "height": 38
      },
      "244": {
        "x": 1600,
        "y": 672,
        "width": 26,
        "height": 28
      },
      "245": {
        "x": 1684,
        "y": 658,
        "width": 54,
        "height": 55
      },
      "246": {
        "x": 1740,
        "y": 643,
        "width": 26,
        "height": 28
      },
      "247": {
        "x": 1749,
        "y": 599,
        "width": 36,
        "height": 38
      },
      "248": {
        "x": 1760,
        "y": 535,
        "width": 54,
        "height": 55
      },
      "249": {
        "x": 1789,
        "y": 599,
        "width": 36,
        "height": 38
      },
      "250": {
        "x": 1808,
        "y": 643,
        "width": 26,
        "height": 28
      },
      "251": {
        "x": 1840,
        "y": 658,
        "width": 54,
        "height": 55
      },
      "252": {
        "x": 1800,
        "y": 705,
        "width": 36,
        "height": 38
      },
      "253": {
        "x": 1788,
        "y": 747,
        "width": 26,
        "height": 28
      },
      "254": {
        "x": 1760,
        "y": 781,
        "width": 54,
        "height": 55
      },
      "255": {
        "x": 1760,
        "y": 747,
        "width": 26,
        "height": 28
      },
      "256": {
        "x": 1738,
        "y": 705,
        "width": 36,
        "height": 38
      },
      "257": {
        "x": 1600,
        "y": 763,
        "width": 26,
        "height": 28
      },
      "258": {
        "x": 957,
        "y": 226,
        "width": 26,
        "height": 28
      },
      "259": {
        "x": 906,
        "y": 246,
        "width": 36,
        "height": 38
      },
      "260": {
        "x": 916,
        "y": 301,
        "width": 26,
        "height": 28
      },
      "261": {
        "x": 989,
        "y": 296,
        "width": 36,
        "height": 38
      },
      "262": {
        "x": 1002,
        "y": 251,
        "width": 26,
        "height": 28
      },
      "263": {
        "x": 855,
        "y": 323,
        "width": 26,
        "height": 28
      },
      "264": {
        "x": 888,
        "y": 368,
        "width": 36,
        "height": 38
      },
      "265": {
        "x": 957,
        "y": 397,
        "width": 26,
        "height": 28
      },
      "266": {
        "x": 1016,
        "y": 368,
        "width": 36,
        "height": 38
      },
      "267": {
        "x": 1059,
        "y": 323,
        "width": 26,
        "height": 28
      },
      "268": {
        "x": 1049,
        "y": 434,
        "width": 26,
        "height": 28
      },
      "269": {
        "x": 1079,
        "y": 502,
        "width": 36,
        "height": 38
      },
      "270": {
        "x": 1039,
        "y": 584,
        "width": 54,
        "height": 55
      },
      "271": {
        "x": 953,
        "y": 641,
        "width": 36,
        "height": 38
      },
      "272": {
        "x": 872,
        "y": 607,
        "width": 26,
        "height": 28
      },
      "273": {
        "x": 822,
        "y": 498,
        "width": 60,
        "height": 60
      },
      "274": {
        "x": 880,
        "y": 444,
        "width": 36,
        "height": 38
      },
      "275": {
        "x": 984,
        "y": 437,
        "width": 54,
        "height": 55
      },
      "276": {
        "x": 1030,
        "y": 537,
        "width": 36,
        "height": 38
      },
      "277": {
        "x": 884,
        "y": 530,
        "width": 54,
        "height": 55
      },
      "278": {
        "x": 951,
        "y": 512,
        "width": 60,
        "height": 60
      },
      "279": {
        "x": 805,
        "y": 403,
        "width": 54,
        "height": 55
      },
      "280": {
        "x": 1081,
        "y": 403,
        "width": 54,
        "height": 55
      },
      "281": {
        "x": 636,
        "y": 709,
        "width": 60,
        "height": 60
      },
      "282": {
        "x": 594,
        "y": 791,
        "width": 54,
        "height": 55
      },
      "283": {
        "x": 763,
        "y": 729,
        "width": 26,
        "height": 28
      },
      "284": {
        "x": 706,
        "y": 631,
        "width": 36,
        "height": 38
      },
      "285": {
        "x": 749,
        "y": 642,
        "width": 54,
        "height": 55
      },
      "286": {
        "x": 810,
        "y": 631,
        "width": 36,
        "height": 38
      },
      "287": {
        "x": 1151,
        "y": 729,
        "width": 26,
        "height": 28
      },
      "288": {
        "x": 1094,
        "y": 631,
        "width": 36,
        "height": 38
      },
      "289": {
        "x": 1137,
        "y": 642,
        "width": 54,
        "height": 55
      },
      "290": {
        "x": 1198,
        "y": 631,
        "width": 36,
        "height": 38
      },
      "291": {
        "x": 1244,
        "y": 709,
        "width": 60,
        "height": 60
      },
      "292": {
        "x": 1292,
        "y": 791,
        "width": 54,
        "height": 55
      },
      "293": {
        "x": 401,
        "y": 968,
        "width": 76,
        "height": 76
      },
      "295": {
        "x": 1463,
        "y": 968,
        "width": 76,
        "height": 76
      }
    },
    "bgImages": [
      {
        "id": "Awaken_Skill2_BG_01",
        "x": 0,
        "y": 0,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_10.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill2_BG_02",
        "x": 970,
        "y": 0,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_12.png",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill2_BG_03",
        "x": 0,
        "y": 530,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_14.PNG",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      },
      {
        "id": "Awaken_Skill2_BG_04",
        "x": 970,
        "y": 530,
        "width": 970,
        "height": 530,
        "texture": "Data\\Interface\\Concept\\24_4Q_16.PNG",
        "clip": {
          "x1": 0,
          "y1": 0,
          "x2": 970,
          "y2": 530
        }
      }
    ]
  }
};