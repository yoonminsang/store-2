import sequelize, { db } from 'models';
import { CATEGORY_DATA } from 'config/constants';

const { User, Item, Like, Address, Category, Order, Review } = db;

export default async (): Promise<void> => {
  User.belongsToMany(Item, { through: Like });
  User.hasMany(Address);
  User.hasMany(Order);
  Category.hasMany(Item);
  Item.belongsToMany(User, { through: Like });
  Item.belongsTo(Category);
  Item.hasMany(Review);

  await sequelize.sync();

  const rows = await Category.findAll();
  if (!rows.length) {
    await Promise.all(CATEGORY_DATA.map(({ id, name }) => db.Category.create({ id, name })));
    console.info('Category Data Initialized');
  }
};
