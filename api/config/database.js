const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

const USER_SCHEMA = `
CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_name VARCHAR(30) NOT NULL UNIQUE, 
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCAHR(255) NOT NULL,
    user_full_name VARCAHR(40) NOT NULL, 
    user_join_date TIMESTAMP DEFAULT current_timestamp
)
`;

const INSERT_DEFAULT_USER_1 = 
`
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'marcionavarro', 'marcionavarro@admin.com.br', '12345678', 'Marcio' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'marcionavarro')
`;

const PHOTO_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS photo (
    photo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    photo_post_date TIMESTAMP NOT NULL, 
    photo_url TEXT NOT NULL, 
    photo_description TEXT DEFAULT ('') NOT NULL, 
    photo_allow_comments INTEGER NOT NULL DEFAULT (1), 
    photo_likes BIGINT NOT NULL DEFAULT (0),
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE 
)
`;

const INSERT_DEFAULT_PHOTO_1 = `
INSERT INTO photo (
    photo_id, 
    photo_post_date, 
    photo_url, 
    photo_description, 
    photo_allow_comments, 
    photo_likes, 
    user_id
) 
SELECT 1, '2025-06-17', '3b2014e2-f9cc-467a-9b4d-aed22828bd66.jpg', 'Minha primeira foto', 1, 0, 1
WHERE NOT EXISTS (
    SELECT 1 FROM photo WHERE photo_id = 1
);
`;


const COMMENT_SCHEMA =
`
CREATE TABLE IF NOT EXISTS comment (
    comment_id INTEGER   PRIMARY KEY AUTOINCREMENT,
    comment_date TIMESTAMP NOT NULL,
    comment_text TEXT  DEFAULT (''),
    photo_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (photo_id) REFERENCES photo (photo_id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE 
);
`;

const LIKE_SCHEMA = `
CREATE TABLE IF NOT EXISTS like (
    like_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    photo_id INTEGER,
    user_id  INTEGER,
    like_date TIMESTAMP DEFAULT current_timestamp, 
    UNIQUE(user_id, photo_id ),
    FOREIGN KEY (photo_id) REFERENCES photo (photo_id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE
)
`;

db.serialize(() => {
    db.run("PRAGMA foreign_keys=ON");
    db.run(USER_SCHEMA);
    db.run(INSERT_DEFAULT_USER_1);
    db.run(PHOTO_SCHEMA);        
    db.run(INSERT_DEFAULT_PHOTO_1);        
    db.run(COMMENT_SCHEMA);     
    db.run(LIKE_SCHEMA);        

    db.each("SELECT * FROM user", (err, user) => {
        console.log('Users');
        console.log(user);
    });
});

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Database closed');
        process.exit(0);
    })
);

module.exports = db;