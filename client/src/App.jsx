import { Component } from 'react';
import userFoto from './user.jpg';
import customerImg1 from './img/img1.jpg'










class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "",
      nombre: "",
      imagen: "",
      tipo: "",
      productos: [],
      usuarios: [],
      lastProduct: "",
      listBalones:[],
      numberOfBalones:0

    }
  }

  handleClick = () => {
    let nav = document.querySelector('.navigation');
    let main = document.querySelector('.main')
    nav.classList.toggle('active');
    main.classList.toggle('active')
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }





  componentDidMount () {
    console.log("me monte");
    this.traerGifNuevo();
    this.numberOfballs();
   
    


  }



  traerGifNuevo() {


    this.apiCall("http://localhost:3000/api", this.mostrarGif);
    this.apiCall("http://localhost:3000/api/users", this.mostrarUsuarios);



  }
  mostrarGif = (data) => {

    this.setState({
      productos: data,
      nombre: data[0].name,

      lastProduct: data

    })
    console.log(this.state.nombre);



    console.log(this.state.productos)
    console.log("soy el primer usuarii0" + this.state.nombre)
    /*
    this.ultimoPro();
    */
  }

  mostrarUsuarios = (data2) => {
    console.log(data2)
    this.setState({
      usuarios: data2,
      nombredeuser: data2[0].name

    })


  }

  /*
  async  ultimoPro() {
      


    let numberProducts = this.state.productos.length - 1;
    console.log(this.state.productos[numberProducts]);
    let lastProduct = await (this.state.productos[0]);
    let nombredelultimo =await lastProduct.name ;
    console.log("nombre del ultimo productico" + nombredelultimo);
      // expected output: "resolved"
    }

  */

  


  componentDidUpdate() {
    console.log("me actualize");
  }


  /*------------------------- funcion hallar el numero de balones -----------------------*/

// funcion para determinar el numero de balones

numberOfballs(){
  
   
    /*
    a la bariable listBalones le asigno un array donde guarde cada uno de los elementos que cooincidiera 
    con el categoryProductId de balones en este caso el categoryProductID 2
    */
  let listBalones;
  let arrayBalones=[];
  console.log("ver productos a ver que trae" + this.state.productos);
  listBalones = this.state.productos.map((producto) => {
  
         //if para ver si coincide con la categoria deseada
    if(producto.categoryProductsId == 2){  
        //voy guardando cada uno de los elementos que pasaron el if es decir con categoryProdcutID == a 2  es decir que son balones
        arrayBalones.push(producto);
        }
     //retornamos el array de balones para que se guarde en listBalones    
    return (arrayBalones)
     });

    // guardo en el state el numero de elementos del array listBalones es decir el numero de balones 
    console.log("numero de balones"+ this.arrayBalones)
    this.setState({
        //se guarda en numberOfBalls el numero de elementos del array 
        numberOfBalones:listBalones.length
    });
  }

  /*-------------------------fin de la funcion para hallar el numero de balones -----------------------*/


