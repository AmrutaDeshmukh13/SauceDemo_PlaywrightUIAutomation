pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

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

        stage('Generate Allure Report') {
            //steps {
                  // bat '''
                  // npx allure-commandline generate ./allure-results --clean -o ./allure-report
                  // '''
                  
  //  }
  steps {
        allure([
            includeProperties: false,
            results: [[path: 'allure-results']]
        ])
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