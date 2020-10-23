export const product = {};

export const cart = {
    cart: 0,
};

export const addToCartReducer = (state = product, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let products = JSON.parse(localStorage.getItem("products"));
            let productById = products.find((item) => {
                return action.id === item._id;
            });

            let cart = JSON.parse(localStorage.getItem("cartProduct")) || [];
            let qty = { quantity: 1 };
            productById = { ...productById, ...qty };

            cart.push(productById);

            const mergeDuplicateProduct = new Map(
                cart.map((object) => [object._id, { ...object, quantity: 0 }])
            );
            for (const { _id } of cart)
                mergeDuplicateProduct.get(_id).quantity++;

            const newCart = Array.from(mergeDuplicateProduct.values());

            localStorage.setItem("cartProduct", JSON.stringify(newCart));

            return {
                ...state,
                product: { stock: productById.stock - 1, ...productById.stock },
                cart: cart,
            };
        default:
            return state;
    }
};
