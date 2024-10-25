const getData = (app, endPoint, data) => {
  app.get(endPoint, (req, res) => {
    res.json(data);
  });
};

export default getData;
