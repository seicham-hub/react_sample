"use server"

// フロント側でサーバ上の関数直接呼んでデータ取得したりするときに用いる

export async function createItem(formData: FormData) {
    const id = formData.get('id');
    const title = formData.get('titile');
}