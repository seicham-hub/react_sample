
const paths = [{ id: "1" }, { id: "2" }];

// メタデータ設定するとき
// export async function generateMetadata({ params }) {
//     const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
//         res.json());
//     return {
//         title: article.title,
//         description: article.text,
//     }
// }

export default function Page({ params }: any) {
    const date = new Date;

    return <h3>今ページは{params.id}です。{date.toJSON()}</h3>
}

export async function generateStaticParams() {
    return paths;
}