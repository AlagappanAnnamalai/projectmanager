FROM openjdk:8
LABEL maintainer="alagappan.info@gmail.com"
ADD project-manager-service/target/project-manager-app.jar  project-manager-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "project-manager-app.jar"]
CMD ["--spring.profiles.active=docker"]
