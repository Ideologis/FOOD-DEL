import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory ] = useState("All");
  
  return (
    <div>
      <Header />
      <ExploreMenu onCatergory={category} onSetCatergory={setCategory} />
      <FoodDisplay onCatergory={category} />
      <AppDownload />
    </div>
  );
}

export default Home
