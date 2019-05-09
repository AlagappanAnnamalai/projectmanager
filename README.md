**Project Manager Application - IIHT Certification Use Case**

_Prerequisite_
1. MySQL Server should be up and running in port 3636 and should have database named projectmanager
2. Should have JRE installed
3. [Optional]: docker setup if running in docker container

_Building Application_

[Without Docker]
1. Configure Jenkins Pipeline Job and refer to Jenkinsfile in root directory
2. Application will be build and artifact will be saved in the CI Server

[With Docker]
1. Move the application-docker.yml file to main resource folder
2. Configure Jenkins Pipeline Job and refer to Jenkinsfile in docker directory
3. Application will be build and containers will be pushed to docker
4. Project Manager Application instance will be started in CI server


_Running the Application_

[Without Docker]
1. Use command `java -jar project-manager-app.jar`
2. Application will be running in 8000 port
3. Access the application by hitting `http://localhost:8000` 

[With Docker]
1. Use command `docker-compose docker-compose.yml up`
2. Application will be running in 8000 port in dokcer container
3. Access the application by hitting `http://localhost:8000` 


_Other Details_
1. `mvn clean install sonar:sonar` - Can be used to analyse the code and find Junit Coverage in sonar dashboard
2. Sonar will be running in `http://localhost:9000`
3. Jenkins will be running in `http://localhost:8080`
4. JMeter Load Run can be run using command `jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]`
5. XAMPP MySQL Server is used for development purpose
6. npm goal is added to maven hence UI will be packaged in to same application as that of service
