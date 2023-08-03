# FROM java:8
FROM eclipse-temurin:17-jdk-jammy
COPY . /tmp/java
WORKDIR /tmp/java
RUN javac Hello.java
CMD ["java","Hello"]