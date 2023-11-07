
export const Producto = () => {
 
    return (
 
        <>
            <div className="m-5" >
                <img
                src="https://m.media-amazon.com/images/I/61zDo5F6KkL._AC_SX679_.jpg"
                alt="producto"
                className="object-cover h-54 w-96"/>
                    <div>
                        <h3 className=" font-serif mb-2 ">Nombre : Samsung </h3>
                        <p className="font-serif mb-2">Descripción : Monitor</p>
                        <p className="font-serif mb-2">Precio : 400 Usd</p>
                        <p className="font-serif mb-2">SKU : asd123121 </p>
                        <p className="font-serif mb-2">Cantidad disponible : 1</p>
                    </div>
            </div>

            {/*
            ● Nombre
            ● Descripción
            ● Precio
            ● SKU
            ● Cantidad disponible
             */}



        </>
    )
}
