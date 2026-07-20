export const dishes = [
    {
        id: 1,
        slug: "butter-chicken",
        title: "Butter Chicken",
        category: "North Indian",
        price: 349,
        rating: 4.9,
        reviews: 248,
        bestseller: true,
        veg: false,
        spicy: "Medium",
        preparationTime: "25 min",
        description: "Tender grilled chicken simmered in a rich buttery tomato gravy finished with fresh cream and aromatic Indian spices.",
        
        images: [
            "/images/dishes/butter-chicken.png",
            "/images/dishes/butter-chicken.png",
            "/images/dishes/butter-chicken.png",
        ],

        ingredients: [
            "Chicken",
            "Butter",
            "Tomatoes",
            "Fresh Cream",
            "Kasuri Methi",
            "Indian Spices",
        ],

        nutrition: {
            calories: 540,
            protein: "36g",
            carbs: "22g",
            fat: "31g",
        },

        chefNote:"Prepared using our signature slow-cooked tomato gravy with freshly roasted spices.",
    },
    {
        id: 2,
        slug: "paneer-tikka",
        title: "Paneer Tikka",
        category: "North Indian",
        price: 279,
        rating: 4.8,
        reviews: 193,
        bestseller: false,
        veg: true,
        spicy: "Mild",
        preparationTime: "20 min",

        description: "Char-grilled paneer cubes marinated in creamy yogurt and authentic tandoori spices.",

        images: [
            "/images/dishes/paneer-tikka.png",
            "/images/dishes/paneer-tikka.png",
            "/images/dishes/paneer-tikka.png",
        ],

        ingredients: [
            "Paneer",
            "Yogurt",
            "Capsicum",
            "Onion",
            "Tandoori Masala",
        ],

        nutrition: {
            calories: 420,
            protein: "24g",
            carbs: "16g",
            fat: "28g",
        },

        chefNote: "Cooked in a traditional clay tandoor for an authentic smoky flavour.",
    },

    {
        id: 3,
        slug: "chicken-biryani",
        title: "Chicken Biryani",
        category: "Biryani",
        price: 399,
        rating: 4.9,
        reviews: 351,
        bestseller: true,
        veg: false,
        spicy: "Medium",
        preparationTime: "30 min",
        description: "Traditional dum biryani layered with fragrant basmati rice, saffron and tender chicken.",

        images: [
            "/images/dishes/biryani.png",
            "/images/dishes/biryani.png",
            "/images/dishes/biryani.png",
        ],

        ingredients: [
            "Chicken",
            "Basmati Rice",
            "Saffron",
            "Mint",
            "Fried Onion",
            "Biryani Masala",
        ],

        nutrition: {
            calories: 690,
            protein: "42g",
            carbs: "58g",
            fat: "30g",
        },

        chefNote: "Slow-cooked using the traditional dum method for maximum aroma.",
    },

    {
        id: 4,
        slug: "dal-makhani",
        title: "Dal Makhani",
        category: "North Indian",
        price: 249,
        rating: 4.8,
        reviews: 174,
        bestseller: false,
        veg: true,
        spicy: "Mild",
        preparationTime: "20 min",
        description: "Creamy slow-cooked black lentils enriched with butter and fresh cream.",

        images: [
            "/images/dishes/dal-makhani.png",
            "/images/dishes/dal-makhani.png",
            "/images/dishes/dal-makhani.png",
        ],

        ingredients: [
            "Black Lentils",
            "Kidney Beans",
            "Butter",
            "Cream",
            "Tomatoes",
        ],

        nutrition: {
            calories: 390,
            protein: "17g",
            carbs: "34g",
            fat: "18g",
        },

        chefNote: "Slow simmered for over eight hours for a rich creamy texture.",
    },

    {
        id: 5,
        slug: "masala-dosa",
        title: "Masala Dosa",
        category: "South Indian",
        price: 229,
        rating: 4.7,
        reviews: 221,
        bestseller: true,
        veg: true,
        spicy: "Medium",
        preparationTime: "18 min",
        description: "Golden crispy dosa stuffed with spicy potato masala served with chutneys and sambar.",

        images: [
            "/images/dishes/masala-dosa.png",
            "/images/dishes/masala-dosa.png",
            "/images/dishes/masala-dosa.png",
        ],

        ingredients: [
            "Rice Batter",
            "Potatoes",
            "Mustard Seeds",
            "Curry Leaves",
            "Sambar",
        ],

        nutrition: {
            calories: 420,
            protein: "11g",
            carbs: "62g",
            fat: "12g",
        },

        chefNote: "Made fresh to order using naturally fermented batter.",
    },

    {
        id: 6,
        slug: "hakka-noodles",
        title: "Hakka Noodles",
        category: "Chinese",
        price: 219,
        rating: 4.6,
        reviews: 138,
        bestseller: false,
        veg: true,
        spicy: "Medium",
        preparationTime: "15 min",
        description: "Classic Indo-Chinese stir-fried noodles tossed with crunchy vegetables and sauces.",

        images: [
            "/images/dishes/hakka-noodles.png",
            "/images/dishes/hakka-noodles.png",
            "/images/dishes/hakka-noodles.png",
        ],

        ingredients: [
            "Noodles",
            "Cabbage",
            "Carrot",
            "Capsicum",
            "Soy Sauce",
        ],

        nutrition: {
            calories: 470,
            protein: "13g",
            carbs: "61g",
            fat: "18g",
        },

        chefNote: "Prepared on high flame for the authentic wok flavour.",
    },

    {
        id: 7,
        slug: "gulab-jamun",
        title: "Gulab Jamun",
        category: "Desserts",
        price: 149,
        rating: 4.8,
        reviews: 201,
        bestseller: false,
        veg: true,
        spicy: "None",
        preparationTime: "8 min",
        description: "Soft milk dumplings soaked in warm cardamom and rose-flavoured sugar syrup.",

        images: [
            "/images/dishes/gulab-jamun.png",
            "/images/dishes/gulab-jamun.png",
            "/images/dishes/gulab-jamun.png",
        ],

        ingredients: [
            "Milk Solids",
            "Sugar",
            "Cardamom",
            "Rose Water",
        ],

        nutrition: {
            calories: 310,
            protein: "6g",
            carbs: "42g",
            fat: "12g",
        },
        
        chefNote: "Served warm for the perfect melt-in-the-mouth experience.",
    },
];