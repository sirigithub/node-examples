var request = require('superagent')

module.exports = function search (query, fn) {
  request.get("https://api.twitter.com/1.1/search/tweets.json?q="+query)
    .end(function (res) {
      console.log('response body'+res.body);
      console.log('results'+res.body.results);
      if (res.body && Array.isArray(res.body.results)) {
          console.log('results'+res.body.results);
          console.log('result status'+res.statusCode);
        return fn(null, res.body.results);
      }
      if ('Bad twitter response' == err.message) {
            res.render('twitter-error');
        } 
      else {
          next(); 
      }
      
    }
    );
};