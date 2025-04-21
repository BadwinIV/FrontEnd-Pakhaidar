import Greeting from './components/Greeting';
import ProductList from './components/productList';
import Mahasiswa from './components/mahasiswa';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Belajar React Frontend</h1>
        <Greeting name="Pinarak Para Mahasiswa Sedoyo" />
        <ProductList />
        <Mahasiswa nama="AdamMaulidan" nrp="3124522013" prodi="TeknikInformatika" />
        <PostList />
    </div>
 );
}
export default App;