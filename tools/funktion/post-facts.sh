
# curl -i -H "Content-Type: application/xml" -H "X-KIE-ContentType: XSTREAM" -d @"post-facts.xml" -u "erics:jbossbrms1!" -X POST "http://weightwatcher.vagrant.f8/kie-server/services/rest/server/containers/instances/watch"

# curl -i -H "Content-Type: application/xml" -d @"post-facts.xml" -X POST "http://localhost:9090"

curl -i -H "Content-Type: application/xml" -d @"post-facts.xml" -X POST "http://funktion-weightwatcher-default.vagrant.f8"
