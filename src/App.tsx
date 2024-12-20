
import ErrorBoundary from './ErrorBoundary';  
import PostsTable from './PostTable'
const App = () => (
  <ErrorBoundary>
    <PostsTable />
  </ErrorBoundary>
);



export default App;