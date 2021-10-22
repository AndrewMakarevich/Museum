const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nickname: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    avatar: { type: DataTypes.STRING, allowNull: true },
    is_activated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activation_key: { type: DataTypes.STRING }
});
const UserToken = sequelize.define('user_token', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    refresh_token: { type: DataTypes.STRING }
});
Slider = sequelize.define('slider', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

SliderPicture = sequelize.define('slider_picture', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false }
});
SliderTroughTable = sequelize.define('slider_trough_table', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

VirtualTour = sequelize.define('virtual_tour', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    header: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
});

PictureExplore = sequelize.define('picture_explore', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    header: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    before_img: { type: DataTypes.STRING, allowNull: false },
    after_img: { type: DataTypes.STRING, allowNull: false }
});

VideoJourney = sequelize.define('video_journey', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    poster: { type: DataTypes.STRING, allowNull: false },
    video: { type: DataTypes.STRING, allowNull: false },
});

ArtGallery = sequelize.define('art_gallery', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

ArtGalleryPicture = sequelize.define('art_gallery_picture', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false }
});
ArtGalleryTroughtTable = sequelize.define('art_gallery_trough_picture', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT, allowNull: false },
});

CommentLike = sequelize.define('comment_like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

ReplyComment = sequelize.define('reply_comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT, allowNull: false },
});

ReplyCommentLike = sequelize.define('reply_comment_like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});
TicketType = sequelize.define('ticket_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.STRING, allowNull: false, unique: true },
    coefficient: { type: DataTypes.FLOAT, allowNull: false }
});
TicketCategory = sequelize.define('ticket_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false }
});
OrderInput = sequelize.define('order_input', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, unique: true, allowNull: false },
    placeholder: { type: DataTypes.STRING, allowNull: false },
    inputSample: { type: DataTypes.STRING, allowNull: false }
});


// USER_TOCKEN DEPENDENCY
User.hasOne(UserToken);
UserToken.belongsTo(User);

// ART GALLERY DEPENDENCIES
User.hasMany(ArtGallery);
ArtGallery.belongsTo(User);

User.hasMany(ArtGalleryPicture);
ArtGalleryPicture.belongsTo(User);

ArtGallery.belongsToMany(ArtGalleryPicture, { through: ArtGalleryTroughtTable });
ArtGalleryPicture.belongsToMany(ArtGallery, { through: ArtGalleryTroughtTable });

// SLIDER DEPENDENCIES
User.hasMany(Slider);
Slider.belongsTo(User);

User.hasMany(SliderPicture);
SliderPicture.belongsTo(User);

Slider.belongsToMany(SliderPicture, { through: SliderTroughTable });
SliderPicture.belongsToMany(Slider, { through: SliderTroughTable });

// VIRTUAL TOUR
User.hasMany(VirtualTour);
VirtualTour.belongsTo(User);

// PICTURE EXPLORE
User.hasMany(PictureExplore);
PictureExplore.belongsTo(User);

// VIDEO JOURNEY
User.hasMany(VideoJourney);
VideoJourney.belongsTo(User);

// TICKET TYPE
User.hasMany(TicketType);
TicketType.belongsTo(User);

// TICKET CATEGORY
User.hasMany(TicketCategory);
TicketCategory.belongsTo(User);

// ORDER INPUT
User.hasMany(OrderInput);
OrderInput.belongsTo(User);

// COMMENTS DEPENDENCIES
User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(CommentLike);
CommentLike.belongsTo(User);

User.hasMany(ReplyComment);
ReplyComment.belongsTo(User);

User.hasMany(ReplyCommentLike);
ReplyCommentLike.belongsTo(User);

Comment.hasMany(CommentLike);
CommentLike.belongsTo(Comment);

Comment.hasMany(ReplyComment);
ReplyComment.belongsTo(Comment);

ReplyComment.hasMany(ReplyCommentLike);
ReplyCommentLike.belongsTo(ReplyComment);

module.exports = {
    User,
    UserToken,
    Slider,
    SliderPicture,
    SliderTroughTable,
    VirtualTour,
    PictureExplore,
    VideoJourney,
    ArtGallery,
    ArtGalleryPicture,
    ArtGalleryTroughtTable,
    Comment,
    CommentLike,
    ReplyComment,
    ReplyCommentLike,
    TicketType,
    TicketCategory,
    OrderInput
};


