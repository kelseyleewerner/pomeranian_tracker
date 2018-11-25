use pom_tracker

CREATE TABLE IF NOT EXISTS pomeranians (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  breed VARCHAR(255),
  age_of_dog VARCHAR(100),
  age_of_post VARCHAR(100),
  PRIMARY KEY (id)
) ENGINE=INNODB;
