import Link from 'next/link'
import axios from 'axios';
const Index = ({posts}) => {

  // console.log(`**Running Index`)
  return (
    <div>
      <ul>
        {posts.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// SSR if url was original request.
// client if navigating to this page from somwehere else in app
Index.getInitialProps = async () => {
	// console.log('getInitialProps is RENDERING!!!!!!!!!!');
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
	// return {};
};

export default Index;