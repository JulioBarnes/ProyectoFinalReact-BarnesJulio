# Proyecto Final Ecommerce React Js Barnes Julio Ricardo

## Perfumes Top

#### El objetivo principal de la página es la venta de perfumes para todos los géneros. Permite consultar los detalles de cada perfume en particular y agregar al carrito la cantidad que el usuario decida en una cantidad limitada. Podrá visualizar la cantidad de productos que va agregando al carrito y podrá ingresar al mismo para finalizar la compra introduciendo los datos personales en un formulario para completar la orden de compra.

#### La página principal mostrará primero todos los perfumes disponibles desde la base de datos de firebase, aquí se hace llamada al componente SpinnerComponent mediante una condicion hasta que la promesa finalice y carguen todos los perfumes para que muestre un loader. Esta página principal esta enlazada al ícono de perfumes dentro de un ancla generada en el NavBar. Los botones centrales discriminan los generos y envían mediante el enlazado el género en formato string y desde el route en App.jsx toma este dato dentro de una propiedad llamada "categoryId" y es la que, dentro de ItemList, puedo usar mediante useParams, para poder usarlo como parámetro dentro de la llamada al archivo de firebase y de esa manera poder mapear los items según el categoryId. Esto me ahorró la creación de hasta 4 componentes para cargar items por categoría (todos, masculinos,femeninos y unisex)

#### Una vez generado los perfumes por ItemList, dentro del boton de "ver detalle" se enlazó una ruta usando el parámetro de item.id y guardarlo en el parámetro itemId para poder llamar al componente ItemDetail desde App.jsx. Así se genera la muestra detallada del perfume en particular usando nuevamente useParams para llamar desde firebase al artículo en particular y mapear las propiedades del objeto discriminado por itemId.

#### Para el boton de agregar al carrito dentro del ItemDetail llamo al final al componente CountComponent enviando mediante props el array completo del item particular del perfume. Aquí se hacen los botones para sumar y restar la cantidad del perfume, se aprovecha el array traído por props desde el padre para que al dar click al boton agregar se guarden en un array los datos del item agregado y el seter de "count" y enviarlos al CartContext. Count sólo sirve para poder mostrar en el ícono del carrito mediante un span la cantidad actualizada que se va agregando. Se hace uso aquí de la librería sweetalert2 para confirmarle al usuario visualmente que el elemento fue agregado. 

#### Finalimente ingresando al carrito se visualiza el detalle de la compra haciendo llamada al contexto y mediante una entrada de datos de un formulario se guarda en un array de objetos los datos de la compra generandose un Id de la orden en firebase y mostrándola en pantalla.



- Librerías Usadas
1. "bootstrap": v5.3.3 (no le dí uso en mi proyecto)
2. "firebase": v10.13.2 (donde pedimos los datos de productos y enviamos ordenes)
3. "react": v18.3.1
4. "react-bootstrap": v2.10.5 (loader/spinner)
5. "react-dom": v18.3.1 
6. "react-router-dom": v6.26.2
7. "sweetalert2": v11.14.1 (para los toast/avisos de alerta en ventanas como pop-ups)


>>>>> **Observaciones y Pendientes**
>>
>Para el estilo de la página me decidí por cargar todos en App.css ya que cargo menos files a los archivos y mi método para nombrar los estilos se basa basicamente en la etiqueta html que se aplica y en el componente en que la uso, salvo algún caso particular como _"link-General"_ que lo uso en todo los lugares donde esté la etiqueta link 🤣
>>
>-Entiendo que no se debe usar los métodos de console.log(), alert(), etc. Sólo están puestos en aquellos casos de función asincrónica donde la devolución no sea favorable ya sea por la api firestore o esperando la resolución de una función traida del contexto. En esos casos se puede reemplazar por funciones de la librería SweetAlert2 en posteriores modificaciones 😅
>>
>-Se puede afinar todavía más algunas validaciones y condiciones, por ejemplo:
>1. Para los inputs del formulario
>2. Para mostrar un sólo artículo por Id aunque esté repetido en el agregado al carrito
>3. Para mostrar datos de la orden de compra finalizada quizas en una ventana haciendo uso de sweetalert2 
>4. Para agregar botones para borrar perfumes del  carrito
>5. Etc.
### Fin