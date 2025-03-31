CREATE TABLE BATCH_JOB_INSTANCE ( JOB_INSTANCE_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, VERSION INTEGER , JOB_NAME VARCHAR(100) NOT NULL, JOB_KEY VARCHAR(32) NOT NULL, constraint JOB_INST_UN unique (JOB_NAME, JOB_KEY) );
CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE BATCH_JOB_EXECUTION ( JOB_EXECUTION_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, VERSION INTEGER , JOB_INSTANCE_ID INTEGER NOT NULL, CREATE_TIME TIMESTAMP NOT NULL, START_TIME TIMESTAMP DEFAULT NULL , END_TIME TIMESTAMP DEFAULT NULL , STATUS VARCHAR(10) , EXIT_CODE VARCHAR(100) , EXIT_MESSAGE VARCHAR(2500) , LAST_UPDATED TIMESTAMP, constraint JOB_INST_EXEC_FK foreign key (JOB_INSTANCE_ID) references BATCH_JOB_INSTANCE(JOB_INSTANCE_ID) );
CREATE TABLE BATCH_JOB_EXECUTION_PARAMS ( JOB_EXECUTION_ID INTEGER NOT NULL , PARAMETER_NAME VARCHAR(100) NOT NULL , PARAMETER_TYPE VARCHAR(100) NOT NULL , PARAMETER_VALUE VARCHAR(2500) , IDENTIFYING CHAR(1) NOT NULL , constraint JOB_EXEC_PARAMS_FK foreign key (JOB_EXECUTION_ID) references BATCH_JOB_EXECUTION(JOB_EXECUTION_ID) );
CREATE TABLE BATCH_STEP_EXECUTION ( STEP_EXECUTION_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, VERSION INTEGER NOT NULL, STEP_NAME VARCHAR(100) NOT NULL, JOB_EXECUTION_ID INTEGER NOT NULL, CREATE_TIME TIMESTAMP NOT NULL, START_TIME TIMESTAMP DEFAULT NULL , END_TIME TIMESTAMP DEFAULT NULL , STATUS VARCHAR(10) , COMMIT_COUNT INTEGER , READ_COUNT INTEGER , FILTER_COUNT INTEGER , WRITE_COUNT INTEGER , READ_SKIP_COUNT INTEGER , WRITE_SKIP_COUNT INTEGER , PROCESS_SKIP_COUNT INTEGER , ROLLBACK_COUNT INTEGER , EXIT_CODE VARCHAR(100) , EXIT_MESSAGE VARCHAR(2500) , LAST_UPDATED TIMESTAMP, constraint JOB_EXEC_STEP_FK foreign key (JOB_EXECUTION_ID) references BATCH_JOB_EXECUTION(JOB_EXECUTION_ID) );
CREATE TABLE BATCH_STEP_EXECUTION_CONTEXT ( STEP_EXECUTION_ID INTEGER NOT NULL PRIMARY KEY, SHORT_CONTEXT VARCHAR(2500) NOT NULL, SERIALIZED_CONTEXT CLOB , constraint STEP_EXEC_CTX_FK foreign key (STEP_EXECUTION_ID) references BATCH_STEP_EXECUTION(STEP_EXECUTION_ID) );
CREATE TABLE BATCH_JOB_EXECUTION_CONTEXT ( JOB_EXECUTION_ID INTEGER NOT NULL PRIMARY KEY, SHORT_CONTEXT VARCHAR(2500) NOT NULL, SERIALIZED_CONTEXT CLOB , constraint JOB_EXEC_CTX_FK foreign key (JOB_EXECUTION_ID) references BATCH_JOB_EXECUTION(JOB_EXECUTION_ID) );
CREATE TABLE BATCH_STEP_EXECUTION_SEQ ( ID INTEGER PRIMARY KEY AUTOINCREMENT );
CREATE TABLE BATCH_JOB_EXECUTION_SEQ ( ID INTEGER PRIMARY KEY AUTOINCREMENT );
CREATE TABLE BATCH_JOB_SEQ ( ID INTEGER PRIMARY KEY AUTOINCREMENT );
CREATE TABLE episode (
        episode_number integer not null,
        release_date date,
        runtime numeric(38,2) not null,
        created_date timestamp not null,
        id integer,
        modified_date timestamp not null,
        season_id bigint not null,
        original_title varchar(255) not null,
        title varchar(255) not null,
        primary key (id)
    );
CREATE TABLE movie (
        available_globally boolean,
        release_date date,
        created_date timestamp not null,
        id integer,
        modified_date timestamp not null,
        runtime bigint,
        locale varchar(10),
        original_title varchar(255),
        title varchar(255) not null,
        primary key (id)
    );
CREATE TABLE season (
        release_date date,
        season_number integer,
        created_date timestamp not null,
        id integer,
        modified_date timestamp not null,
        runtime bigint,
        tv_show_id bigint,
        original_title varchar(255),
        title varchar(255) not null,
        primary key (id)
    );
CREATE TABLE tv_show (
        available_globally boolean,
        release_date date,
        created_date timestamp not null,
        id integer,
        modified_date timestamp not null,
        locale varchar(10),
        original_title varchar(255),
        title varchar(255) not null,
        primary key (id)
    );
CREATE TABLE view_summary (
        cumulative_weeks_in_top10 integer,
        end_date date not null,
        hours_viewed integer not null,
        start_date date not null,
        view_rank integer,
        views integer,
        created_date timestamp not null,
        id integer,
        modified_date timestamp not null,
        movie_id bigint,
        season_id bigint,
        duration varchar(20) not null check (duration in ('WEEKLY','SEMI_ANNUALLY')),
        primary key (id)
    );
CREATE INDEX fk_episode_season_id 
       on episode (season_id);
CREATE INDEX idx_movie_title_runtime 
       on movie (title, runtime);
CREATE INDEX idx_season_title_runtime 
       on season (title, runtime);
CREATE INDEX fk_season_tv_show_id 
       on season (tv_show_id);
