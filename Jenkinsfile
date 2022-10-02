node{
    stage('CheckOut') {
        steps:{
            echo 'Clone'
            git branch: "master",
                credentialsId :  "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",
                url: 'git@github.com:eorjs37/vue3-bootstrap-veevalidate.git'
        }
    }
    stage('Install'){
        steps:{
            echo "---npm install---"
            sh "npm install"
        }
    }
    stage('Build') {
        steps:{
            echo "---npm Build---"
            sh "npm run build"
        }
    }
    stage('Deploy') {
        steps:{
            echo "---Deploy---"
            sh "rm -rf /var/www/vuebootstrap/dist/"
            sh "mv -f dist/ /var/www/vuebootstrap"
        }       
    }
}