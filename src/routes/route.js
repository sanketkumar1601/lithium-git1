const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// 1st assinment of get api
router.get('/movies', function (req, res){
  // console.log("The path params in the request are : ", req.params)

  let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

  res.send(movies)
})

//2nd assinment of api
// router.get('/movies/:indexNumber', function (req, res){
//   // console.log("The path params in the request are : ", req.params)
// let movies2 = req.params
//   let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

//   res.send(movies[movies2.indexNumber])
// })

//2 and 3rd assinment of api

router.get('/movies/:indexNumber', function (req, res){
  // console.log("The path params in the request are : ", req.params)
let movies2 = req.params
  let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

if (movies2.indexNumber-1<movies.length){      // 3rd
  res.send(movies[movies2.indexNumber-1])
}
   else{
    res.send("not found !")
   }
})

//4th  assinment of api
router.get('/films', function (req, res){
    //   // console.log("The path params in the request are : ", req.params)
       
       let movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    
        res.send(movies)
  
      })
  
  //5th assinment of api
      router.get('/films/:filmId', function (req, res){
        //   // console.log("The path params in the request are : ", req.params)
        let no=req.params   
  
           let movies = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
  
           if (no.filmId<=3){
                  res.send(movies[no.filmId])
           }
          else {
               res.send("not found!")
              }
          })
      
  
  
  // Example 2 for path params
  router.get('/student-details/:name', function(req, res){
      let requestParams = req.params
      console.log("This is the request ", requestParams)
      let studentName = requestParams.name
      console.log('Name of the student is ', studentName)
      res.send('Dummy response')
  })
  
  module.exports = router;