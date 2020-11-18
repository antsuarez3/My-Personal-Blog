import * as express from 'express';
import db from '../db';
// import blogs from '../db/blogs';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/', async (req, res) => {
    try {
        const data = await db.Blogs.all();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const data = await db.Blogs.one(id);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/", async (req: express.Request, res: express.Response) => {
    try {
        const newAuthorname = req.body.name;
        const newBlogContent = req.body.content;
        const newBlogTitle = req.body.title;

        const newAuthor = await db.Authors.insert(newAuthorname);
        console.log(newAuthor);
        const newAuthorId = newAuthor.insertId

        const newBlog = await db.Blogs.insert(newBlogTitle, newAuthorId, newBlogContent);
        console.log(newBlog);
        res.status(200).send(`
        author created with id: ${newAuthorId}
        blog inserted with id: ${newBlog.insertId}
        `);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const newBlogContent = req.body.content;

        const updatedBlog = await db.Blogs.update(newBlogContent, id);

        res.status(200).send(`Updated Blog ${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);

        await db.Blogs.destroy(id);

        res.send(`chirp ${id} was deleted`);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;