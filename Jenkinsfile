pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                git 'https://github.com/AmrutaDeshmukh13/SauceDemo_PlaywrightUIAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate ./allure-results --clean -o ./allure-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
        failure {
            echo 'Test execution failed ❌'
        }
        success {
            echo 'Test execution successful ✅'
        }
    }
}