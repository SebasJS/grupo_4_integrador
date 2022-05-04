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
      lastProduct: ""
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





  componentDidMount() {
    console.log("me monte");
    this.traerGifNuevo();
    this.lastProduct();


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
  }

  mostrarUsuarios = (data2) => {
    console.log(data2)
    this.setState({
      usuarios: data2,
      nombredeuser: data2[0].name

    })


  }

  lastProduct(data3) {


  }


  componentDidUpdate() {
    console.log("me actualize");
    this.lastProduct();


  }
  render() {
    console.log("estoy renderizando");
    //ultimo producto

    //ultimo usuario
    let contenido;
    let listProducts;
    let imagen;
    let imagenUsuario;
    let listUsers;
    console.log("ultmo " + this.state.productos);
    listProducts = this.state.productos.map((producto) => {
      console.log(producto.name);
      imagen = "http://localhost:3000/img/" + producto.imagen;
      return (
        <tr>
          <td ><div className="thumContainer"><img className="thumProduct" src={imagen} alt="" /></div></td>
          <td>{producto.name}</td>
          <td>${producto.price}</td>
          <td>{producto.categoryProductsId}</td>
          <td><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
      )
    });
    let numberProducts = this.state.productos.length - 1;
    console.log(this.state.productos[numberProducts]);
    let lastProduct = (this.state.productos[numberProducts]);
    console.log(lastProduct);


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
                  1,504
                </div>
                <div className="cardName">Productos</div>
              </div>
              <div className="iconBx"><ion-icon name="storefront-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  547
                </div>
                <div className="cardName">Clientes</div>
              </div>
              <div className="iconBx"><ion-icon name="people-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  242
                </div>
                <div className="cardName">ventas</div>
              </div>
              <div className="iconBx"><ion-icon name="card-outline"></ion-icon></div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  $5983
                </div>
                <div className="cardName">ganancias</div>
              </div>
              <div className="iconBx"><ion-icon name="cash-outline"></ion-icon></div>
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
                  {/* <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status return'>Return</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status inprogress'>In progress</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status return'>Return</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status inprogress'>In progress</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status pending'>Pending</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status inprogress'>In progress</span></td>
                  </tr> */}
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
        {/* <div className='content-conteiner'>
          <ul>
            {listProducts}
          </ul>
        </div> */}







      </div>



    );

  }
}



export default App;