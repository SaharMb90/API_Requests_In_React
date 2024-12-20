import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { store } from './app/store'; 
import { setPosts, addPost } from './features/postsSlice'; 
import { FormControl, InputLabel, Input, FormHelperText, Checkbox, Button } from '@mui/material';
import { styled } from '@mui/system';
import './styles/posttable.scss';
interface Post {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

const StyledInput = styled(Input)({
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: '#f0f0f0',
  '&:focus': {
    borderColor: 'blue',
  },
});

const PostsTableContent: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: { posts: { posts: Post[] } }) => state.posts.posts);
  const [newPost, setNewPost] = useState<Post>({
    userId: 1,
    title: '',
    completed: false,
  });

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => dispatch(setPosts(response.data)))
      .catch((error) => console.error('Error fetching posts:', error));
  }, [dispatch]);

  const handleAddPost = () => {
    if (!newPost.title) return;

    axios
      .post<Post>('https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        dispatch(addPost(response.data));
        setNewPost({ userId: 1, title: '', completed: false });
      })
      .catch((error) => console.error('Error adding post:', error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Adding New Post</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <FormControl fullWidth margin="normal">
            <InputLabel>Title</InputLabel>
            <StyledInput
              id="name"
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            <FormHelperText>Enter the title of your post</FormHelperText>
          </FormControl>

          <div className="flex items-center space-x-2">
            <label className="font-medium">Completed:</label>
            <Checkbox
              checked={newPost.completed}
              onChange={(e) => setNewPost({ ...newPost, completed: e.target.checked })}
            />
          </div>

          <Button
            onClick={handleAddPost}
            variant="contained"
            color="secondary"
            className="flex-shrink-0"
          >
            Add Post
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left px-6 py-3 font-medium uppercase">User ID</th>
              <th className="text-left px-6 py-3 font-medium uppercase">Title</th>
              <th className="text-left px-6 py-3 font-medium uppercase">Completed</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id || index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 border-b">{post.userId}</td>
                <td className="px-6 py-4 border-b">{post.title}</td>
                <td className="px-6 py-4 border-b">{post.completed ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PostsTable: React.FC = () => (
  <Provider store={store}>
    <PostsTableContent />
  </Provider>
);

export default PostsTable;
