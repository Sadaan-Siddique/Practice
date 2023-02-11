import React from 'react';
import { UseEffect } from './components/Practice';
import './app.css'
import Axios from './components/Axios';
import AxiosCoinGecko from './components/AxiosCoinGecko';
import { Link } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import Practice from './components/Practice';
import Contact from './components/Contact';
import About from './components/About';
import Others from './components/Others';
import CoinData from './components/CoinData';
import UseParams from './components/UseParams';
import AxiosChild from './components/AxiosChild';
function App() {
  // React Hooks

  // JS

  // Html
  return (
    <>
      <nav>
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/">Home</Link>:
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/about">About</Link>:
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/contact">Contact</Link>:
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/others">Others</Link>:
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/coin">CoinGecko</Link>:
        <Link style={{ color: 'black', textDecoration: 'none' }} to="/axios">GitAPI</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/others" element={<Others />} />
        <Route path="/coin" element={<AxiosCoinGecko />} />
        <Route path="/data" element={<CoinData />} >
          <Route path=":params" element={<UseParams />} />
        </Route>
        <Route path="/axios" element={<Axios />} />
        <Route path="/axios/:urlData" element={<AxiosChild />} />
        <Route path="*" element={<div className='text-center mt-5'><h1>Invalid URL </h1><h3>404 Page not found</h3></div>} />
      </Routes>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iure, ex nihil ratione ab accusamus mollitia ea ipsum saepe eligendi reiciendis impedit voluptatum numquam, distinctio labore laudantium! Distinctio quibusdam earum ipsum ex nostrum quas corrupti, saepe excepturi delectus vel id corporis nesciunt perferendis, alias dolor veniam aspernatur tempora et deleniti ipsam laudantium fugiat possimus. Eum quo ea a dolore corporis provident labore animi debitis asperiores non molestias dicta pariatur harum perspiciatis deleniti maiores amet esse quasi nihil magni, ab sapiente magnam blanditiis! Consequatur quasi reprehenderit voluptas voluptatibus iure rem. Eum, repellendus reprehenderit rerum cupiditate reiciendis dolorem asperiores laborum fugiat quos ut fugit veritatis possimus et exercitationem id? Esse nesciunt optio veniam blanditiis eius reiciendis distinctio vero vel alias praesentium ea, aperiam fuga commodi suscipit labore sequi voluptatum! Eius, itaque ipsam cumque ratione totam porro blanditiis. Optio excepturi dolor aliquam dolorum odit voluptatibus perferendis, ab nisi, voluptatem sit perspiciatis. Ea quam doloremque repudiandae optio quibusdam sit temporibus, veritatis nulla. Nobis optio necessitatibus sed eius commodi? Ipsam accusamus repellat tempore culpa eveniet dignissimos asperiores provident excepturi itaque impedit sint suscipit temporibus repudiandae quidem molestiae amet odio officia nisi voluptatibus, omnis placeat. Praesentium saepe, fuga recusandae culpa doloremque reiciendis voluptatum hic consequuntur ex, iusto voluptatibus! Ex rem quibusdam mollitia assumenda, nemo nulla quas libero aliquam quis, minus delectus consectetur tenetur voluptate velit repellendus excepturi inventore nostrum exercitationem deleniti, aperiam est. Quibusdam assumenda labore enim sunt hic accusamus sapiente quam aliquid tempore mollitia minus vero architecto quos voluptate illo, obcaecati ratione nam in, consequuntur laboriosam magnam dolore natus ex. Obcaecati mollitia animi nisi necessitatibus tempora, tempore autem maxime perferendis temporibus. Assumenda laboriosam iste, minima maiores illo dolorum quod nam excepturi ullam, repudiandae hic harum nisi aut quae rerum, doloremque ab ad alias veritatis dolorem. Accusantium eligendi veniam quisquam, vitae reprehenderit magni quos eaque natus in atque dolor sed earum perspiciatis facilis aspernatur soluta, esse laborum cumque voluptas enim repudiandae libero minima eius. Facere incidunt possimus dolorem atque sed provident ipsam quidem repellendus optio rem error blanditiis, sint iste facilis molestias fuga corrupti aliquid impedit ut assumenda. Sapiente, repellendus ut at voluptatum reprehenderit unde, esse, eveniet vitae in ducimus quos odio aliquid! Laudantium, voluptatem! Laboriosam excepturi exercitationem recusandae, nobis fugit eaque molestias optio totam officia consectetur esse quaerat culpa minima voluptate quae placeat corporis corrupti necessitatibus architecto officiis omnis? Excepturi deleniti libero voluptatibus. Ipsum adipisci mollitia pariatur doloribus laboriosam sed ex ducimus. Assumenda aperiam nobis praesentium esse, eius nulla id amet molestiae quaerat aspernatur accusamus placeat veniam. Laboriosam molestias maxime distinctio, cupiditate omnis unde illum officiis recusandae minima similique, in sunt et incidunt doloribus, cumque necessitatibus? Quasi corporis facilis fugiat harum, eos perspiciatis alias veritatis. Totam amet voluptatum quasi, nobis officia eum doloremque laborum nesciunt nostrum quas quod, quia perferendis numquam maxime deleniti cumque consequuntur blanditiis optio minima vel architecto impedit ea! Delectus esse totam dolore, culpa soluta laudantium, exercitationem vitae iste voluptatem, eligendi nam cum asperiores provident placeat! Deserunt dicta laboriosam sed nemo odit rerum atque. Voluptatibus laboriosam maxime voluptate mollitia. Quod, corrupti sapiente.</p>


    </>
  );
}
export default App; 