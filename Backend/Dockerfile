# Single-stage Docker image

# FROM maven:3.9.6-eclipse-temurin-21

# WORKDIR /app

# COPY pom.xml /app/

# RUN mvn -B dependency:resolve dependency:resolve-plugins

# COPY . .

# RUN mvn clean install -DskipTests

# ENV SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/employeedb?createDatabaseIfNotExist=true

# EXPOSE 8080

# RUN mv target/*.jar target/app.jar

# ENTRYPOINT [ "java","-jar","target/app.jar" ]


#Multi-stage Docker images

FROM maven:3.9.6-eclipse-temurin-21 As first

WORKDIR /app

COPY pom.xml /app/

RUN mvn -B dependency:resolve dependency:resolve-plugins

COPY . .

RUN mvn clean install -DskipTests

RUN mv target/*.jar target/app.jar

FROM eclipse-temurin:21-jre

COPY --from=first /app/target/app.jar .

EXPOSE 8080

ENTRYPOINT [ "java","-jar","app.jar" ]