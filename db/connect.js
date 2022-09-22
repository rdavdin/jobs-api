const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  /**
   * issue the property unique doesn't work. try options below: */
  //  const options = {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   autoIndex: true, //this is the code I added that solved it all
  //   keepAlive: true,
  //   poolSize: 10,
  //   bufferMaxEntries: 0,
  //   connectTimeoutMS: 10000,
  //   socketTimeoutMS: 45000,
  //   family: 4, // Use IPv4, skip trying IPv6
  //   useFindAndModify: false,
  //   useUnifiedTopology: true
  // }

}

module.exports = connectDB
