const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err){ 
        console.error (err);
        throw err;
    }
    console.log(data);   
  });
  return data;
};

const getCarOneDB = (id) => {
    let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
      if (err){ 
          console.error (err);
          throw err;
      }
      console.log(data);   
    });
    if (!id) throw 'Нет нужного параметра'
    return data[id];
  };

module.exports = { getCarDB, getCarOneDB };
