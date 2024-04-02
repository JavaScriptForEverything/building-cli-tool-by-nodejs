## Building CLI Tools in `JavaScript`

[Project Concept + Example found here](https://dev.to/shreshthgoyal/a-guide-to-building-cli-tools-in-javascript-28nn)


```
node -v 	# make sure Node.js installed
npm -v 	    # npm also available
```

#### Step-1: Create a project template

``` 
$ mkdir ~/Desktop/cli-project        # create templete directory
$ cd ~/Desktop/cli-project

$ npm init -y                        # Generate Node project
$ vi index.js                        # Create index.js file and add bellow code on it.

        NB: here is use vi text-editor to create a file
```

###### /index.js 
```
#!/usr/bin/env node                 // # (1) To run bin script by Node.js

const fs = require('fs')

const projectStructure = {          // # (2) defin project structure
  'src': ['index.js'],
  'public': ['index.html', 'styles.css'],
}

// # (3) create files + directories
Object.entries(projectStructure).forEach(([dir, files]) => {
  fs.mkdirSync(dir, { recursive: true })                // Create directories
  files.forEach(file => fs.writeFileSync(`${dir}/${file}`, '')) // Create files
})

// # (4) final output
console.log("Project structure created successfully!")
```


###### /package.json    : add bin script to run that node script 
```
{
  "name": "cli-tool",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {},                        # To run node-script

  "bin": {
    "setup-project": "./app.js"         # To run bin script
  },

  "keywords": [],
  "author": "",
  "license": "ISC"
}
```



#### Step-2: Generate bin script of project template for global 
- make sure run that script in the same template project directory.

```
$ npm link                      # create bin file in where node installed
$ which setup-project 	        # => ~/.../node/v20.11.1/bin/setup-project
$ cat $(which setup-project) 	# See the exact file created there
```



#### Step-3: Now that 'bin script' will be globally availabe 
- once bash script generated then that command can be run globally.

```
$ mkdir ~/Desktop/my-app-demo 	# create empty directory for testing
$ cd ~/Desktop/my-app-demo 	
$ setup-project 	            # Generate project from that script 
```