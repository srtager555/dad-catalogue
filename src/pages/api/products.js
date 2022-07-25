export default function handler(req, res) {
	res.status(200).json(productos);
}

// { name: 'pollo', peso: 'libra', marca: 'micasa', img: 'https://ttager.netlify.app/img/oaAhri4.jpg', },
const productos = [
	{
		marca: "Norteño",
		products: [
			{
				name: "Menudos",
				peso: "libra",
				marca: "Norteño",
				img: "/image/products/1_norteño_menudos_libra.jpg",
			},
			{
				name: "Patas de pollo",
				peso: "libra",
				marca: "Norteño",
				img: "/image/products/1_norteño_patas_pollo.jpg",
			},
			{
				name: "Pollo",
				peso: "libra",
				marca: "Norteño",
				img: "/image/products/1_norteño_pollo_libra.jpg",
			},
			{
				name: "Hot Dog de pollo",
				peso: "libra",
				marca: "Norteño",
				img: "/image/products/2_norteño_hot_dog_de_pollo_1_libra.jpg",
			},
			{
				name: "Jamón de pollo",
				peso: "media libra",
				marca: "Norteño",
				img: "/image/products/2_norteño_jamon_de_pollo_1_2_libra.jpg",
			},
			{
				name: "Nuggets de pollo",
				peso: "",
				marca: "Norteño",
				img: "/image/products/3_nortello_nuggets_pollo.jpg",
			},
			{
				name: "Alitas de pollo",
				peso: "",
				marca: "Norteño",
				img: "/image/products/3_norteño_alitas_pollo.jpg",
			},
			{
				name: "Strips de pollo",
				peso: "",
				marca: "Norteño",
				img: "/image/products/3_norteño_strips_pollo.jpg",
			},
		],
	},
	{
		marca: "San Antonio",
		products: [
			{
				name: "Patas de pollo",
				peso: "libra",
				marca: "San Antonio",
				img: "/image/products/1_san_antonio_patas_de_pollo.jpg",
			},
			{
				name: "Pollo",
				peso: "libra",
				marca: "San Antonio",
				img: "/image/products/1_san_antonio_pollo_libra.jpg",
			},
		],
	},
	{
		marca: "Delicia",
		products: [
			{
				name: "C. Barbacoa",
				peso: "3 libras",
				marca: "Delicia",
				img: "/image/products/2_delicia_chorizo_barbacoa_3_libra.jpg",
			},
			{
				name: "Copetín",
				peso: "libra",
				marca: "Delicia",
				img: "/image/products/2_delicia_chorizo_copetin_1_libra.jpg",
			},
			{
				name: "extremeño",
				peso: "libra",
				marca: "Delicia",
				img: "/image/products/2_delicia_chorizo_extremeño_delicia_1_libra.jpg",
			},
			{
				name: "longaniza",
				peso: "libra",
				marca: "Delicia",
				img: "/image/products/2_delicia_chorizo_longaniza_1_libra.jpg",
			},
			{
				name: "longaniza",
				peso: "3 libras",
				marca: "Delicia",
				img: "/image/products/2_delicia_chorizo_longaniza_3_libra.jpg",
			},
			{
				name: "Jamón barvaria",
				peso: "media libra",
				marca: "Delicia",
				img: "/image/products/2_delicia_jamon_bavaria_1_2_libra.jpg",
			},
			{
				name: "Jamón de pavo",
				peso: "media libra",
				marca: "Delicia",
				img: "/image/products/2_delicia_jamon_de_pavo_1_2_libra.jpg",
			},
			{
				name: "Salchica Big dog",
				peso: "3 libras",
				marca: "Delicia ",
				img: "/image/products/2_delicia_salchica_big_dog_1_libra.jpg",
			},
			{
				name: "Salchica con queso",
				peso: "3 libras",
				marca: "Delicia",
				img: "/image/products/2_delicia_salchica_big_dog_1_libra.jpg",
			},
		],
	},
	{
		marca: "El porteño",
		products: [
			{
				name: "Chorizo cervecero",
				peso: "3 libras",
				marca: "El porteño",
				img: "/image/products/2_el_porteño_chorizo_cervecero_3_libras.jpg",
			},
			{
				name: "Longaniza",
				peso: "3 libras",
				marca: "El porteño",
				img: "/image/products/2_el_porteño_chorizo_longaniza_3_libras.jpg",
			},
		],
	},
	{
		marca: "Franks",
		products: [
			{
				name: "Hot Dog",
				peso: "3.75 libras",
				marca: "Franks",
				img: "/image/products/2_franks_hot_dog_3.75_libras.jpg",
			},
		],
	},
	{
		marca: "Pollo Rey",
		products: [
			{
				name: "Salchica de Pechuga",
				peso: "libra",
				marca: "Pollo Rey",
				img: "/image/products/2_pollo_rey_salchicha_de_pechuga_1_libra.jpg",
			},
		],
	},
	{
		marca: "Toledo",
		products: [
			{
				name: "Choripollo",
				peso: "libra",
				marca: "Toledo",
				img: "/image/products/2_toledo_choripollo_1_libras.jpg",
			},
			{
				name: "Mortadela",
				peso: " 7 libras",
				marca: "Toledo",
				img: "/image/products/2_toledo_mortadela_7_libras.jpg",
			},
			{
				name: "Hot dog",
				peso: "3.75 libras",
				marca: "Toledo",
				img: "/image/products/2_toledo_salchica_hot_dog_3.75_libras.jpg",
			},
			{
				name: "Jumbo de  queso ",
				peso: "libra",
				marca: "Toledo",
				img: "/image/products/2_toledo_salchicha_jumbo_amc_con_queso.jpg",
			},
		],
	},
	{
		marca: "Carnes y mas...",
		products: [
			{
				name: "Carcasa de Pollo",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_carcasa_de_pollo_1_libra.jpg",
			},
			{
				name: "Chuleta de Cerdo",
				peso: "10 libra",
				marca: "",
				img: "/image/products/1_n_chuleta_de_cerdo_10_libras.jpg",
			},
			{
				name: "Chuleta de Cerdo ahumada",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_chuleta_de_cerdo_ahumada_libra.jpg",
			},
			{
				name: "Costilla ahumada",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_costilla_ahumada_1_libra.jpg",
			},
			{
				name: "Costilla en cubos",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_costilla_cubos_libra.png",
			},
			{
				name: "Molleja",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_molleja_libra.jpg",
			},
			{
				name: "Papas fritas",
				peso: "5.52 libras",
				marca: "",
				img: "/image/products/3_papas_fritas_5.52_libras.jpg",
			},
			{
				name: "Patas de Cerdo",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_patas_cerdo_libra.jpg",
			},
			{
				name: "Pechuga sin hueso",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_pechuga_pollo_sin_hueso_1_libra.jpg",
			},
			{
				name: "Pollo en cuartos frescos",
				peso: "libra",
				marca: "",
				img: "/image/products/1_n_pollo_cuartos_fresco_1 4.jpg",
			},
		],
	},
];
