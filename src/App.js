import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import Post from './components/Posts'


export default function App() {
  return(
      <Container fluid className='App'>
        <Header/>
        <Body sidebar>
          <Post/>
        </Body>
    </Container>
   );
}