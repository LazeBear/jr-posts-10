const posts = [];
let currentId = 1;

function getAllPost() {
  return JSON.parse(JSON.stringify(posts));
}

function addPost(post) {
  const { author, content } = post;
  const newPost = { author, content, id: currentId++ };
  posts.push(newPost);
  return newPost;
}

function getPostById(id) {
  return posts.find((i) => i.id === id);
}

function updatePostById(id, newPost) {
  const { author, content } = newPost;
  const post = posts.find((i) => i.id === id);
  post.author = author;
  post.content = content;
  return post;
}

function deletePostById(id) {
  const postIndex = getPostById(id);
  const deletedPost = posts.splice(postIndex, 1);
  return deletedPost;
}

function getPostIndexById(id) {
  return posts.findIndex((i) => i.id === id);
}

function doesIdExist(id) {
  return getPostIndexById(id) !== -1;
}

module.exports = {
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  addPost,
  getPostIndexById,
  doesIdExist,
};
