#!/bin/bash
fileName=serviceAccount.json

echo "{" > $fileName

echo "  \"type\": \"service_account\"," >> $fileName
echo "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\"," >> $fileName
echo "  \"token_uri\": \"https://oauth2.googleapis.com/token\"," >> $fileName
echo "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\"," >> $fileName
echo "  \"universe_domain\": \"googleapis.com\"," >> $fileName


echo "  \"project_id\": \"$SA_PROJECT_ID\",">> $fileName
echo "  \"private_key_id\": \"$SA_PRIVATE_KEY_ID\"," >> $fileName
echo "  \"private_key\": \"$SA_PRIVATE_KEY\"," | sed ':a;N;$!ba;s/\n/\\n/g' >> $fileName
echo "  \"client_email\": \"$SA_CLIENT_EMAIL\"," >> $fileName
echo "  \"client_id\": \"$SA_CLIENT_ID\"," >> $fileName
echo "  \"client_x509_cert_url\": \"$SA_CERT_URL\"" >> $fileName

echo "}" >> $fileName