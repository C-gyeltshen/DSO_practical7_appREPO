pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  
    }
    environment {
        CI = 'true'
    }

    environment {
        DOCKER_CREDENTIALS_ID = 'meopen123'
        DOCKER_IMAGE_NAME = 'gyeltshen23/dso-p7'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE_NAME)
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', env.DOCKER_CREDENTIALS_ID) {
                        docker.image(env.DOCKER_IMAGE_NAME).push()
                    }
                }
            }
        }
    }
}
