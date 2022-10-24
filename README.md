This is a [Next.js](https://nextjs.org/) blog powered by [Notion](https://notion.so)

## Getting Started
Create a Notion database with the following fields.
* Name - The title of the blog post.
* Slug - The URL of a post.
* Description - A list of users that wrote the post.
* Tags - The URL of the meta image for a post
* Published - Indicates whether the post is published or not. Only the published posts will be displayed on the blog.
* Date- The date the post was published

Follow [Notion's getting started guide](https://developers.notion.com/docs/getting-started#step-1-create-an-integration) to get a NOTION_TOKEN and a NOTION_DATABASE_ID, then add them to a file called .env.local.
```
NOTION_TOKEN=
DATABASE_ID=
```
Run the development server:

```bash
npm run dev
# or
yarn dev
```
#### Deploy to vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsamuelkraft%2Fnotion-blog-nextjs&env=NOTION_TOKEN,NOTION_DATABASE_ID&envDescription=Please%20add%20NOTION_TOKEN%20and%20NOTION_DATABASE_ID%20that%20is%20required%20to%20connect%20the%20blog%20to%20your%20notion%20account.&envLink=https%3A%2F%2Fdevelopers.notion.com%2Fdocs%2Fgetting-started&project-name=notion-blog-nextjs&repo-name=notion-blog-nextjs&demo-title=Notion%20Blog%20Next%20JS&demo-description=%20This%20is%20a%20Next.js%20blog%20using%20Notions%20Public%20API.&demo-url=notion-blog-nextjs-coral.vercel.app)

Check out this repo's [deployed version](https://nextjs-blog-beta-one-81.vercel.app/).
