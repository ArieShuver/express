import { Router } from "express";

const routerUsers = Router();
const routerAdd = routerUsers;
let users = [{ id: 1, name: "Alice" }];
routerUsers.get("/", (req, res) => {
    res.json({ msg: users });

});
routerAdd.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ msg: "User added", user: users });
});

export { routerAdd, routerUsers };

