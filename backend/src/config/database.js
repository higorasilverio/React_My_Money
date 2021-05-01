const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

// One way to change the required error message
mongoose.Error.messages.general.required = "The '{PATH}' attribute is mandatory!"
mongoose.Error.messages.Number.min = "'{VALUE}' is lower than the minimum value acceptable: '{MIN}', for '{PATH}'!"
mongoose.Error.messages.Number.max = "'{VALUE}' is higher than the maximum value acceptable: '{MAX}', for '{PATH}'!"
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid for the attribute '{PATH}'"