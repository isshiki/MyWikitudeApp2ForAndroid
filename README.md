# MyWikitudeApp2ForAndroid
Wikitude SDK（JavaScript API）を用いたターゲット物体認識型ARのサンプルアプリで、ドレッシングボトルを認識してレシピを提案します。

連載記事「[Wikitudeでスマホアプリをお手軽開発［PR］ - Build Insider](http://www.buildinsider.net/pr/grapecity/wikitude)」の第5回で作成したAndroid向けのサンプルアプリです。

このサンプルアプリは、SDKに付属のサンプルをベースに独自の拡張を加えたものです。


## ビルド・実行するための注意点

- 古いAndroid Studioを使っているユーザーの環境ではビルドエラーになる可能性があります。

Android Studio 2.3.3を使用して作成しています。これ以降のバージョンのAndroid Studioをお使いください（※Android Studio 2.2以降では動作する可能性がありますが、未検証です）。

- /MyWikitudeApp2ForAndroid/app/src/main/java/isshiki/mywtapp2forandroid/MainActivity.java

MainActivity.javaファイル内の `protected static final String WIKITUDE_SDK_KEY` の値を、実際に取得した正しいアクセスキーにしてください。

## ライセンス

MIT.



