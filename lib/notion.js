// const { Client } = require("@notionhq/client")

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// })

// export const getAllPublished = async () => {
//     const posts = await notion.databases.query({
//       database_id: process.env.DATABASE_ID,
//       filter: {
//         property: "Published",
//         checkbox: {
//           equals: true,
//         },
//       },
//       sorts: [
//         {
//           property: "Date",
//           direction: "descending",
//         },
//       ],
//     });
//     const allPosts = posts.results;
//     return allPosts.map((post) => {
//       return getPageMetaData(post);
//     });
// };

// const getPageMetaData = (post) => {
//     const getTags = (tags) => {
//         const allTags = tags.map((tag) => {
//         return tag.name;
//         });
//         return allTags;
//     };
//     return {
//         id: post.id,
//         title: post.properties.Name.title[0].plain_text,
//         tags: getTags(post.properties.Tags.multi_select),
//         description: post.properties.Description.rich_text[0].plain_text,
//         date: getToday(post.properties.Date.last_edited_time),
//         slug: post.properties.Slug.rich_text[0].plain_text,
//     };
// };

// export const getSinglePost = async (slug) => {
  
//     const response = await notion.databases.query({
//       database_id: process.env.DATABASE_ID,
//       filter: {
//         property: "Slug",
//         formula: {
//           string: {
//             equals: slug,
//           },
//         },
//       },
//     });
//     const page = response.results[0];
//     const metadata = getPageMetaData(page);
//     const mdblocks = await n2m.pageToMarkdown(page.id);
//     const mdString = n2m.toMarkdownString(mdblocks);
//     return {
//         metadata,
//         markdown: mdString,
//     };
// }
let NOTION_TOKEN="secret_9Qgq28f63iaRmSNOmIq8aw0QWd2Uzkfy5PEV9cLJFse"
let DATABASE_ID="fb228b4e042947bcb58d99a4b8751fac"

const { Client } = require("@notionhq/client")
const notion = new Client({
  auth: NOTION_TOKEN,
})

 export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
 };
 const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
 } 

  function getToday (datestring) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  if (datestring) {
    date = new Date(datestring);
  }
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;
  return today;
};
