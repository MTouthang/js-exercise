const { normalize } = require("path");

/**
 * a. Create a function called singUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 * b. Create a function called signIn which allows user to sign in to the application
 * c. The products array has three elements and each of them has six properties.
 *      a. create a function called rateProduct which rates the product
 *      b. create a function called averageRating which calculate the average rating of a product.
 * d. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 */
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// signup account - problem (a)
function signUp(data) {
  for (let user of data) {
    if (user.isLoggedIn) {
      console.log("You already have a registered Account");
    } else {
      console.log("please continue to register...");
    }
  }
}

signUp(users);

// signin account - problem (b)
function signin(data) {
  for (let user of data) {
    if (user.isLoggedIn) {
      console.log("You have signin successfully");
    } else {
      console.log("signin unsuccessful !");
    }
  }
}
signin(users);

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// add rating ---
function rateProduct(products, id, rating) {
  for (let product of products) {
    if (product._id === id) {
      product.ratings.push(rating);
    }
  }
}

rateProduct(products, "aegfal", { userId: "zwf8md", rate: 4 });
console.log(products);

// calculate average rating ---
function averageRating(products, productId) {
  let rateTotal = 0;
  let noRating = 0;
  for (let product of products) {
    if (product._id === productId) {
      let ratings = product.ratings;
      //   console.log("Ratings-", ratings);
      for (let rating of ratings) {
        // console.log("rating", rating.rate);
        rateTotal += rating.rate;
        noRating += 1;
      }
    }
  }
  //   console.log(`Average rating of this product- ${rateTotal / noRating}`);
  return rateTotal / noRating;
}

// averageRating(products, "aegfal");

// for (let prop of products) {
//   averageRating(products, prop._id);
// }

const allProductsRating = products.map((e) => {
  return averageRating(products, e._id);
});

console.log("Ratings -", allProductsRating);

// create likeProduct --
const likeProduct = products.map((e) =>
  e.likes == "" ? (e.likes = "fg12cy") : (e.likes = "")
);
console.log(likeProduct);
