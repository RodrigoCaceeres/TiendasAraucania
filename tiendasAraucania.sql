CREATE TABLE tiendas (
	id SERIAL,
	mail VARCHAR(255) NOT NULL,
	nombre_tienda VARCHAR(255) NOT NULL,
	nombre_emprendedor VARCHAR(255) NOT NULL,
	direccion VARCHAR(255) NOT NULL,
	comuna VARCHAR(255) NOT NULL,
	rut VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	imagen VARCHAR(255) NOT NULL
);

CREATE TABLE productos (
	id SERIAL,
	nombre VARCHAR(255) NOT NULL,
	descripcion VARCHAR(255) NOT NULL,
	precio INT NOT NULL,
	tienda_id INT NOT NULL
);

CREATE TABLE ganadores(
	id SERIAL,
	nombre VARCHAR (255) NOT NULL,
	email VARCHAR (255) NOT NULL,
	codigo VARCHAR (45) NOT NULL
);

CREATE TABLE ganadorProducto(
	id SERIAL,
	producto_id INT NOT NULL,
	ganador_id INT NOT NULL
);
