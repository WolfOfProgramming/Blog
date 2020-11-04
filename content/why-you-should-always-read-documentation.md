---
title: 'Why you should  always read documentation?'
date: '2020-08-19'
description: 'You do not read the documentation of new technologies that you use? In this article, I will introduce you to my experience when I am skipping documentation and I will give three reasons why you should read documentation.'
tags: ['Knowledge', 'Programming', 'Opinion']
---

I often see people who are asking for help on different chats and groups, before even reading documentation. I think that it's kinda annoying, when somebody is asking for help without trying to solve a problem themselves. That's why I decided to write this article.

## My own experience

I want to start this article by my own example. You can say that I am the geek of documentations, I've read all the main concepts of the React before even writing first line of code. And after that I've read all advanced topics and hooks at least a couple times. But I think that the most important thing when reading documentation is making notes of core concepts. I have whole notebook with notes for React, Typescript and other smaller technologies. Also I don't say that you should read whole documentation, it's only the way that I like it. You should learn technologies as you wish, but keep in mind that in often documentation has the latest information and is up to date.

## When I am skipping documentation...

A couple days ago, I needed validation for some data. It's standard case, so I decided to use [zod](https://www.npmjs.com/package/zod) library (I really recommend to try it out). I wrote a schema and used it with parse method:

```js
const ArticleData = z.object({
  	title: z.string(),
  	description: z.string(),
  	date: z.string(),
  	tags: z.array(z.string()),
});

// ...
    
const articleData = ArticleData.parse(matter(fileContent).data);
```

It's pretty straightforward example. I felt confident, because I used this library a couple times and it always worked as expected. But this times something strange happened. All the object properties were optional. So I checked my code three times and then decided to write an issue. Thanks to the owner of the zod, I was only helpless for one hour. Everything was due to one line in tsconfig file.

```json
{
  	"compilerOptions": {
    	"strict": true
  	}
}
```

You can say that it's stupid mistake and it's all my fault, and you're right. But everybody is sometimes making stupid mistakes,  that's how we learn. **Disclaimer, if you're using a Next.js framework as I did, and you follow the documentation guide for adding typescript to your project, the default compiler option is `strict: false`**

## Why it's important?

It took too long, now I am gonna show three reasons why you should try to read documentation.



### Gaining confidence

I sometimes like to watch courses or explanations of some hard concept in JavaScript like event loop, or generators. But what  I found in majority of these explanations is that they're simplified and often outdated. I mean it's good for beginner to know how something works, even if it's simplified, but I really known the **Why** and **How**, instead of knowing only a simplified concept. That's why I never feel really confident after watching video course compared to reading documentation.



### Being Independent

I think if I should say what's the most important thing in this article I would say that's being **independent developer**. And I don't mean don't asking other for help if you're stuck. I known a lot of people, who really helped me with code review and errors that I couldn't find in my code, but what I wanna say that you should always try to solve your problem yourself. And the first place for solving a problem is documentation (or stackoverflow).



### Saving your time

You may ask, why I am saying that reading documentation will save more of your time than asking a question in the Internet. Two reasons:

1. Everybody who helps you solve your problems with code has theirs lives, and they usually don't spend the whole day of reading every problem on the Internet. That's why you shouldn't waste their time on trivial problems.
2. Solving your problems yourself will benefit you in the future.

## Where is best place to read documentation?

Every big technology or framework has its own site and often **Docs** section. You only need to find it. If you're using some smaller npm package, the documentation is usually in Readme file on Github. If you're searching for specific HTML/CSS/JS question I recommend to use [MDN](https://developer.mozilla.org/en-US/). 

## Conclusion

Being able to read documentation should be an essential skill of every developer. It will help you solve your problems faster and make you more confident about your code. Keep in mind that everything in this article is my opinion, based on my experience.