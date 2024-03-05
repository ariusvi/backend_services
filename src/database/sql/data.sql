USE old_ink;

-- create roles in system

insert into roles (id, name) values (1, 'uer');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'super_admin');

-- create services
insert into services (id, service_name, description) values (1, 'Tatuajes personalizados', 'Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.' );
insert into services (id, service_name, description) values (2, 'Tatuajes del catálogo', 'Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas');
insert into services (id, service_name, description) values (3, 'Restauración y rejuvecimiento de trabajos', 'Nos especializamos en la restauración y rejuvecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antigus, devolviéndoles su vitalidad');
insert into services (id, service_name, description) values (4, 'Colocación de piercings y dilatadores', 'Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes');
insert into services (id, service_name, description) values (5, 'Venta de piercings y otros artículos', 'Ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único');


-- create users in system
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (1, 'user', 'usuario', 'user@email.com', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (2, 'admin', 'admin_apellido', 'admin@email.com', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 2);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (3, 'super_admin', 'superadmin_apellido', 'superadmin@email.com', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 3);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (4, 'manolo', 'garcia', 'manolo@email.com', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (5, 'Nahum', 'Strase', 'nstrase0@tuttocitta.it', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (6, 'Sheff', 'Matzel', 'smatzel1@berkeley.edu', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (7, 'Terence', 'Blasdale', 'tblasdale2@youku.com', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);
insert into users (id, first_name, last_name, email, password_hash, roles_id) values (8, 'Katusha', 'Renoden', 'krenoden3@mapy.cz', '$2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK', 1);

-- password_hash $2b$08$eEImKxb8dACCzeXS.sqSXeGhx74NzKTalpHAkbCkJe.PDjNq.0zaK -> 123456


-- create appointments
insert into appointments (id, appointment_date, users_id, services_id) values (1, '7/13/2024', 1, 1);
insert into appointments (id, appointment_date, users_id, services_id) values (2, '12/13/2024', 2, 2);
insert into appointments (id, appointment_date, users_id, services_id) values (3, '5/22/2024', 3, 3);
insert into appointments (id, appointment_date, users_id, services_id) values (4, '3/19/2024', 4, 4);
insert into appointments (id, appointment_date, users_id, services_id) values (5, '3/14/2024', 5, 5);