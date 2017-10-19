// ARchitect World（＝AR体験）の実装
var World = {

  // 初期化用の関数。World.init()の形で、外部から呼び出されることで ARchitect World が生成されます。
  init: function () {

    World.createOverlays();

  }, // ※「,」を足すのを忘れないように

  // init()関数から呼び出される。ARchitect Worldのオーバーレイを作成します。
  createOverlays: function () {

    // ①事前に作成しておいた「複数のターゲット物体群がまとめられた.wtoファイル」から、「物体ターゲットコレクション」リソースを作成します。
    var targetCollectionResource = new AR.TargetCollectionResource("assets/dressing.wto");
    // ②その「物体ターゲットコレクション」リソースから、「AR物体トラッカー」を作成します。
    var tracker = new AR.ObjectTracker(targetCollectionResource, {
      onTargetsLoaded: World.worldLoaded,  // ターゲット群のロードが完了したときに呼び出されるコールバック関数を指定。
      onError: function(errorMessage) {    // エラー処理
        alert(errorMessage);
      }
    });

    // ③事前に準備しておいた「オーバーレイ用の.pngファイル」から、「画像」リソースを作成します。
    var productButton = new AR.ImageResource("assets/overlays/product.png");
    var recipeButton = new AR.ImageResource("assets/overlays/recipe.png");
    // ④その「画像」リソースから、オーバーレイとなる「画像描画物」を作成します。
    var productOverlay = new AR.ImageDrawable(productButton, 1, {
      translate: {
        x:-0.55,   // AR.ImageDrawableのX軸方向への平行移動と、
        y:0.55     // Y軸方向への平行移動を設定。
      },
      onClick : function() {
        AR.context.openInBrowser("http://www.rikenvitamin.jp/products/dressing/nonoilsuperdressing/aojiso.html");
      }
    });
    var recipeOverlay = new AR.ImageDrawable(recipeButton, 1, {
      translate: {
        x:-0.55,   // AR.ImageDrawableのX軸方向への平行移動と、
        y:0.55     // Y軸方向への平行移動を設定。
      },
      onClick : function() {
        AR.context.openInBrowser("http://riken-tensai.jp/index.html#movies");
      }
    });

    // ⑤「AR画像トラッカブル」を作成することにより、追跡する（Tracker）側と追跡される（Trackable）側のセットを構築します。
    new AR.ObjectTrackable(tracker, "*", {  // 追跡されるターゲットの名前を、ワイルドカード（*）にすることで、物体ターゲットコレクション内の全てのターゲットが反応するようになります。

      drawables: {
        cam: [productOverlay, recipeOverlay]  // このプロパティに対して、追跡されるターゲットのオーバーレイ（＝AR.ImageDrawableオブジェクト）を指定。
      }

    });

  },

  // ObjectTrackerクラスのonTargetsLoadedイベントに呼び出されます。トラッカーのターゲットコレクションが正常にロードされ、トラッカーがエンジンによってロードされたときにトリガーが発生します。このトラッカーに関連するObjectTrackableは、トラッカーが正常に読み込まれた後にのみトラッキングできます。
  worldLoaded: function () {
    World.initInstruction();
  },

  // ユーザーへの指示文の初期化処理を関数にまとめています。
  initInstruction: function () {
    document.getElementById('topMessage').innerHTML =
      "<div style='display: table-cell;vertical-align: middle; text-align: right; width: 70%; padding-right: 15px;'>ドレッシングボトルをスキャンしてね:</div>" +
      "<div style='display: table-cell;vertical-align: middle; text-align: left;'><img src='assets/dressing_image.png'></img></div>";
  }

};

// ARchitect World を初期化します。
World.init();