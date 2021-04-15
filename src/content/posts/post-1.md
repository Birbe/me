---
slug: "/blog/my-first-post"
date: "2020-04-14"
title: "My First Post!"
---

# Hello, world!

This is my first post on this blog, all powered by Markdown files!

`Here is some code on a single line.`

```js
async getGfycatInfo(gfyname) {
  await this.checkToken();

  const res = await axios({
    method: "GET",
    url: `https://api.gfycat.com/v1/gfycats/${gfyname}`,
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  });

  return res.data;
}
```
