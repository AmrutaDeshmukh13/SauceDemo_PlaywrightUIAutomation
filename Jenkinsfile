pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
        allure 'Allure'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/AmrutaDeshmukh13/SauceDemo_PlaywrightUIAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**', allowEmptyArchive: true

            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }

        success {
            echo 'Test execution successful ✅'
        }

        failure {
            echo 'Test execution failed ❌'
        }
    }
}