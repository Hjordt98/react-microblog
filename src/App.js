import Container from 'react-bootstrap/Container';
import Header from './components/Header';

export default function App() {
  const posts = [
    {
      id: 1,
      text: 'Hello, World',
      timestamp: 'a minute a go',
      author: {
        username: 'susan',
      },
    },
    {
      id: 2,
      text: 'Second Post',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      },
    },
  ];

  return(
      <Container fluid className='App'>
        <Header/>
        <Container>
          {posts.length === 0 ?
            <p>There are no blog postsd</p> 
          :
            posts.map (post => {
              return (
                <p key={post.id}>
                  <b>{post.author.username}</b> &mdash; {post.timestamp}
                  <br/>
                  {post.text}
                </p>  
              );
            })
          }
        </Container>
    </Container>
   );
}