module.exports = {
   "moduleFileExtensions": [
       "js",
       "json",
       "vue"
   ],
   "transform": {
       ".*\\.(vue)$": "vue-jest",
       ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
       "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
   },
   
}
