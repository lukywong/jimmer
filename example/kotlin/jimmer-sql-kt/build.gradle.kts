import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.0"
	id("io.spring.dependency-management") version "1.0.12.RELEASE"
	kotlin("jvm") version "1.6.21"
	kotlin("plugin.spring") version "1.6.21"
	id("com.google.devtools.ksp") version "1.7.10-1.0.6"
}

group = "org.babyfish.jimmer.example.kt"
version = "0.4.10"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
	mavenCentral()
}

dependencies {

	implementation("org.babyfish.jimmer:jimmer-sql-kotlin:0.4.10")
	ksp("org.babyfish.jimmer:jimmer-ksp:0.4.10")

	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	testImplementation("org.springframework.boot:spring-boot-starter-test")

	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-jdbc")
	implementation("org.springdoc:springdoc-openapi-ui:1.6.11")

	implementation("org.springframework.data:spring-data-redis")
	implementation("org.springframework.kafka:spring-kafka:2.9.0")

	// In order to work with java-8, caffeine 2.x mus be used
	implementation("com.github.ben-manes.caffeine:caffeine:2.9.1")

	runtimeOnly("com.h2database:h2:2.1.212")
	runtimeOnly("mysql:mysql-connector-java:8.0.30")
	runtimeOnly("io.lettuce:lettuce-core:6.2.0.RELEASE")
}

// Without this configuration, gradle command can still run.
// However, Intellij cannot find the generated source.
kotlin {
	sourceSets.main {
		kotlin.srcDir("build/generated/ksp/main/kotlin")
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
