---
slug: "/blog/my-first-post"
date: "2020-04-14"
title: "My First Post!"
---

Elit Lorem eiusmod quis consectetur ullamco aliqua deserunt ullamco. Quis culpa deserunt nostrud in consectetur ullamco. Est minim nulla aliqua velit non. Sint id consectetur voluptate eu eiusmod pariatur enim. Tempor occaecat non exercitation aute voluptate fugiat elit. Occaecat cillum sit excepteur ipsum ex aliquip sit excepteur. Voluptate velit cillum nostrud eu Lorem sunt ad non officia sint sit ad exercitation.


```python
def square(n):
  return n**2
```

```js
app
  .use(logger())
  .use(cors())
  .get("/events", async (req, res) => {
    try {
      const n = req.query.n ?? 3; // Number of events to fetch.
      const events = await getEvents(n);
      res.json(events);
    } catch (err) {
      res.status(400).send(err.response.data.error.message);
    }
  });
```