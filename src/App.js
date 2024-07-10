import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack'
import Header from './components/Header';
import Sidebar from './components/Sidebar'


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
          <Stack direction="horizontal">
            <Sidebar/>
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
          </Stack>
        </Container>
    </Container>
   );
}