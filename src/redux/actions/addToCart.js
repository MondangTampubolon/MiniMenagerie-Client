export const addToCart = (id) => {
    window.location.reload();

    return {
        type: "ADD_TO_CART",
        id: id,
    };
};
