CREATE DATABASE TestDB;
GO

USE TestDB;
GO

IF OBJECT_ID('Users', 'U') IS NOT NULL
    DROP TABLE Users;
GO

CREATE TABLE Users (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255),
    location VARCHAR(100),
    bio TEXT,
    created_at DATETIME DEFAULT GETDATE(),
    last_login DATETIME
);
GO

IF OBJECT_ID('Skills', 'U') IS NOT NULL
    DROP TABLE Skills;
GO

CREATE TABLE Skills (
    skill_id INT PRIMARY KEY IDENTITY(1,1),
    skill_name NVARCHAR(100) NOT NULL,
    category NVARCHAR(100),
    description TEXT
);
GO

IF OBJECT_ID('UserSkills', 'U') IS NOT NULL
    DROP TABLE UserSkills;
GO

CREATE TABLE UserSkills (
    user_skill_id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT,
    skill_id INT,
    proficiency_level NVARCHAR(50),
    is_offering BIT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (skill_id) REFERENCES Skills(skill_id)
);
GO

INSERT INTO Users (username, email, password, location, bio)
VALUES ('johndoe', 'john@example.com', 'hashedpassword123', 'New York', 'I love teaching photography and want to learn coding');
GO

INSERT INTO Skills (skill_name, category, description)
VALUES ('JavaScript', 'Programming', 'Web development programming language');
GO

INSERT INTO UserSkills (user_id, skill_id, proficiency_level, is_offering)
VALUES (1, 1, 'expert', 1);
GO

SELECT * FROM Users;
GO

SELECT * FROM Skills;
GO

SELECT * FROM UserSkills;
GO

SELECT 
    u.username,
    s.skill_name,
    us.proficiency_level
FROM 
    UserSkills us
INNER JOIN 
    Users u ON us.user_id = u.user_id
INNER JOIN 
    Skills s ON us.skill_id = s.skill_id;
GO

USE TestDB;
GO

SELECT 
    u.username,
    u.email,
    s.skill_name,
    us.proficiency_level
FROM 
    Users u
INNER JOIN 
    UserSkills us ON u.user_id = us.user_id
INNER JOIN 
    Skills s ON us.skill_id = s.skill_id
WHERE 
    s.skill_name = 'JavaScript';  -- 🔥 Search by skill name
GO

CREATE VIEW UserSkillView AS
SELECT 
    u.username,
    u.email,
    s.skill_name,
    us.proficiency_level
FROM 
    Users u
INNER JOIN 
    UserSkills us ON u.user_id = us.user_id
INNER JOIN 
    Skills s ON us.skill_id = s.skill_id;
GO

SELECT * FROM UserSkillView WHERE skill_name = 'JavaScript';
GO
