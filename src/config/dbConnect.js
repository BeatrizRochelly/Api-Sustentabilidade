import mongoose from "mongoose";

async function conectaNaDataNase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDataNase;
