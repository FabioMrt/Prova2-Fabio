module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    nome: DataTypes.STRING,
    estado: DataTypes.STRING,
    site: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })

  return Team
}