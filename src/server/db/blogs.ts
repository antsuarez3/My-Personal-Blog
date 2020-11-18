import { Query } from './index'

const all = async () => Query('SELECT Blogs.id, Blogs.title, Blogs.content, Authors.name FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id;');

const one = async (id: number) => Query('SELECT Blogs.id, Blogs.title, Blogs.content, Authors.name FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id WHERE Blogs.id = ?;', [id]);

const insert = (title: string, authorid: number, content: string) => Query('INSERT INTO Blogs (title, authorid, content) VALUES (?, ?, ?)', [title, authorid, content]);

const update = (content: string, id: number) => Query('update Blogs SET content = ? WHERE Blogs.id = ?', [content, id]);

const destroy = (id: number) => Query('DELETE FROM Blogs WHERE Blogs.id = ?;', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}