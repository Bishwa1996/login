const router = require("express").Router();
let Login = require("../model/login.model");

router.post("/api/v1/session", async (req, res) => {
  try {
    const user = new Login(req.body);
    const login = await user.save();
    res.status(201).send(login);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/api/v1/session", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteLogin = await Login.findByIdAndDelete(_id, req.body);
    res.end(deleteLogin);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;