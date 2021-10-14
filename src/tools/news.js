// const request = require('request')

// const news = (country,callback)=>{

// const url = 'https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=0cbae1852ded4afaa7d6f4150388cd2a'

// request({url , json:true},(error,response)=>{
//     // console.log(response.body)
//     // const data = JSON.parse(response.body)
//     if (error){
//         callback("Error has occured",undefined)
//     }
//     else if(response.body.status == 'error'){
//         callback("Invalid API Key",undefined)
//     }
//     else if(response.body.totalResults == 0){
//         callback('No news for this country',undefined)
//     }
//     else{
//         // const newsFeed = response.body.articles[0]
//         callback(undefined , response.body.articles[0] )
//     }
// })
// }


// module.exports= news