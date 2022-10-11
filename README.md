# cloud-server

[Link to: Server deployed using the AWS GUI](http://simpleserver-env.eba-ckwzv2pi.us-west-2.elasticbeanstalk.com/)

[Link to: Server deployed using CLI](http://cloud-server-dev22.us-west-2.elasticbeanstalk.com/)


**Process for deploying using the AWS GUI:**

1. [Go to Elastic Beanstalk home page](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/environments)
2. Select "Create a new environment"
3. Select "Web server environment"
4. a. Name the Application (simple-server)
   b. Choose the platforrm (Node.js)
   c. Under "Application code", select "Upload your code"
   d. Upload the zipped application
   e. Press the "Create Environment" button

**Process for deploying using the CLI:**

**Configure AWS in CLI:**

***Step 1: Create user, group, and get credentials from AWS.***

1. On AWS webpage, search for "IAM", select "IAM Manage access to AWS resources", click on "users" from the dropdown.
2. Select "Add users", enter username to create a new user, select "Access key - Programmatic access", click "Next: Permissions"
3. Create a group, name it, and under 'Permissions', grant "AdministratorAccess-AWSElasticBeanstalk". Press "Create Group"
4. Select "Next:Tags"
5. Select "Next: Review"
6. Select "Create user"

***Step 2: Setup CLI.***

1. Open Terminal.
2. input: "aws configure"
3. input: the access key from AWS
4. input: the Secret Access Key from AWS
5. input: the region name (\[us-west-2])
6. return past the default output format

***Step 3: Deploy with the CLI***

1. Navigate to the project in the terminal
2. ls to view files
3. input: "eb init" (intiailizes the directory with the EB CLI. Creates the application)
  a. Select region
  b. Select application or select create new application (create new application)
  c. If new app, type in name
  d. Yes, we’re using node.js
  e. Select platform branch (default is adequate)
  f. Setup ssh: no
4. input "eb create" (creates a new environment)
  a. Enter the environment name
  b. Ok to default prefix
  c. Load balancer: default
  d. Spot fleet: n?
  e. Server starts its build.
5. Once built, input "eb open" to launch the server in the browser.






