# Node Problem Set #1: Npm

---

Reminder: You must have Node installed for 
`npm` commands to run. You can download it
[here](https://nodejs.org/en/download/).

Notes on the various `npm` commands we'll see:

`npm init`: This command creates a new
"package.json" file in your projects if one does not
already exist. Always run this command if you are
starting a new project that will use node modules.
Typing `npm init -y` answers
"yes" to all the setup questions, giving you
the default "package.json".

`npm install`: This command looks at your "package.json"
and installs the node_modules corresponding to your
listed dependencies if the modules are not already
contained in your code. `npm install` is useful when you just
deleted your "node_modules" directory or your "package-lock.json".
If the command finds an uninstalled dependency, npm installs a new module
and updates (or creates) "package-lock.json".
More on that below.

`npm install <package-name>`: 
With this command, `npm` looks at "package.json" for
a dependency by the name of <package-name>.
If "package.json" does not exist or the dependency specified
is not there, `npm` installs the module from the npm
registry inside the "node_modules" directory.
Storing a node module in your project gives you
the code you need locally, which means that you can
develop your app using that functionality.
Reminder: the `npm` registry is a website that 
is just a big repository of code.

`npm install <package-name>` also creates or updates
a package-lock.json file. This file
specifies dependencies of your dependencies (for instance,
React relies on third-party modules including
`loose-envify` and `object-assign`). npm needs to know about
every single dependency in your code so that
your code will run correctly when you use a node module
like React. A "package-lock.json" file
allows the developer to manage their own direct dependencies
in "package.json" without managing 
the dependencies of those dependencies,
while still giving npm the information it needs for version
control of their packages (responding correctly when a package
gets updated) and dependency tracking.

`npm run build` combines all of your CSS and JS
files into one large CSS file and one large JS file.
This makes your website run a little faster for your
users because their browser will only make one GET
request on loading your site and no more
GET requests as they navigate between pages.

## Problem 1: Install a Node Module
In a new project, install the node module named `debug`

<details>
<summary>Solution</summary>

1. Since this is a new project using node modules,
you should run `npm init -y` to create a new template
"package.json" file. This file will make it much easier
to track your dependencies and to install new node
modules.
2. Run `npm install debug` to install the `debug` node
module into your project.
</details>

## Problem 2: How Many Node Modules Did You Just Install?

- 0
- 1
- 2

<details>
<summary>Solution</summary>

You just installed 2 node modules. You installed
the node module called `debug`, as well as
its one dependency, a node module called
`ms` that makes working with milliseconds
easier. If you missed this, you can check in 
the node_modules folder of your project, 
or you can look at [npmjs.com](https://www.npmjs.com/package/debug)
and search for 
the package you want to install to look
at its dependencies.
</details>

## Problem 3: How Many Dependents Does `express` Have?
<details>
<summary>Solution</summary>

This node module has 60,369 dependents at the time I'm writing
this problem set. It probably has more by the time you're
reading this. You can view the number of dependents a
node module has by viewing its page on the npm
registry. Here is the page for [express](https://www.npmjs.com/package/express).
You can view its dependents by looking at the number
on the purple "Dependents" tab. The `express` node module
gains one dependent whenever another project is created
or updated to use the `express` node module.
</details>