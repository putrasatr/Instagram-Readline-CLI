const { SecureLocaleStorage } = require("../secureLocaleStorage")

const AsyncStorage = new SecureLocaleStorage("token")

exports.AsyncStorage = AsyncStorage