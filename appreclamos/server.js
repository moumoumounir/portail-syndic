const dbFile = 'db.json'
const keyJWT = "BX]e_,r)g8$w'nMn"
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router(dbFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;  
  let usuarios = router.db.get('usuarios').value();
  let findUser = false;

  usuarios.forEach( usuario =>{
    if( email == usuario.email && password == usuario.password ){
      findUser = true;
      const token = jwt.sign(usuario, keyJWT , {expiresIn: 1000000});
      res.jsonp({token:token, id:usuario.id})
    }
  });

  if(!findUser){
    res.sendStatus(401);
  }
  
})

server.post('/usuarios/:id', (req,res) => {
	var id = req.params.id;
	// const names = req.query.names.split(';');
	console.log('id is '+id)
   let usuarios = router.db.get('usuarios').value();
   
   var resultat=[];
   resultat = usuarios.find( col => col.id === id);
   console.log('resultat  '+JSON.stringify(resultat));
    res.status(200).json(resultat)
  
})



server.post('/usuarios', (req, res) => {
  let usuarios = router.db.get('usuarios').value();
  
  console.log('reclamation '+json(usuarios))
  
   res.status(200).json(usuarios)
  
})

server.post('/usuarios/:id', (req, res) => {
  let usuarios = router.db.get('usuarios').value();
  
  console.log('reclamation '+json(usuarios))
  
   res.status(200).json(usuarios)
  
})

server.post('/reclamos', (req, res) => {
  let reclamos = router.db.get('reclamos').value();
  
  console.log('reclamation '+json(reclamos))
  
   res.status(200).json(reclamos)
  
})

server.get('/getReclamosByRut/',  (req,res) => {
	const rut = req.query.rut;
	console.log('rut  '+rut)

	let reclamos = router.db.get('reclamos').value();
	//console.log('insert !!!!!!!!!!!!!!!!!!!!!!   name is '+JSON.stringify(reclamos))
	var resultat=[];
   //resultat = reclamos.find( col => col.rut === rut);
   //console.log('resultat  '+JSON.stringify(resultat));
   reclamos.forEach( admin =>{
	    //console.log(rut +'=='+admin.rut +' loop  reclamos.forEach '+JSON.stringify(admin))
      if( rut == admin.rut ){
		  resultat.push(admin)
        //console.log('resultat  '+JSON.stringify(admin));
      }
    });
   
   
    res.status(200).json(resultat)
})

server.post('/addReclamos/', (req, res) => {
	console.log('addReclamos !!!!!!!!!!!!!!!!!!!!')
   let data = req.body;
   console.log('insert !!!!!!!!!!!!!!!!!!!!!!   name is '+JSON.stringify(data))

  let reclamos = router.db.get('reclamos').value();
  reclamos.push(data)
  console.log('insert !$reclamos !!!!!!!!!!!!!!!!!!!!!   name is '+JSON.stringify(reclamos))
  
    res.sendStatus(200);
  
})


server.post('/admin', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;  
    let admins = router.db.get('admins').value();
    let findAdmin = false;
  
    admins.forEach( admin =>{
      if( email == admin.email && password == admin.password ){
        findAdmin = true;
        const token = jwt.sign(admin, keyJWT , {expiresIn: 1000000});
        res.jsonp({token:token})
      }
    });
  
    if(!findAdmin){
      res.sendStatus(401);
    }
    
  })

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})