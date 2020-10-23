import React from "react";
import { Global } from "@emotion/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import routes from "./Router.routes";
import LandingPage from "../pages/LandingPage/LandingPage";
import globalStyles from "../styles/Global";
import FindBreeds from "../pages/FindBreeds/FindBreeds";
import AllPets from "../pages/AllPets/AllPets";
import PetsDetail from "../pages/PetsDetail/PetsDetail";
import PetShop from "../pages/PetShop/PetShop";
import AdoptionForm from "../pages/AdoptionForm/AdoptionForm";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import SearchPage from "../pages/searchPage/searchPage";
import AboutMe from "../pages/AboutMe/AboutMe";
import AdoptedHistory from "../pages/AboutMe/AdoptedHistory/AdoptedHistory";
import StatusRequest from "../pages/AboutMe/StatusRequest/StatusRequest";
import CategoryPet from "../pages/CategoryAllPets/CategoryAllPets";
import BreedByCategory from "../pages/BreedByCategory/BreedByCategory";
import PetByBreed from "../pages/PetByBreed/PetByBreed";
import PetCollection from "../pages/PetCollection/PetCollection";
import ShoppingCart from "../pages/Cart/ShoppingCart/ShoppingCart";
import AdoptionFeeCart from "../pages/Cart/AdoptionFeeCart/AdoptionFeeCart";
import CartPaymentLoading from "../pages/PaymentStatus/ShopPayment";
import AdoptionFeePaymentLoading from "../pages/PaymentStatus/AdoptionFeePayment";

const Router = () => (
    <BrowserRouter>
        <Global styles={globalStyles} />
        <Switch>
            <Route exact path={routes.HOME} component={LandingPage} />
            <Route exact path={routes.ALLPETS} component={AllPets} />
            <Route exact path={routes.ADOPTIONFORM} component={AdoptionForm} />
            <Route exact path={routes.ALLBREEDS} component={FindBreeds} />
            <Route exact path={routes.SEARCHPAGE} component={SearchPage} />
            <Route exact path={routes.PETSDETAIL} component={PetsDetail} />
            <Route
                exact
                path={routes.STATUSREQUEST}
                component={StatusRequest}
            />
            <Route
                exact
                path={routes.ADOPTEDHISTORY}
                component={AdoptedHistory}
            />
            <Route exact path={routes.PETSHOP} component={PetShop} />
            <Route
                exact
                path={routes.PRODUCTDETAIL}
                component={ProductDetail}
            />
            <Route exact path={routes.CATEGORYPET} component={CategoryPet} />
            <Route exact path={routes.ABOUTME} component={AboutMe} />
            <Route
                exact
                path={routes.BREEDBYCATEGORY}
                component={BreedByCategory}
            />
            <Route exact path={routes.PETBYBREED} component={PetByBreed} />
            <Route
                exact
                path={routes.PETCOLLECTION}
                component={PetCollection}
            />
            <Route exact path={routes.ADOPTIONFEEPAYMENTLOADING} component={AdoptionFeePaymentLoading} />
            <Route exact path={routes.SHOPPINGCART} component={ShoppingCart} />
            <Route
                exact
                path={routes.CARTPAYMENTLOADING}
                component={CartPaymentLoading}
            />
            <Route exact path={routes.ADOPTIONFEECART} component={AdoptionFeeCart} />
            <Route exact path={routes.ADOPTIONFEEPAYMENTLOADING} component={AdoptionFeePaymentLoading} />
        </Switch>
    </BrowserRouter>
);

export default Router;
