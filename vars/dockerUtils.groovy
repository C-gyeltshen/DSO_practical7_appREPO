def installDependencies() {
    sh 'npm ci'
}

def runTests() {
    sh 'npm test'
}
