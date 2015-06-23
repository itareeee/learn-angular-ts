# learn-angular-ts
To Learn AngularJS with TypeScript

## Development
### Project Structure

```
- app
   |--  kitaly
         |-- sample01         --- 各自ディレクトリを切る
              |-- index.html
              |-- style.css
              |-- app.ts
              |-- app.js
         |-- xxx
   |-- tanacasino
         |-- sample01
- typings                     --- 型ファイル
- template-files              --- ひな形ファイル
```

### Gulp
```
// 基本これだけでOK
// TSのインクリメンタルビルド、Webserver(port:8000) を実行
$ gulp

// その他
$ gulp ts
$ gulp webserver

// gulp コマンドが "Cannot find module xxx" 的なエラー吐いたら
$ npm install
```

### 想定JSライブラリ
- JQuery
- AngularJS
- Lodash


## Learning Resources

### Official Documents
- [AngularJS] (https://angularjs.org/)
- [TypeScript] (http://www.typescriptlang.org/)

### Other Resources (AngularJS)

- [AngularJS Ninja] (http://angularjsninja.com/) - 日本語ブログ
- [egghead.io] (https://egghead.io/technologies/angularjs) - 英語チュートリアル動画
- [AngularJSリファレンス] (http://www.amazon.co.jp/AngularJS%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9-%E6%B1%A0%E6%B7%BB-%E6%98%8E%E5%AE%8F/dp/4844336681) - 日本語の書籍ならこれ
- [AngularJS Hub] (http://www.angularjshub.com/) - サンプルコード充実
- [TodoMVC] (http://todomvc.com/) - 色んなFWを利用してTODOアプリを実装

### Other Resources (TypeScript)
- TODO: adds something

### 単発読み物
- [AngularJS モダンプラクティス] (http://qiita.com/armorik83/items/5542daed0c408cb9f605) - Angular 2.0 を視野に入れた Angular x TypeScript のベストプラクティス
