import React from 'react'
import { useRouter, withRouter } from 'next/router';
 
function Post() {
    const router2 = useRouter();
    console.log(`router2`, router2)
    const {query} = router2
  return ( 
    <div>
      <h1>post page: {router2.query.id}</h1>
      <span>id:{router2.query.id}</span>
    </div>
  );
}

// 
// export default withRouter(Post({router}))
export default Post




// props passed from index
// Post.getInitialProps = async ({query}) => {
// 	// console.log('getInitialProps is RENDERING!!!!!!!!!!');
//   // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   // const { data } = res;
//   // return { posts: data };
// 	return { id: query.id };
// };



//  As getInitialProps is deprecated here is my solution with using getServerSideProps. 

// export const getServerSideProps = async ({ query }) => {
//   return { props: { query: query } };
// };


// building off my post in the last lecture, you need to update the code here a bit since we're not using getInitialProps(). with some Stack Overflow diving, i found the below. You need to import { useRouter } from next/router in order to access those props. This is the code I came up with. Not identical to Colt's, but this'll show you everything in router object, then specifically output the query id.

// import { useRouter } from 'next/router';
 
// export default function Post() {
//     const router = useRouter();
//     console.log(router)
//   return <h1>this is post #{router.query.id}</h1>;
// }

// export default Post
