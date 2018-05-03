module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
      validation: { len: [1, 50] },
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    picurl: {
      type: DataTypes.STRING,
      validation: {
        len: [10, 500],
        isUrl: true,
      },
      defaultValue:
        'http://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg',
    },
  });

  //   Burgers.associate = function(models) {
  //     Burgers.belongsTo(models.Customers, {
  //       foreignKey: {
  //         allowNull: false,
  //       },
  //     });
  //   };
};
