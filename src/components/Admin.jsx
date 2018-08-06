import React, {Component} from 'react';
import { withRouter } from 'react-router';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import AdminColumn from './AdminColumn.jsx';
import AdminSideBar from './AdminSideBar.jsx'
import {post, get} from 'axios';

const url = "http://192.168.88.120:7000"
// async function getData(url){
//   const response = await get(url);
//   return response.data;
// }

function getData(url){
  get(url)
  .then(response => response.data)
  .then(data => {
    return data
  });
}

function getProducts(){
  return getData(url + '/products');
}
function getStores(){
  return getData(url + '/stores');
}
function getPrices() {
  return getData(url + '/prices');
}

function groupBy(arr, keyGetter){
  const output = {};
  arr.forEach((item) => {
    const key = keyGetter(item);
    if(output[key]) {
      output[key].push(item);
    } else {
      output[key] = [item];
    }
  })
  return output;
}
class Admin extends Component {

  componentWillMount(){

    if(!JSON.parse(localStorage.user).isadmin){
      window.location.href = "/users/"+ JSON.parse(localStorage.user).id;
    } else {
      var adminDashBoard = [];

      (async () => {
        const productsPrms = getProducts();
        const storesPrms = getStores();
        const pricesPrms = getPrices();

        const stores = await storesPrms;
        const storesById = {};
        stores.forEach((store) => {
          storesById[store.id]=store;
        });

        const prices = await pricesPrms;
        const pricesWithStores = prices.map(price => {
          return {
            ...price,
            store: storesById[price.store_id]
          };
        });
        const pricesWithStoresGroupedByProductId = groupBy(pricesWithStores, (price) => price.product_id);

        const products = await productsPrms;
        const productsWithPrices = products.map(product => ({
          ...product,
          prices: pricesWithStoresGroupedByProductId[product.id] || []
        }));
      })();
      // get("http://192.168.88.120:7000/products")
      // .then(response => response.data)
      // .then(products => {
      //   adminDashBoard = products;
      //   get("http://192.168.88.120:7000/stores")
      //   .then(response => response.data)
      //   .then(stores => {
      //     for(var i = 0; i < adminDashBoard.length; i++){
      //       adminDashBoard[i]["stores"] = stores;

      //     }
      //     get("http://192.168.88.120:7000/prices")
      //     .then(response => response.data)
      //     .then(prices => {
            // for(var priceIndex = 0; priceIndex < prices.length; priceIndex++){
            //   var price = prices[priceIndex];

            //   for(var dashboardIndex = 0; dashboardIndex < adminDashBoard.length; dashboardIndex++){
            //     var product = adminDashBoard[dashboardIndex];

            //     if(price.product_id === product.id){
            //       for(var storeIndex = 0; storeIndex < product.stores.length; storeIndex++){
            //         var store = product.stores[storeIndex];

            //         if(price.store_id === store.id && !store.price){
            //           console.log('');
            //           // console.log("Item being inserted", price);
            //           console.log("The store before for item " + product.name + " is:", store);
            //           store.price = price;
            //           // console.log("Item has been inserted", store.price);
            //           // console.log("The store is right now:", store);
            //           console.log('');
            //         }
            //       }
            //     }
            //   }
            // }
            // console.log(adminDashBoard);

            // for(var productIndex = 0; productIndex < adminDashBoard.length; productIndex++){
            //   var product = adminDashBoard[productIndex];
            //   for(var storeIndex = 0; storeIndex < product.stores.length; storeIndex++){
            //     var store = product.stores[storeIndex];
            //     for(var priceIndex = 0; priceIndex < prices.length; priceIndex++){
            //       var price = prices[priceIndex];

            //       if(price.product_id === product.id && price.store_id === store.id){
            //         store["price"] = price
            //       }
            //     }
            //   }
            // }
            // console.log(adminDashBoard);
            // localStorage.setItem("adminList", JSON.stringify(adminDashBoard));
      //     });
      //   });
      // });
    }
  }

  componentWillUnmount(){
    localStorage.removeItem("adminList");
  }

  deleteProduct(productName, productStore){
    console.log(productName, productStore);
  }

  render() {
    if(!JSON.parse(localStorage.user).isadmin){
      return (
        <div></div>
        );
    }

    var i = 0;
    const all_items = JSON.parse(localStorage.adminList).map( item => {
      return item.stores.map( store => {
        i++;
        return (<AdminColumn key={i} deleteProduct={this.deleteProduct.bind(this)} storeName={store.name} productName={item.name} productBrand={item.brand} productPrice={store.price} />)
      })
    });

    return (
      <div>
        <NavBar />
        <main>
        {/* <!-- Page Layout here --> */}
        <div className="row">
          <AdminSideBar />
            <div className="col s12 m8 l9" id="right">
              <h5 className="admin">Dashboard</h5>
              <table>
                <thead>
                  <tr className="table-head">
                    <th>Product</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Store</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {all_items}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Admin);