const app = Vue.createApp({
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    name: "Herbal Tea",
                    description: "A soothing herbal tea for relaxation.",
                    price: 5.99,
                    image: "tea.jpg",
                },
                {
                    id: 2,
                    name: "Vitamin C Capsules",
                    description: "Boost your immune system with these capsules.",
                    price: 12.99,
                    image: "vitamin-c.jpg",
                },
                // Add more products here...
            ],
        };
    },
    methods: {
        addToCart(product) {
            // Implement cart functionality here...
            alert(`Added ${product.name} to cart!`);
        },
    },
});

app.mount("#featured-products-app");
