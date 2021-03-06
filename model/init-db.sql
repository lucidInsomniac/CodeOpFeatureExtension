
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS games;


CREATE TABLE games ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    universe VARCHAR(100) NOT NULL,
    date DATE NOT NULL); 

CREATE TABLE quotes ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quote TEXT NOT NULL,
    games_id INT NOT NULL,
    FOREIGN KEY(games_id) REFERENCES games(id) ON DELETE CASCADE
    ); 

CREATE TABLE characters ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    player VARCHAR(100) NOT NULL,
    charname VARCHAR(100) NOT NULL,
    race VARCHAR(100),
    charclass VARCHAR(100),
    description TEXT,
    games_id INT NOT NULL,
    FOREIGN KEY(games_id) REFERENCES games(id) ON DELETE CASCADE
    ); 