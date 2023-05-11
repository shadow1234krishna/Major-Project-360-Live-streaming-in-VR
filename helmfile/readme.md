# MAJOR_PROJECT_DOCS
for better understanding check general docs first [DOCS REPO](https://github.com/Waddah-Ahmad/MAJOR_PROJECT_DOCS.git "repo home")
> this project have future work and some requirements to be added like extra security , extra test codes , underlying infra for tha application

# HELM REPO
this repository presents two types of environment ,staging and release.

this repository being edited by jenkins job configured to take as input app name, environemt , and new docker image tag after any successful build of any app

# PROJECT WORKFLOW
stable file which includes helm charts with them values
generating files by executing :
> helmfile -e staging template --output-dir-template files/staging/app/{{.Release.Name}}

or 
> helmfile -e release template --output-dir-template files/release/app/{{.Release.Name}}

to install directly:
> helmfile apply -e release

# HOW IT WORKS
it installs the stack with istio ingress gateway 

it is configured in jenkins job to generate templates and push them to [MANIFIST REPO](https://github.com/Waddah-Ahmad/MP_k8s-manifist.git  "repo home")


### Future work
migrating to use Vault for secrets and waves to be deployable with no errors with ArgoCD