const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING
    },
    platforms:{
      type: DataTypes.STRING
    },
    image:{type: DataTypes.STRING},
    released:{type: DataTypes.STRING},
    rating:{type: DataTypes.FLOAT},
    createdInBD:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{timestamps: false});
};
