CREATE TABLE quote (
    id SERIAL PRIMARY KEY,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    embed_code url NOT NULL,
    status boolean,
    -- created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    -- updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO quote (id, title, description,embed_code,status) VALUES 
(1, 'title', 'description','embed',TRUE), 
(2, 'title2', 'description2','embed_2',FALSE), 
(3, 'title3', 'description3','embed_3',TRUE); 