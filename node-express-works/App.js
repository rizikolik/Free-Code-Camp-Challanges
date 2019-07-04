 /*=============================
chain a middleware function and the final handler.
 In the middleware function you should add the current time
  to the request object in the req.time key. 
  You can use new Date().toString().
 In the handler, respond with a JSON object, 
 taking the structure {time: req.time}.
 ==============================*/

app.get("/now",function(req,res,next){
    req.time=new Date().toString()
    next()
  },(req,res)=>{
    res.json({"time":req.time})
    
  })

/*=======================================================================
  Build an echo server, mounted at the route GET /:word/echo.
   Respond with a JSON object, taking the structure 
   {echo: word}. You can find the word to be repeated at req.params.word.
==========================================================================*/


  app.get("/:word/echo",(req,res)=>{
    let word=req.params.word
    res.json({"echo":word})
  })