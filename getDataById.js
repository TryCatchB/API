const getDataById = (app, endPoint, data) => {
  app.get(endPoint, (req, res) => {
    const id = req.params.id;
    const item = data.find((item) => item.id === id);

    item
      ? res.json(item)
      : res.status(404).json({ message: "Project not found" });
  });
};

export default getDataById;
