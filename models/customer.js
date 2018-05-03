module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    burger_name: {
      type: DataTypes.STRING,
      validation: { len: [1, 50] },
      allowNull: false,
    },
  });

  Customers.associate = function(models) {
    Customers.hasMany(models.Burgers);
  };
};
