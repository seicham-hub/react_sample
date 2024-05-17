This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


.
├── README.md  
├── app  
│   ├── favicon.ico  
│   ├── globals.css  
│   ├── layout.tsx  
│   └── page.tsx  
├── next-env.d.ts  
├── next.config.mjs  
├── node_modules  
├── package-lock.json  
├── package.json  
├── postcss.config.mjs  
├── public  
│   ├── next.svg  
│   └── vercel.svg  
├── tailwind.config.ts  
└── tsconfig.json  



# サーバコンポーネントとクライアントコンポーネント
サーバーコンポーネント：SSR。サーバーサイドでレンダリングされるコンポーネント。ブラウザ（クライアント）にAPIKEY等公開したくない場合に便利。
MUI等が対応してないのがデメリット。サーバーサイドで実行されるので直接SQL文を書くなども可能。
クライアントコンポーネント：SPA。ブラウザ側でjsが実行されるコンポーネント。SEO弱いかも。

ISR：Incremental Static Regeneration
キャッシュを使用するリクエストの秒数を指定。

リクエスト時に最新の情報でなくても良い：ISR
リクエスト時に最新の情報が欲しい：SSRまたはCSR

## server actionsについて
コンポーネントにバックエンドのロジックを書くことで一元管理できる

## nuxtとの違い
nextはデフォルトでは静的ホスティングしない思想でできてるぽい。  
サーバーサイドで処理できる部分はできるだけ処理しようとしている。

## app routeとroute handlerについて

app router(v12以前はpages router)  
nuxtのrouteと同じ概念。URLに対しどのページを表示させるか。  
  
route handler(v12以前はApi routes)  
サーバーサイドからAPIを実行する機能。セキュリティ上の恩恵がある。  
取得したデータをcacheしてくれる+子コンポーネントで何回かAPI呼んでもまとめて１回にしてくれるのでpropsでバケツリレーする必要がない！

データの流れが以下のようになる。
リクエスト時
ブラウザ→node.jsサーバ→APIサーバ

# muiインストール
```bash
 npm install @mui/material @emotion/react @emotion/styled
```