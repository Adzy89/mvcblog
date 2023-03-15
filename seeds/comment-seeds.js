const { Comment } =require ('../models');
const commentData = 
[
    {
        user_id: 3,
        blog_id: 3,
        comment_text: "Super Useful and helped me survive it"
    },
    {
        user_id: 1,
        blog_id: 3,
        comment_text: "Yeah I think you need to add more points"
    },
    {
        user_id: 2,
        blog_id: 3,
        comment_text: "Sounds like you didnt survive"
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments