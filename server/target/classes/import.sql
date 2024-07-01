/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/SQLTemplate.sql to edit this template
 */
/**
 * Author:  mathe
 * Created: 10 de abr. de 2024
 */
/*crud de categorias*/
insert into tb_category (name) values ('Computadores');
insert into tb_category (name) values ('Processadores');
insert into tb_category (name) values ('Video Games');
insert into tb_category (name) values ('Placas de vídeo');
insert into tb_category (name) values ('Placa Mãe');

/*crud de computadores*/
insert into tb_product (name, description, price, url_Image, category_id) values ('Computador Mancer Gamer GM-001','Computador Mancer Gamer GM-001, Intel Core i7, GeForce GTX 1650 4GB, 16GB DDR3, SSD 480GB',2029.97,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/a/carbon-branco-gabinete-001_2_1_1.jpg',1);
insert into tb_product (name, description, price, url_Image, category_id) values ('COMPUTADOR GAMER COOLER','COMPUTADOR GAMER COOLER MASTER COOLING X, AMD RYZEN 9 7950X3D, GEFORCE RTX 4080 16GB, 64GB DDR5, SSD M.2 4TB, 850W + MONITOR COOLER MASTER GP27U 27',44599.99, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/o/cooling-x-cooler-master-27-pichau-06.jpg',1);
insert into tb_product (name, description, price, url_Image, category_id) values ('Computador Pichau Gamer Cougar','Computador Pichau Gamer Cougar, AMD Ryzen 9 7950X, GeForce RTX 4090 24GB, 32GB DDR5, 2X SSD M.2 2TB',37790.15, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gabinete-gamer-cougar-cratus-001.jpg',1);

/*crud de processadores*/
insert into tb_product (name, description, price, url_Image, category_id) values ('PROCESSADOR AMD RYZEN 5 8500G','PROCESSADOR AMD RYZEN 5 8500G, 6-CORE, 12-THREADS, 3.5GHZ (5.0GHZ TURBO), CACHE 22MB, AM5, 100-100000931BOX-BR',898.99, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000931box-br1.jpg', 2);
insert into tb_product (name, description, price, url_Image, category_id) values ('PROCESSADOR INTEL CORE I9-14900KS','PROCESSADOR INTEL CORE I9-14900KS, 24-CORE, 32 THREADS, 3.20GHZ (6.0GHZ) TURBO, CACHE 36MB, LGA1700, BX8071514900KS',5199.99, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071514900ks.jpg', 2);
insert into tb_product (name, description, price, url_Image, category_id) values ('PROCESSADOR INTEL CORE I5-14400','PROCESSADOR INTEL CORE I5-14400, 10-CORE, 16-THREADS, 3.5GHZ (4.7GHZ TURBO), CACHE 20MB, LGA1700, BX8071514400',1479.99, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071514400.jpg', 2);

/*crud de consoles*/
insert into tb_product (name, description, price, url_Image, category_id) values ('CONSOLE NINTENDO SWITCH','CONSOLE NINTENDO SWITCH, 32GB, COM JOGO MARIO KART DELUXE 8, HADSKABL1BRA', 2149.90, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/a/hadskabl1bra.jpg', 3);
insert into tb_product (name, description, price, url_Image, category_id) values ('CONSOLE MICROSOFT XBOX SERIES X','CONSOLE MICROSOFT XBOX SERIES X, 1TB, 1 CONTROLE, PRETO, RRT-00006',4099.90, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrt-000066.jpg', 3);
insert into tb_product (name, description, price, url_Image, category_id) values ('CONSOLE SONY PLAYSTATION 5 SLIM','CONSOLE SONY PLAYSTATION 5 SLIM EDICAO DIGITAL, SSD 1TB, 1 CONTROLE, BRANCO, 1214B',3799.99, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/2/1214b2.jpg', 3);

/*crud de placas de vídeo*/
insert into tb_product (name, description, price, url_Image, category_id) values ('GEFORCE GT 1030 2GB GDDR5','PLACA DE VIDEO GIGABYTE GEFORCE GT 1030 2GB GDDR5 LOW PROFILE 64-BIT, GV-N1030D5-2GL', 515.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/v/gv-n1030d5-2gl_3.jpg', 4);
insert into tb_product (name, description, price, url_Image, category_id) values ('RTX 4090 OG OC, 24GB, GDDRX6X','PLACA DE VIDEO ASUS TUF GAMING GEFORCE RTX 4090 OG OC, 24GB, GDDRX6X, 384-BIT, TUF-RTX4090-O24G-OG-GAMING', 11999.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/0/90yv0iy3-m0na001.jpg', 4);
insert into tb_product (name, description, price, url_Image, category_id) values ('PCYES GEFORCE GT 740, 4GB, GDDR5','PLACA DE VIDEO PCYES GEFORCE GT 740, 4GB, GDDR5, 128-BIT, PA740GT12804D5FZ', 499.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/a/pa740gt12804d5fz4.jpg', 4);

/*crud de Placas Mães*/
insert into tb_product (name, description, price, url_Image, category_id) values ('PLACA MAE ASUS TUF GAMING B650M-PLUS','PLACA MAE ASUS TUF GAMING B650M-PLUS WIFI, DDR5, SOCKET AM5, M-ATX, CHIPSET AMD B650, B650M-GAMING-PLUS-WIFI', 1499.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/6/b650m-gaming-plus-wifi7.jpg', 5);
insert into tb_product (name, description, price, url_Image, category_id) values ('PLACA MAE MSI PRO B760M-E DDR4','PLACA MAE MSI PRO B760M-E DDR4, SOCKET LGA1700, M-ATX, CHIPSET INTEL B760, 911-7D48-045', 799.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/1/911-7d48-045.jpg', 5);
insert into tb_product (name, description, price, url_Image, category_id) values ('PLACA MAE GIGABYTE Z790','PLACA MAE GIGABYTE Z790 AORUS XTREME, DDR5, SOCKET LGA 1700, E-ATX, CHIPSET INTEL Z790, Z790-AORUS-XTREME', 7999.99,'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/z/7/z790-aorus-xtreme3.jpg', 5);


INSERT INTO tb_user(display_name, username, password) VALUES ('Administrador', 'admin','$2a$12$2h2wyeyCV5XyuQS8PdPQ9e/y.KJ2y/o3UEJxhqXGSe.QPVi6gm1nO');
INSERT INTO tb_user(display_name, username, password) VALUES ('Teste', 'test','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');


INSERT INTO tb_request(payment_types,data,user_id) VALUES('PIX','2021-04-20',1);

INSERT INTO tb_request_itens(request_id,product_id,preco,quantidade) VALUES(1,1,1990.0,1);
INSERT INTO tb_request_itens(request_id,product_id,preco,quantidade) VALUES(1,2,4898.0,2);