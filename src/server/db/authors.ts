import { Query } from './index';

// export const all = async () => {
//     return new Promise((resolve, reject) => {
//         Connection.query('SELECT Blogs.id, Blogs.title, Blogs.content, Authors.name FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id;', (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(results);
//         })
//     });
// }

// export const one = async (id: number) => {
//     return new Promise((resolve, reject) => {
//         Connection.query('SELECT Blogs.id, Blogs.title, Blogs.content, Authors.name FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id WHERE Blogs.id = ?;', [id], (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(results);
//         })
//     });
// }

const insert = async (name: string) => Query('INSERT INTO Authors (name) VALUES (?)', [name]);

export default {
    insert
}