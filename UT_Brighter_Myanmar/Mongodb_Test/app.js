const express = require("express"),
  app = express();

app.use(express.json());

const {connectDb} = require('./utils/db');

const init = () => {
  app.listen(3000, () => {
      console.clear();
      console.log("Server started on port 3000");
    });
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
app.use('/users',userRoute);
app.use('/products',productRoute);
}
connectDb(err=> {
  if (!err) {
    init();
  } else {
    console.log("Connection Error"+err);
  }
});
