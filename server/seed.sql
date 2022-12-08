DROP TABLE IF EXISTS players;


CREATE TABLE players(
    players_id serial PRIMARY KEY,
    name VARCHAR(20),
    character_name VARCHAR(20),
    skill_level INTEGER
);

INSERT INTO players(name, character_name, skill_level) VALUES ('Jack', 'Spotty', 6);
INSERT INTO players(name, character_name, skill_level) VALUES ('Alex', 'Hunter', 10);
INSERT INTO players(name, character_name, skill_level) VALUES ('Bill', 'Night', 1);
INSERT INTO players(name, character_name, skill_level) VALUES ('Hector', 'Charlie', 3);
INSERT INTO players(name, character_name, skill_level) VALUES ('Jody', 'Killer', 5);