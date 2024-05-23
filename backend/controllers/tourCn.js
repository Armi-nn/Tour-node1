import fs from "fs";
export const tourList = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

export const getAllTour = (req, res) => {
  res.status(200).json({ data: tourList, status: "success" });
};

export const addTour = (req, res) => {
  const newTour = req.body;
  if (!newTour.name || !newTour.price || !newTour.startDates) {
    res
      .status(400)
      .json({ massage: "name and price and startDates is required" });
  } else {
    const newId = tourList.at(-1).id + 1;
    const addEl = { id: newId, newTour };
    const allNewTour = [...tourList, addEl];
    fs.writeFile(
      "./data/tours-simple.json",
      JSON.stringify(allNewTour),
      (err) => {
        return res.status(200).json({ data: addEl, status: "success" });
      }
    );
  }
};

export const getOneTour = (req, res) => {
  const { id } = req.params;
  let data;
  tourList.map((e) => {
    if (e.id == id) {
      data = e;
    }
  });
  return res.status(200).json({ data, status: "success" });
};

export const updateTour = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const bodyArray = Object.entries(body);
  let tourUpdate;
  const allNewTour = tourList.map((item) => {
    if (item.id == id) {
      bodyArray.map((keyValueObj) => {
        item[keyValueObj[0]] = keyValueObj[1];
      });
      return item;
      tourUpdate = item;
    }
    return item;
  });
  fs.writeFile("./data/tours-simple.json",JSON.stringify(allNewTour),(err)=>{
    return res.status(201).json({massage:'tour update successfully',data:tourUpdate,status:'success'})
  });
};

export const deleteTour = (req,res) => {
  const { id } = req.params;
  const allNewTour = tourList.filter((e) => {
    if (e.id == id) {
      return false;
    }
    return true;
  });
  fs.writeFile(
    "./data/tours-simple.json",
    JSON.stringify(allNewTour),
    (err) => {
      return res.status(201).json({ massage: "tour delete successfully",status:'success' });
    }
  );

  
};
