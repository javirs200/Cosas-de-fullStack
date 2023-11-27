const scraper = require('./utils/scraper')

let reviews = scraper.getReviews('tt9140554')

console.log(reviews);