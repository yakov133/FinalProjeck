const demo_Diffculty = [];
const demo_Categories = [];
const demo_User_Category = [];
const demo_Users = [];
const demo_Comments = [];
const demo_Comments_Images = [];
const demo_Diets = [];
const demo_Recipe_Diet = [];
const demo_Recipe_Category = [];
const demo_Recipes = [];
const demo_Images = [];
const demo_Notes = [];
const demo_Measuring_Units = [];
const demo_Ingredients = [];
const demo_Recipe_Ingredients = [];

async function getRecipeIngredients() {
  const ingredients = await Promise.resolve([
    {
      id: 1,
      ingredientId: 1,
      MeasuringUnitID: 2,
      quantity: 3,
      shap: "kachuch",
    },
    {
      id: 1,
      ingredientId: 2,
      MeasuringUnitID: 1,
      quantity: 1,
      shap: null,
    },
  ]);
  return ingredients;
}
async function getIngredients() {
  const ingredients = await Promise.resolve([
    {
      id: 1,
      note: "sugar",
    },
    {
      id: 2,
      note: "salt",
    },
  ]);
  return ingredients;
}
async function getMeasuringUnits() {
  const measuringUnits = await Promise.resolve([
    {
      id: 1,
      note: "spoon",
    },
    {
      id: 2,
      note: "cup",
    },
  ]);
  return measuringUnits;
}

async function getNotes() {
  const notes = await Promise.resolve([
    {
      id: 1,
      recipeId: 1,
      note: "lala",
    },
  ]);
  return notes;
}
function setNotes(Note) {
  demo_Notes.push(Note);
}

async function getImages() {
  const images = await Promise.resolve([
    {
      id: 1,
      recipeId: 1,
      imageUrl: "http...",
      title: "nice recipe",
      alt: "",
    },
  ]);
  return images;
}
function setImages(Image) {
  demo_Images.push(Image);
}

async function getALLRecipes() {
  const recipes = await Promise.resolve([
    {
      id: 1,
      userId: 1,
      name: "pancakes",
      title: "home panckes",
      description: "lala",
      diffcultyId: 1,
      views: 10,
      date: "1/1/2020",
      sourceName: "wawa",
      sourceUrl: null,
      servings: 2,
      prepTimeMins: 15,
      isPrivate: false,
    },
    {
      id: 2,
      userId: 1,
      name: "pancakes",
      title: "home panckes",
      description: "lala",
      diffcultyId: 1,
      views: 10,
      date: "1/1/2020",
      sourceName: "wawa",
      sourceUrl: null,
      servings: 2,
      prepTimeMins: 15,
      isPrivate: false,
    },
  ]);
  return recipes;
}
function setRecipe(newRecipe) {
  demo_Recipes.push(newRecipe);
}

async function getDiets() {
  const diet = await Promise.resolve([
    {
      id: 1,
      name: "Sweet pastries",
    },
  ]);
  return diet;
}
function setRecipeDiets(recipeDiets) {
  demo_Recipe_Diet.push(recipeDiets);
}

async function getCommentsImages() {
  const commentsImages = await Promise.resolve([
    {
      id: 1,
      userId: 1,
      commentId: 1,
      imageUrl: "http...",
      title: "nice recipe",
      alt: "",
    },
  ]);
  return commentsImages;
}
function setCommentsImages(commentImage) {
  demo_Comments_Images.push(commentImage);
}

async function getComments() {
  const comments = await Promise.resolve([
    {
      id: 1,
      userId: 1,
      commentContent: "nice recipe",
      commentDate: new Date("December 17, 1995 03:24:00"),
    },
    {
      id: 2,
      userId: 2,
      commentContent: "wow looks good",
      commentDate: new Date("December 17, 1996 03:24:00"),
    },
  ]);
  return comments;
}
function setComments(userComment) {
  demo_Comments.push(userComment);
}

async function getCategory() {
  const category = await Promise.resolve([
    {
      id: 1,
      category: "meat",
    },
    {
      id: 2,
      category: "vegan",
    },
  ]);
  return category;
}
function setUserCategory(userCategory) {
  demo_User_Category.push(userCategory);
}
function setRecipeCategory(recipeCategory) {
  demo_Recipe_Category.push(recipeCategory);
}

async function getDifficulties() {
  const difficulties = await Promise.resolve([
    {
      id: 1,
      difficultyLevelName: "Beginner",
    },
    {
      id: 2,
      difficultyLevelName: "Easy",
    },
    {
      id: 3,
      difficultyLevelName: "Medium",
    },
    {
      id: 4,
      difficultyLevelName: "Expert",
    },
  ]);
  return difficulties;
}
function setDifficulties(UserDiffculty) {
  demo_Diffculty.push(UserDiffculty);
}

async function getUsers() {
  const users = await Promise.resolve([
    {
      id: 1,
      userName: "jacob",
      fullName: "yakov kassa",
      password: "yakov123",
      email: "yakov133@gmail.com",
      isAdmin: true,
    },
    {
      id: 2,
      userName: "David",
      fullName: "david kassa",
      password: "lala",
      email: "yakov133@gmail.com",
      isAdmin: false,
    },
  ]);
  return users;
}
function setUsers(User) {
  demo_Users.push(User);
}

function login(User) {
  let AllUsers = getUsers();

  for (let user in AllUsers) {
    if (user.email === User.eamil) {
      return user;
    }
  }
  return null;
}
export {
  getCategory,
  getCommentsImages,
  getComments,
  getDiets,
  getALLRecipes,
  getDifficulties,
  getImages,
  getMeasuringUnits,
  getIngredients,
  getUsers,
  getNotes,
  getRecipeIngredients
};
