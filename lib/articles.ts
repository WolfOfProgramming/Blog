import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { promisify } from "util";
import * as z from "zod";

const ArticleData = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
});

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const articlesDirectory = path.join(process.cwd(), "content");

async function getSortedArticlesData() {
  const fileNames = await readdir(articlesDirectory);
  const articlesData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const filePath = path.join(articlesDirectory, fileName);
      const fileContent = await readFile(filePath);
      const articleData = ArticleData.parse(matter(fileContent).data);
      return {
        id,
        ...articleData,
      };
    })
  );
  return articlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

async function getAllArticlesIds() {
  const fileNames = await readdir(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

async function getArticleData(id: string) {
  const filePath = path.join(articlesDirectory, `${id}.md`);
  const fileContent = await readFile(filePath);
  const matterResult = matter(fileContent);
  const articleData = ArticleData.parse(matterResult.data);
  const articleContent = matterResult.content;
  const processedContent = await remark().use(html).process(articleContent);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...articleData,
  };
}

export { getSortedArticlesData, getAllArticlesIds, getArticleData };
