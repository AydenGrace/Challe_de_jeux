const router = require("express").Router();

const Apis = [
  {
    require: require("./cats"),
    url: "/cats",
    name: "Cats",
  },
  {
    require: require("./rooms"),
    url: "/rooms",
    name: "Rooms",
  },
  {
    require: require("./users"),
    url: "/users",
    name: "Users",
  },
];

// const apiCats = require("./cats");
// const apiRooms = require("./rooms");
// const apiUsers = require("./users");

Apis.map((item) => {
  router.use(item.url, item.require);
});

// router.use("/cats", apiCats);
// router.use("/rooms", apiRooms);
// router.use("/users", apiUsers);

router.get("/", (req, res) => {
  //   res.send("API");
  res.send(
    Apis.map((item) => {
      const a = document.createElement("a");
      a.href = `/api${item.url}`;
      a.innerText = item.name;
      return a;
    })
  );
});

module.exports = router;
