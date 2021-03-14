import React, {useState, useEffect} from 'react';
import ProductList from '../../components/ProductList';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import SiderMenu from '../../components/SiderMenu';
import { Layout, Row, Col, Breadcrumb, List, Typography  } from 'antd';
import {getCategories, getProductsByCategory} from '../../services/fakestoreService'; 
import {getProducts} from '../../services/productsService';
import {postFavorites} from '../../services/favoritesService'; 
import FavoritesPage from '../favorites';
const { Header, Footer, Sider, Content } = Layout;

const HomePage = ({logout, user}) => {
  const [breadCrumb,setBreadCrumb] = useState(["Home", "FakeStore"]) 
  const [storeKey,setStoreKey] = useState("FakeStore")
  const [products,setProducts] = useState([]) 
  const [searchProducts,setSearchProducts] = useState([]) 
  const [category,setCategory] = useState("") 
  const [categories,setCategories] = useState([]) 
  const [menuKey,setMenuKey] = useState("Home") 

  useEffect(()=>{
    async function fetchData(){
      if(category){
        const request = await getProductsByCategory(category);
        setProducts(request);
        setSearchProducts(request);
        return request;
      }else{
        const request = await getProducts(user.id, storeKey);
        setProducts(request);
        setSearchProducts(request);
        return request;
      }
    }
    fetchData();
  },[category])

  useEffect(()=>{
    async function fetchData(){
        const request = await getCategories();
        setCategories(request);
        return request;
    }
    fetchData();
  },[])

  const setFavorite = async (product) => {
    var response = await postFavorites(user.id, storeKey, product);
    if(product.favoriteId){
      setProducts(products.map(item => item === product ? {...item, favoriteId: undefined} : item));
      setSearchProducts(searchProducts.map(item => item === product ? {...item, favoriteId: undefined} : item));
    }else{
      setProducts(products.map(item => item === product ? {...item, favoriteId: response._id} : item));
      setSearchProducts(searchProducts.map(item => item === product ? {...item, favoriteId: response._id} : item));
    }
  } 
  const changePage = (menuHeaderKey) => {
    setMenuKey(menuHeaderKey);
    if(menuHeaderKey === "Home"){
      setBreadCrumb([menuHeaderKey,"FakeStore"]);
    }else{
      setBreadCrumb([menuHeaderKey]);
    }
  } 
  const changeStore = (storeKey) => {
    setStoreKey(storeKey);
  } 
  const changeCategory = (category) => {
    setCategory(category);
  } 
  
  const searching = (search) => {
    const dataSearch = products.filter((product) => {
      return product.category.includes(search) || 
            product.title.includes(search) || 
            product.description.includes(search)
    }); 
    setSearchProducts(dataSearch);
  } 

  const renderPage = () => {
    switch(menuKey){
      case "Favorites":
        return <FavoritesPage user={user} setFavorite={setFavorite}/>
      default:
        return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <SiderMenu changeStore={changeStore} changeCategory={changeCategory} categories={categories} searching={searching}/>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ProductList productList={searchProducts} setFavorite={setFavorite}/>
          </Content>
        </Layout>
        )
    }
  } 
  
  const renderBreadcrumb = () => {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadCrumb.map((bc, index) => {
          return <Breadcrumb.Item key={index}>{bc}</Breadcrumb.Item>
        })}
      </Breadcrumb>
    )
  }

  return (
    <Layout >
      <HeaderComponent logout={logout} user={user} changePage={changePage}/>
      <Content style={{ padding: '0 50px' }}>
        { renderBreadcrumb() }
        { renderPage() }
      </Content>
      <FooterComponent/>
    </Layout>
  )
}
export default HomePage;
