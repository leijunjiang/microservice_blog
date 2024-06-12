const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

posts == {
  'j123j12': {
    id: 'j123j12',
    title: 'post title',
    comments: [
      { id: 'ldjfk', content: 'comment!' }
    ]
  },
  'j123j12': {
    id: 'j123j12',
    title: 'post title',
    comments: [
      { id: 'ldjfk', content: 'comment!' }
    ]
  },
  'j123j12': {
    id: 'j123j12',
    title: 'post title',
    comments: [
      { id: 'ldjfk', content: 'comment!' }
    ]
  },
}

app.get('/posts', (req, res) => {
  // const  { type, data } = req.body;
  res.send(posts)

});

app.post('/events', (req, res) => {


  const  { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    console.log(type)
    console.log(posts[id])
    posts[id] = { id, title, comments: [] };
    console.log(posts[id])
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }
});

console.log(posts)

app.listen(4002, () => {
  console.log('Listening 4002')
});