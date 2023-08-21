# create databases
CREATE DATABASE IF NOT EXISTS `keycloak`;

# create root user and grant rights
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';

CREATE USER 'keycloak_user'@'%' IDENTIFIED BY 'kcsecret';
GRANT ALL PRIVILEGES ON keycloak.* TO 'keycloak_user'@'%' WITH GRANT OPTION;