import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ msg: "hi from /greet" });
    
});

export default router;
