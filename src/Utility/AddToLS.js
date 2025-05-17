import { toast } from "react-toastify";

const getLocalStorageToAdd = () => {
  const storageListed = localStorage.getItem("card-list");

  if (storageListed) {
    const storageList = JSON.parse(storageListed);

    return storageList;
  } else {
    return [];
  }
};

const getAddToLocalStorage = (product) => {
  const storageList = getLocalStorageToAdd();
  console.log(product, storageList);

  if (storageList.includes(product)) {
    toast.error("already exists in the card list");
  } else {
    storageList.push(product);
    const storageListed = JSON.stringify(storageList);

    localStorage.setItem("card-list", storageListed);
    toast.success("product add successfully");
  }
};

const getWishlistAddProduct = () => {
  const WishStorage = localStorage.getItem("whish-list");

  if (WishStorage) {
    const storageWishList = JSON.parse(WishStorage);
    return storageWishList;
  } else {
    return [];
  }
};
const getWishListAddToLocalstorage = (product) => {
  const WishStorage = getWishlistAddProduct();
  if (WishStorage.includes(product)) {
    toast.error("already exists in the card list");
  } else {
    WishStorage.push(product);
    const storageWishlist = JSON.stringify(WishStorage);
    localStorage.setItem("whish-list", storageWishlist);
    toast.success("product add successfully");
  }
};
export {
  getLocalStorageToAdd,
  getAddToLocalStorage,
  getWishlistAddProduct,
  getWishListAddToLocalstorage,
};
