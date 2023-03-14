const sequelize = require('../config/connection');
const {User, Blog, Comment, } = require('../models');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const user = await User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  });

  const blog = await Blog.bulkCreate(blogData, {
    returning: true,
   
  });

  const comment = await Comment.bulkCreate(commentData, {
    returning: true, 
  });
 
  process.exit(0);
};

seedDatabase();


