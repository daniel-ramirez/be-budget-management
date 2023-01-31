FROM oraclelinux:8.7

LABEL developer="Daniel Ramirez"

ENV ORACLE_USER=appuser \
    ORACLE_PASS=mypass \
    ORACLE_CONNSTRING=localhost:1522/xepdb1 \
    SERVER_PORT=3000

# installing oracle instant client
RUN dnf install oracle-instantclient-release-el8 -y
RUN dnf install oracle-instantclient-basic -y
RUN dnf list installed | grep instantclient


#install node.js
RUN dnf module enable nodejs:16 -y
RUN dnf module install nodejs -y

#copying application files
COPY . /opt/budget-management-api

#change directory before install all node components
WORKDIR /opt/budget-management-api

RUN npm install
RUN npm install oracledb

#npm start as main container process
CMD ["npm","start"]