/*----------------------------------------- Inicio del Render de la Clase ----------------------------------------*/

  
  render() {

    console.log("estoy renderizando");
   
    let contenido;
    let listProducts;
    let imagen;
    let imagenUsuario;
    let listUsers;
    let listBicicletas;
    let numberOfBici;

    let listaBalones;
    let numeroDeBalones;

    let listaTenis;
    let numeroDeTenis;

    let listaRopa;
    let numeroDeRopa;

    let listaZapatos;
    let numeroDeZapatos;

    let listaMontana;
    let numeroDeMontana;

    let listaRaqueta;
    let numeroDeRaqueta;

    let listaMarciales;
    let numeroDeMarciales;



    let selectLast;
    let lastProductHTML;

    


  

    


    let ultimo;
   let lastName;


    listProducts = this.state.productos.map((producto) => {
      console.log(producto.name);
      imagen = "http://localhost:3000/img/" + producto.imagen;
      return (
        <tr  className="columnaProduct">
          <td ><div className="thumContainer"><img className="thumProduct" src={imagen} alt="" /></div></td>
          <td >{producto.name}</td>
          <td >${producto.price}</td>
          <td >{producto.categoryProductsId}</td>
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
      )
    });

    





    listBicicletas= this.state.productos.filter(producto => producto.categoryProductsId == 6);

    numberOfBici=listBicicletas.length;

    console.log("este es el numero de bicis" + numberOfBici)
 

    /* ------------------------- funciones para hallar el numero de balones ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaBalones = this.state.productos.filter(producto => producto.categoryProductsId == 2);
    

    numeroDeBalones=listaBalones.length;

    /* ------------------------- funciones para hallar el numero de tenis ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaTenis = this.state.productos.filter(producto => producto.categoryProductsId == 9);
    

    numeroDeTenis=listaTenis.length;

    /* ------------------------- funciones para hallar el numero de ropa ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaRopa = this.state.productos.filter(producto => producto.categoryProductsId == 1);
    

    numeroDeRopa=listaRopa.length;

    /* ------------------------- funciones para hallar el numero de zapatos ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaZapatos = this.state.productos.filter(producto => producto.categoryProductsId == 3);
    

    numeroDeZapatos=listaZapatos.length;

     /* ------------------------- funciones para hallar el numero de montaña ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaMontana = this.state.productos.filter(producto => producto.categoryProductsId == 4);
    

    numeroDeMontana=listaMontana.length;

    /* ------------------------- funciones para hallar el numero de raqueta ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaRaqueta = this.state.productos.filter(producto => producto.categoryProductsId == 5);
    

    numeroDeRaqueta=listaRaqueta.length;


    /* ------------------------- funciones para hallar el numero de Artes marciales ----------------------------*/
    // hallar numero de balones dentro del render para poder utilizar el this.state
    
    listaMarciales = this.state.productos.filter(producto => producto.categoryProductsId == 5);
    

    numeroDeMarciales=listaMarciales.length;


   
    

    

    
    
    
    let numberProducts = this.state.productos.length - 1;
    console.log(this.state.productos[numberProducts]);
    let lastProduct = (this.state.productos[numberProducts]);
    console.log(lastProduct);


    let numberUsers = this.state.usuarios.length -1;

 


    listUsers = this.state.usuarios.map((usuario) => {
      console.log(usuario.name);
      imagenUsuario = "http://localhost:3000/img/imageProfile/" + usuario.imagen;
      return (
        <tr>
          <td width={"60px"}> <div className="imgBx"><img src={imagenUsuario} alt="" /></div> </td>
          <td><h4>{usuario.name} <br /><span>{usuario.email}</span></h4></td>
        </tr>
      )
    });




    console.log(listProducts);



    if (this.state.gif === "") {
      contenido = <p>Cargando...</p>
    } else {
      contenido = <div>




        <h2>{this.state.nombre}</h2>

      </div>;

    }






    console.log("este es el nombre" + listProducts);
    //menutoggle
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    /* toggle.addEventListener("click", function () {
      navigation.classList.toggle('active')
    }) */
    
    

    //agergar estilo
    let list = document.querySelectorAll('.navigation li');
    function activeLink() {
      list.forEach((item) =>
        item.classList.remove('hovered'));
      this.classList.add('hovered');
    }
    list.forEach((item) =>
      item.addEventListener('mouseover', activeLink));


    selectLast= document.querySelectorAll(".columnaProduct");

    lastProductHTML = selectLast[18];

    console.log(listProducts)




    return (

      //add hovered class in selected list item



      <div className='container-dashboard'>

        <div className='navigation'>
          <ul>
            <li className=''>
              <a href="/">
                <span className='icon'><ion-icon name="bicycle-outline"></ion-icon></span>
                <span className="title">Altisports</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
                <span className="title">user</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="cube-outline"></ion-icon></span>
                <span className="title">help</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="cube-outline"></ion-icon></span>
                <span className="title">settings</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="cube-outline"></ion-icon></span>
                <span className="title">Password</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="cube-outline"></ion-icon></span>
                <span className="title">Sing Out</span>
              </a>
            </li>


          </ul>
        </div>

        <div className='main'>
          <div className='topbar'>
            <div className="toggle" onClick={this.handleClick}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            {/*  search */}
            <div className="search">
              <label htmlFor="">
                <input type="text" placeholder='Search here' />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
            {/* userimg */}
            <div className="user">
              <img src={userFoto} alt="" />
            </div>
          </div>

          {/* cards */}

          <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">
                  {numberOfBici}
                </div>
                <div className="cardName">Bicicletas</div>
              </div>
              <div className="iconBx"><ion-icon name="bicycle-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  {numeroDeBalones}
                </div>
                <div className="cardName">Balones</div>
              </div>
              <div className="iconBx"><ion-icon name="basketball-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  {numeroDeTenis}
                </div>
                <div className="cardName">Tenis</div>
              </div>
              <div className="iconBx"><ion-icon name="camera-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                 {numeroDeRopa}
                </div>
                <div className="cardName">Ropa</div>
              </div>
              <div className="iconBx"><ion-icon name="accessibility-outline"></ion-icon></div>
            </div>
          </div>

           {/* cards */}

           <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">
                  {numeroDeZapatos}
                </div>
                <div className="cardName">Zapatos</div>
              </div>
              <div className="iconBx"><ion-icon name="bicycle-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  {numeroDeMontana}
                </div>
                <div className="cardName">Montaña</div>
              </div>
              <div className="iconBx"><ion-icon name="diamond-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  {numeroDeRaqueta}
                </div>
                <div className="cardName">Raqueta</div>
              </div>
              <div className="iconBx"><ion-icon name="camera-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                 {numeroDeMarciales}
                </div>
                <div className="cardName">Artes Marciales</div>
              </div>
              <div className="iconBx"><ion-icon name="accessibility-outline"></ion-icon></div>
            </div>
          </div>

          {/* Ultimos */}

          <div className='containeLast'>
            <div className='lastProduct'>
              <p></p>

            </div>
            <div className='lastUser'>

            </div>


          </div>


         

          <div className="detailsLast">
            <div className="lastOrder">
              <div className="cardHeader">
                <h2>
                  Ultimo Producto Agregado
                </h2>
                <a href="/" className='btn'>Ver todos </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>categoria</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                {listProducts[numberProducts]}

                </tbody>
              </table>
            </div>
            {/* new customers */}

            <div className="lastCustomer">
              <div className="cardHeader">
                <h2>
                  Recent Customers
                </h2>

              </div>
              <table>
                {listUsers[numberUsers]}
              </table>

            </div>
          </div>

          {/* details */}
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>
                  Productos
                </h2>
                <a href="/" className='btn'>Ver todos </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>categoria</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                  {listProducts}

                </tbody>
              </table>
            </div>
            {/* new customers */}

            <div className="recentCustomers">
              <div className="cardHeader">
                <h2>
                  Recent Customers
                </h2>

              </div>
              <table>
                {listUsers}
              </table>

            </div>
          </div>

        </div>

        
        







      </div>



    );

  }
}



export default App;