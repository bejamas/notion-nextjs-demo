This is a [Next.js](https://nextjs.org/) blog powered by [Notion](https://notion.so)

## Getting Started
Create a Notion database with the following fields.
* Name - The title of the blog post.
* Slug - The URL of a post.
* Description - A list of users that wrote the post.
* Tags - The URL of the meta image for a post
* Published - Indicates whether the post is published or not. Only the published posts will be displayed on the blog.
* Date- The date the post was published

Follow [Notion's getting started guide](https://developers.notion.com/docs/getting-started#step-1-create-an-integration) to get a NOTION_TOKEN and a NOTION_DATABASE_ID, then add them to the .env file.
```
NOTION_TOKEN=
DATABASE_ID=
```
Here is a [sample Notion database](https://www.notion.so/marygathoni/4fc4211e751f4d66929791c61bc1054f?v=32fe9dd175774d57a32a79fc787e3fd2) you can duplicate.

Run the development server:

```bash
npm run dev
# or
yarn dev
```
#### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgathoni-k%2FNotion-Nextjs&env=NOTION_TOKEN,DATABASE_ID&project-name=notion-nextjs-blog&demo-title=Notion%20%2B%20Nextjs%20Blog&demo-description=A%20statically%20generated%20Next.js%20blog%20powered%20by%20Notion&demo-url=https%3A%2F%2Fnextjs-blog-beta-one-81.vercel.app%2F)

#### Deploy with Netlify

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gathoni-k/Notion-Nextjs)

Check out this repo's [deployed version](https://nextjs-blog-beta-one-81.vercel.app/).



