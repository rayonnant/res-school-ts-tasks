/*
Напишите и типизируйте функцию,
выполняющую запрос за данными по переданному URL.
Выведите их в консоль в формате: "ID: id, Email: email".
*/

interface IComment {
    postId?: number
    id: number
    name?: string
    email: string
    body?: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = (url: string): Promise<IComment[]> => {
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Fetching error: ${res.status}`)
            }
            return res.json()
        })
}

getData(COMMENTS_URL)
    .then((data: IComment[]) => {
        data.forEach((item: IComment) => {
            console.log(`ID: ${item.id}, Email: ${item.email}`)
        })
    })
    .catch((err) => {
        console.error('There was an error: ', err)
    })


/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */

