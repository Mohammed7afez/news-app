const express = require('express')
const app = express()
const port = 3000
const hbs = require('hbs')

const path = require('path')
const publicDirictory = path.join(__dirname,'../public')

app.use(express.static(publicDirictory))

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const request = require('request')
const url = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=0cbae1852ded4afaa7d6f4150388cd2a'

app.get('/', (req, res) => {
    request({ url, json: true }, (error, response)=>{
        
        if (error){
                    console.log("Error has occured")
                }
                else if(response.body.status == 'error'){
                    console.log("Invalid API Key")
                }
                else if(response.body.totalResults == 0){
                    console.log('No news for this country')
                }
                else{
        res.render('index',{
            data: response.body.articles
        })
        }
    })
})



app.listen(port, () =>{
    console.log('Server is running')
}) 