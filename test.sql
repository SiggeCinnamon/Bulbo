create table cards (id UUID not null, content varchar(255) not null, name varchar(255) not null, workspace_id UUID not null, primary key (id))
create table users (id VARCHAR(255) not null, pass varchar(255) not null, username varchar(255) not null, primary key (id))
create table workspaces (id UUID not null, name varchar(255) not null, primary key (id))
alter table if exists cards add constraint FKt0b6uf9t7j2kwoqfmg6fwfl8p foreign key (workspace_id) references workspaces
