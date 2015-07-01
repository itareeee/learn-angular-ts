# learn-angular-ts
To Learn AngularJS with TypeScript

## Development

### Fork This Repo

```
// 1. github 上で fork 自分の Repository を作成

// 2. 自分のRepository をローカルにClone
$ git clone https://github.com/{userName}/learn-angular-ts.git

// 3. Fork元 (kitaly/learn-angular-ts) を別のRemoteServerとして追加
$ git remote add upstream https://github.com/{userName}/learn-angular-ts.git

// 4. Fork元の変更を取り込みたい場合
$ git fetch upstream
$ git merge upstream/master
```
(参考)[http://qiita.com/xtetsuji/items/555a1ef19ed21ee42873]

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

### Updating forks

1. Go to pull requests page
2. Click on 'New Pull Request' button
3. Click on 'compare across forks'
4. Set own fork as base fork, set k-italy/learn-angular-ts as head fork
 * ![update fork](https://raw.githubusercontent.com/sundaysen/learn-angular-ts/master/updatefork.png)
5. Click on 'Create new pull request' button
6. Merge
7. git pull

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
