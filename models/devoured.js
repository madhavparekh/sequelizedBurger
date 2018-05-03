module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Devoured', {
  });

  Devoured.associate = function(models) {
    Devoured.hasMany(models.Burgers);
  };
  Devoured.associate = function(models) {
    Devoured.hasMany(models.Customers);
  };
};
