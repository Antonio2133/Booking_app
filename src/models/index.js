const City = require('./City');
const Hotel = require('./Hotel');
const User = require('./User');


User.belongsTo(City);
City.hasMany(User);

Hotel.belongsTo(City);
City.hasMany(Hotel);

User.belongsTo(Hotel);
Hotel.hasMany(User);