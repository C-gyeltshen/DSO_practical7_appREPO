pipeline {
    agent any

    environment {
        // DockerHub credentials ID stored in Jenkins
        DOCKER_CREDENTIALS_ID = 'meopen123'  
        DOCKER_IMAGE_NAME = 'gyeltshen23/dso-p7'  
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    nodeUtils.installDependencies()
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    nodeUtils.runTests()  // This should run 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerUtils.buildDockerImage(env.DOCKER_IMAGE_NAME)
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    dockerUtils.pushDockerImage(env.DOCKER_IMAGE_NAME, env.DOCKER_CREDENTIALS_ID)
                }
            }
        }
    }
}