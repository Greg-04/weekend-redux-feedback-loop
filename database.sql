-- Database should be prime_feedback
--Tests failed with the name "prime_feedback", changed name to "feedback"

-- Switch to "prime_feedback" before making:
-- Table to store the feedback

CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');

SELECT * FROM "feedback" ORDER BY "id";