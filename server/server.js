   const express = require("express")
   const path = require('path');

   const app = express();


  
   const publicPath = path.join('__dirname', '../public')
   const port = process.env.PORT | 3000

   app.use(express.static(publicPath));


   console.log(__dirname + '/../public')
    console.log(publicPath);

app.listen(port, () => {
    console.log('Server is up and running');
})
