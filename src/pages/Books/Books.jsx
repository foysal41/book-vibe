import React, { useContext } from "react";
import { BookContext } from "../../context/Bookprovider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {
  const { storeBooks, wishList } = useContext(BookContext);
 

  return (
    <div className="container mx-auto my-3">

      <div className="bg-[#F7F8F9] py-2 px-3 mb-5"> 
      <p>You have <span className="text-[#4AB584] text-xl font-semibold">read - {storeBooks.length}</span> book and <span className="text-[#4AB584] text-xl font-semibold">wishlist - {wishList.length}</span> book. </p>
      
      </div>
     


      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList></ListedReadList>
    </TabPanel>
    <TabPanel>
      <ListedWishList></ListedWishList>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Books;
