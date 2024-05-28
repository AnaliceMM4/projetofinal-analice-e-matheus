/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/SQLTemplate.sql to edit this template
 */
/**
 * Author:  mathe
 * Created: 10 de abr. de 2024
 */

insert into tb_category (name) values ('Informática');
insert into tb_category (name) values ('UD');
insert into tb_category (name) values ('Cozinha');
insert into tb_category (name) values ('Móveis');
insert into tb_category (name) values ('Eletrônico');

insert into tb_product (name, description, price, url_Image, category_id) values ('Refrigerador 429L','Refrigerador 429L Branco, duplex....',1990.0,'https://m.media-amazon.com/images/I/418W2M249EL._AC_SX300_SY300_QL70_ML2.jpg',2);
insert into tb_product (name, description, price, url_Image, category_id) values ('Notebook Arus 15.6','Notebook Arus 15.6 Core I7, 16Gb Ram...',2449.0, 'https://m.media-amazon.com/images/I/51WvpnnS2wL.AC_SX425.jpg',1);
insert into tb_product (name, description, price, url_Image, category_id) values ('Monitor 27pol','Monitor Gamer 27pol 144Hz, 1ms',1129.99, 'https://m.media-amazon.com/images/I/51bbd3rst3L._AC_SX300_SY300_QL70_ML2.jpg',1);
insert into tb_product (name, description, price, url_Image, category_id) values ('Kit Teclado e Mouse','Kit com teclado ABNT e mouse com 5 botões',199.0, 'https://www.magazineluiza.com.br/kit-teclado-e-mouse-com-fio-usb-gamer-exbom/p/hbjh55dc7c/in/kitm/', 1);
insert into tb_product (name, description, price, url_Image, category_id) values ('Smartphone XYZ','Smatphone com tela de 9pol, 12GB....',9999.0, 'https://www.magazineluiza.com.br/kit-teclado-e-mouse-com-fio-usb-gamer-exbom/p/hbjh55dc7c/in/kitm/', 5);
insert into tb_product (name, description, price, url_Image, category_id) values ('TV LCD 75pol','TV LCD 75pol, 5 HDMI...',7555.0, 'https://m.media-amazon.com/images/I/51Tukq7Dn5L._AC_SX300_SY300_QL70_ML2.jpg', 5);
insert into tb_product (name, description, price, url_Image, category_id) values ('Fogão 6 Bocas','Fogão 6 Bocas em aço inox, ...', 799.99, 'https://m.media-amazon.com/images/I/71jfkKa-Y9L._AC_SY445_SX342_QL70_ML2.jpg', 3);
insert into tb_product (name, description, price, url_Image, category_id) values ('Roteador Wi-Fi 5.4GhZ','Roteador Wi-Fi 5.4GhZ, 6 antenas...',1299.0, 'https://vaiobr.vtexassets.com/arquivos/ids/158678-1200-1200?v=637876340581700000&width=1200&height=1200&aspect=true', 1);





INSERT INTO tb_user(display_name, username, password) VALUES ('Administrador', 'admin','$2a$12$2h2wyeyCV5XyuQS8PdPQ9e/y.KJ2y/o3UEJxhqXGSe.QPVi6gm1nO');
INSERT INTO tb_user(display_name, username, password) VALUES ('Teste', 'test','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');


INSERT INTO tb_request(payment_types,data,user_id) VALUES('PIX','2021-04-20',1);

INSERT INTO tb_request_itens(request_id,product_id,preco,quantidade) VALUES(1,1,1990.0,1);
INSERT INTO tb_request_itens(request_id,product_id,preco,quantidade) VALUES(1,2,4898.0,2);